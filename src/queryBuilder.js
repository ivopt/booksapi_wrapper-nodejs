const queryBuilder = baseURL => (term, author, title) => {
  let url = `${baseURL}${term}`

  if (author)
    url = `${url}+inauthor:${author}`

  if (title)
    url = `${url}+intitle:${title}`

  return url
}

export default queryBuilder
