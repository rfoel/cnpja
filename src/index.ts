import { Company, Me, Requests } from './models'
import { Request } from './request'

export * from './models'

type CompaniesParams = {
  company_max_age?: number
  simples_max_age?: number
  sintegra_max_age?: number
  enable_cache_fallback?: boolean
}

type RequestsParams = {
  start_date: string
  end_date: string
}

export class CNPJa {
  private readonly request: Request

  constructor(apiKey: string) {
    this.request = new Request(apiKey)
  }

  async companies(
    cnpj: string,
    {
      company_max_age = 1,
      simples_max_age,
      sintegra_max_age,
      enable_cache_fallback = false,
    }: CompaniesParams = {},
  ): Promise<Company> {
    return await this.request.makeApiRequest<Company>({
      uri: `companies/${cnpj}`,
      params: {
        company_max_age,
        simples_max_age,
        sintegra_max_age,
        enable_cache_fallback,
      },
    })
  }

  async files(fileToken: string): Promise<Buffer> {
    return await this.request.makeApiRequest<Buffer>({
      uri: `files/${fileToken}`,
    })
  }

  async me(): Promise<Me> {
    return await this.request.makeApiRequest<Me>({ uri: 'me' })
  }

  async requests(params: RequestsParams): Promise<Requests> {
    return await this.request.makeApiRequest<Requests>({
      uri: 'me/requests',
      params,
    })
  }
}
