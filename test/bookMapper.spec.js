import Ajv from 'ajv'
import BookMapper from '../src/bookMapper'

describe('BookMapper', () => {
  const apiBookBuilder = ({title, authors, publisher, categories, industryIdentifiers}) => ({
    volumeInfo: {
      title,
      authors,
      publisher,
      categories,
      industryIdentifiers
    }
  })

  describe('schema', () => {
    const bookSchema = require('../test/schemas/book.json')
    const apiBook = require('../test/fixtures/apiBook.json')
    const validator = new Ajv().compile(bookSchema)

    it('maps an api book onto a valid the internal schema representation', () => {
      const book = BookMapper(apiBook)
      expect(validator(book)).toBeTruthy()
      expect(book.title).toEqual('J.R.R. Tolkien')
      expect(book.authors).toEqual('Harold Bloom')
      expect(book.publisher).toEqual('Infobase Publishing')
      expect(book.categories).toEqual('Juvenile Nonfiction')
      expect(book.isbn).toEqual('9781604131468')
    })
  })

  describe('fields', () => {
    describe('title', () => {
      it('is what the api result has on the title property', () => {
        const apibook = apiBookBuilder({title: 'some title'})
        const mapped = BookMapper(apibook)
        expect(mapped.title).toEqual('some title')
      })
    })

    describe('authors', () => {
      it('when undefined, the mapped book also has empty string', () => {
        const apibook = apiBookBuilder({ authors: undefined })
        const mapped = BookMapper(apibook)
        expect(mapped.authors).toBe('')
      })

      it('when single author, the mapped book shows that author', () => {
        const apibook = apiBookBuilder({ authors: ['jack'] })
        const mapped = BookMapper(apibook)
        expect(mapped.authors).toEqual('jack')
      })

      it('when multiple authors, the mapped book shows them as a CSV string', () => {
        const apibook = apiBookBuilder({ authors: ['jack', 'jill'] })
        const mapped = BookMapper(apibook)
        expect(mapped.authors).toEqual('jack, jill')
      })
    })

    describe('publisher', () => {
      it('is what the api result has on the publisher property', () => {
        const apibook = apiBookBuilder({publisher: 'some publisher'})
        const mapped = BookMapper(apibook)
        expect(mapped.publisher).toEqual('some publisher')
      })
    })

    describe('categories', () => {
      it('when undefined, the mapped book also has empty string', () => {
        const apibook = apiBookBuilder({ categories: undefined })
        const mapped = BookMapper(apibook)
        expect(mapped.categories).toEqual('')
      })

      it('when multiple categories, the mapped book shows them as a CSV string', () => {
        const apibook = apiBookBuilder({ categories: ['cat1', 'cat2'] })
        const mapped = BookMapper(apibook)
        expect(mapped.categories).toEqual('cat1, cat2')
      })
    })

    describe('isbn', () => {
      it('when undefined, the mapped book also has "N/A"', () => {
        const apibook = apiBookBuilder({ industryIdentifiers: undefined })
        const mapped = BookMapper(apibook)
        expect(mapped.isbn).toBe('N/A')
      })

      it('when contains isbn13, the mapped book shows that isbn', () => {
        const apibook = apiBookBuilder({
          industryIdentifiers: [
            { type: "ISBN_13", identifier: "aaa" }
          ]
        })
        const mapped = BookMapper(apibook)
        expect(mapped.isbn).toEqual('aaa')
      })

      it('when contains isbn10 but not isbn13, the mapped book shows the isbn10', () => {
        const apibook = apiBookBuilder({
          industryIdentifiers: [
            { type: "ISBN_10", identifier: "bbb" }
          ]
        })
        const mapped = BookMapper(apibook)
        expect(mapped.isbn).toEqual('bbb')
      })

      it('when contains both isbn10 and isbn13, the mapped book shows the isbn13', () => {
        const apibook = apiBookBuilder({
          industryIdentifiers: [
            { type: "ISBN_10", identifier: "bbb" },
            { type: "ISBN_13", identifier: "aaa" }
          ]
        })
        const mapped = BookMapper(apibook)
        expect(mapped.isbn).toEqual('aaa')
      })

      it('when contains identifiers but none is a isbn, the mapped book shows the "N/A"', () => {
        const apibook = apiBookBuilder({
          industryIdentifiers: [
            { type: "SOMETHING", identifier: "bbb" },
            { type: "ANOTHERTHING", identifier: "aaa" }
          ]
        })
        const mapped = BookMapper(apibook)
        expect(mapped.isbn).toEqual('N/A')
      })
    })
  })
})
