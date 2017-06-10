// BookMapper - maps an API result to an internal representation

const BookMapper = ({ volumeInfo }) => ({
  title:      volumeInfo.title,
  authors:    flatten(volumeInfo.authors),
  publisher:  volumeInfo.publisher,
  categories: flatten(volumeInfo.categories),
  isbn:       mapISBN(volumeInfo.industryIdentifiers)
})

export default BookMapper

// -----------------------------------------------------------------------------
// Private

const mapISBN = (identifiers) => {
  if (!identifiers) return 'N/A'

  const isbn13 = identifiers.find(i => i.type == 'ISBN_13')
  const isbn10 = identifiers.find(i => i.type == 'ISBN_10')

  return isbn13 ? isbn13.identifier : (isbn10 ? isbn10.identifier : 'N/A')
}

const flatten = (array) => array ? array.join(', ') : ''
