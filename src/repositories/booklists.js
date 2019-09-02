import repository from '@/repositories/index.js'

export default {
  get(resource) {
    return repository.get(resource)
  }
}
