const LoginRouter = require('./login-router')
const MissingParamError = require('../helpers/missing-params')

const makeSut = () => {
  return new LoginRouter()
}

describe('Login Router', () => {
  test('should return 400 if email is not provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        password: 'any_pass'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('should return 400 if password is not provided', () => {
    const sut = makeSut()

    const httpRequest = {
      body: {
        email: 'anyemail@email.com'
      }
    }

    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  test('should return 500 if httpRequest is not provided or valid', () => {
    const sut = makeSut()
    const httpResponse = sut.route()
    expect(httpResponse.statusCode).toBe(500)
  })

  test('should return 500 if httpRequest has no body', () => {
    const sut = makeSut()
    const httpResponse = sut.route({})
    expect(httpResponse.statusCode).toBe(500)
  })

  test('should call AuthUseCase with valid credentials', () => {
    const sut = makeSut()
    const httpResponse = sut.route({})
    expect(httpResponse.statusCode).toBe(500)
  })
})
