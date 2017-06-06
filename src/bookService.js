const bookService = (
  queryBuilder,
  bookRepository
) => ({
  search(term, author, title) {
    const query = queryBuilder({term, author, title})
    return bookRepository.find(query)
  }
})

export default bookService
