import * as nock from 'nock'
import { CNPJa } from '../src'
import { CNPJaError } from '../src/error'

const scope = nock('https://api.cnpja.com.br/')

let cnpja: CNPJa

beforeEach(() => {
  cnpja = new CNPJa('apiKey')
})

it('should throw bad request error', async () => {
  scope.get('/companies/000').query(true).reply(404, {
    status: 400,
    statusText: 'Bad Request',
  })
  try {
    await cnpja.companies('000')
  } catch (error) {
    expect(error).toEqual(new CNPJaError(error, {}))
  }
})
