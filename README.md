# Description

A simple CLI app that retrieves book information details from Google Books API.
The app is able to filter results by:

* author name
* book title
* free form text that can match any book detail

(any combination of these factors is allowed)

A session with the app can look like this:

```
$ ./books -a Tolkien
-
  title:               Beowulf
  authors:             J. R. R. Tolkien
  publisher:           Houghton Mifflin Harcourt
  categories:          Fiction
  industryIdentifiers: 9780544442788
-
  title:               The Letters of J.R.R. Tolkien
  authors:             J.R.R. Tolkien
  publisher:           Houghton Mifflin Harcourt
  categories:          Biography & Autobiography
  industryIdentifiers: 9780544363793
-
  title:               Finn and Hengest
  authors:             John Ronald Reuel Tolkien, Alan Joseph Bliss
  publisher:           Houghton Mifflin Harcourt
  categories:          Literary Criticism
  industryIdentifiers: N/A
-
  title:               The History of the Hobbit: Mr. Baggins
  authors:             John D. Rateliff, John Ronald Reuel Tolkien
  categories:          Fantasy fiction, English
  industryIdentifiers: N/A
```

# Dependencies

* NodeJS
* Yarn

# Building

* First install all npm packages: `yarn`
* Then run the build task: `yarn build`

From this point on, just use `./book` at will

# Usage

```
$ books -h

  Usage: books [options] <term>

  Options:

    -h, --help             output usage information
    -V, --version          output the version number
    -a, --author [author]  filter by author
    -t, --title [title]    filter by title
```

# Development

**TODO**
