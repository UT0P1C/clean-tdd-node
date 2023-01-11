module.exports = class UnauthorizedError extends Error {
  constructor () {
    super('Unauthorized access')
    this.name = 'Unauthorized'
  }
}
