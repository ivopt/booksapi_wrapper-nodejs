import BookService from '../src/bookService'

describe('BookService', () => {
  describe('#search', () => {
    const fakeQuery = 'http://somerandom.url'
    let queryBuilderMock, bookRepositoryMock, subject

    beforeEach(() => {
      queryBuilderMock = jest.fn(() => fakeQuery)
      bookRepositoryMock = {find: jest.fn(() => Promise.resolve([]))}
      subject = BookService(queryBuilderMock, bookRepositoryMock)
    })

    it('calls passes the search parameters to the query builder', () => {
      const title = 'Two Towers',
            author = 'Tolkien',
            term = 'Hobbits'

      return subject.search(term, author, title).then(() => {
        expect(queryBuilderMock.mock.calls.length).toEqual(1)
        expect(queryBuilderMock.mock.calls[0][0]).toEqual({term, author, title})
      })
    })

    it('calls the book repository with the query returned from the builder', () => {
      return subject.search('Tolkien').then(() => {
        expect(bookRepositoryMock.find.mock.calls.length).toEqual(1)
        expect(bookRepositoryMock.find.mock.calls[0][0]).toEqual(fakeQuery)
      })
    })
  })
})
