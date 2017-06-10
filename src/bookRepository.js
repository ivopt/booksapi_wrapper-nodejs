// BookRepository - responsible for getting results from the API

const bookRepository = (httpClient, bookMapper) => ({
  find(query) {
    return httpClient.get(query)
                     .then(resp => resp.data.items.map(bookMapper))
  }
})

export default bookRepository
