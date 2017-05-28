const bookService = (
  queryBuilder,
  bookRepository
) => (term, author, title) => {
  const query = queryBuilder(term, author, title)
  return bookRepository(query)
}

export default bookService;
