// BookRepository - responsible for getting results from the API

const bookRepository = (httpClient) => ({
  find(query) {
    return httpClient.get(query)
                     .then(resp => resp.data.items.map(mapItemToBook))
  }
})

export default bookRepository

// -----------------------------------------------------------------------------
// Private

const mapISBN = (identifiers) => {
  if (!identifiers) return 'N/A'

  const isbn13 = identifiers.find(i => i.type == 'ISBN_13')
  const isbn10 = identifiers.find(i => i.type == 'ISBN_10')

  return isbn13 ? isbn13.identifier : (isbn10 ? isbn10.identifier : 'N/A')
}

const flatten = (array) => array ? array.join(', ') : ''

const mapItemToBook = ({ volumeInfo }) => ({
    title:               volumeInfo.title,
    authors:             flatten(volumeInfo.authors),
    publisher:           volumeInfo.publisher,
    categories:          flatten(volumeInfo.categories),
    industryIdentifiers: mapISBN(volumeInfo.industryIdentifiers)
  })
