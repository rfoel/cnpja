import fetch from 'node-fetch'

import { CNPJaError } from './error'

type RequestParams = {
  uri: string
  params?: any
}

export class Request {
  request: any
  private apiKey: string

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  public async makeApiRequest<Response>({
    uri,
    params = {},
  }: RequestParams): Promise<any | Blob> {
    try {
      const query: string = new URLSearchParams(
        Object.keys(params).reduce(
          (acc, key): object =>
            params[key] ? { ...acc, [key]: params[key] } : acc,
          {},
        ),
      ).toString()

      const response = await fetch(`https://api.cnpja.com.br/${uri}?${query}`, {
        headers: { Authorization: this.apiKey },
      })

      if (!response.ok) {
        throw response
      }

      if (response.headers.get('content-type').includes('application/pdf')) {
        return await response.blob()
      }

      return await response.json()
    } catch (error) {
      const data = await error.json()
      switch (error.status) {
        case 400:
        case 401:
        case 404:
        case 429:
        case 503:
        case 503:
          throw new CNPJaError(error, data)
        default:
          throw error
      }
    }
  }
}
