import BookRepository from '../src/bookRepository'

describe('BookRepository', () => {
  describe('#find', () => {
    const httpResponse = { data: require('../test/fixtures/tolkien.json') }
    let httpClientMock, bookMapperMock, subject

    beforeEach(() => {
      httpClientMock = {
        get: jest.fn(() => Promise.resolve(httpResponse))
      }
      bookMapperMock = jest.fn()
      subject = BookRepository(httpClientMock, bookMapperMock)
    })

    it('calls the http client "get" once with the given query', () => {
      const query = 'somedummy/query'
      return subject.find(query).then(() => {
        expect(httpClientMock.get.mock.calls.length).toEqual(1)
        expect(httpClientMock.get.mock.calls[0][0]).toEqual(query)
      })
    })

    it('calls the mapper on each item on the data.item of the http response', () => {
      return subject.find('somedummy/query').then(() => {
        expect(
          bookMapperMock.mock.calls.length
        ).toEqual(httpResponse.data.items.length)
      })
    })
  })
})
