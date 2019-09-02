import booklistsRepository from '@/repositories/booklists'
import booksRepository from '@/repositories/books'

const repositories = {
  booklists: booklistsRepository,
  books: booksRepository
}

export const repositoryFactory = {
  create: name => repositories[name]
}
