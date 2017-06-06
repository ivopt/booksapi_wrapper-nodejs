import QueryBuilder from '../src/queryBuilder'

describe('QueryBuilder', () => {
  const baseURL = 'http://www.example.com?q='
  const qBuilder = QueryBuilder(baseURL)

  it('returns urls based off of the baseURL', () => {
    const url = qBuilder({})
    expect(url.startsWith(baseURL)).toBeTruthy
  })

  it('when given a term sets it as the query to execute', () => {
    const term = 'banana'
    expect(qBuilder({term})).toMatch(/.*q=banana/)
  })

  describe('author argument', () => {
    it('when given, sets it as a filter on the query', () => {
      const author = 'jack'
      expect(qBuilder({author})).toMatch(/.*\+inauthor:jack/)
    })

    it('when null, leaves que query intact', () => {
      const author = null
      expect(qBuilder({author})).not.toMatch(/.*\+inauthor:.*/)
    })

    it('when empty, leaves que query intact', () => {
      const author = ''
      expect(qBuilder({author})).not.toMatch(/.*\+inauthor:.*/)
    })
  })

  describe('title argument', () => {
    it('when given, sets it as a filter on the query', () => {
      const title = 'jack'
      expect(qBuilder({title})).toMatch(/.*\+intitle:jack/)
    })

    it('when null, leaves que query intact', () => {
      const title = null
      expect(qBuilder({title})).not.toMatch(/.*\+intitle:.*/)
    })

    it('when empty, leaves que query intacty', () => {
      const title = ''
      expect(qBuilder({title})).not.toMatch(/.*\+intitle:.*/)
    })
  })
})
