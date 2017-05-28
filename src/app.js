import prettyjson from 'prettyjson'
import axios from 'axios'
import dotenv from 'dotenv'
import commander from 'commander'

import locator from './locator'
import BookService from './bookService'
import BookRepository from './bookRepository'
import QueryBuilder from './queryBuilder'

// -----------------------------------------------------------------------------
dotenv.config()
// -----------------------------------------------------------------------------

// Wiring phase...
locator
  .register('httpClient', axios)
  .register('queryBuilder', QueryBuilder(process.env.BOOKS_API_URL))
  .register('bookRepository', BookRepository(locator.httpClient))
  .register('bookService', BookService(locator.queryBuilder, locator.bookRepository))

// Argv parsing
commander
  .version('0.0.1')
  .usage('[options] <term>')
  .option('-a, --author [author]', 'filter by author')
  .option('-t, --title [title]', 'filter by title')
  .parse(process.argv);

const term = commander.args.pop()
const author = commander.author
const title = commander.title

export const main = () => {
  locator.bookService(term, author, title).then(
    response => console.log(prettyjson.render(response)))
}
