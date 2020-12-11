type Activity = {
  code: string
  description: string
}

type Member = {
  name: string
  tax_id: string
  role: {
    code: string
    description: string
  }
}

type Partner = {
  name: string
  alias: string
  tax_id: string
  founded: Date
  capital: string | null
}

type Registration = {
  number: number
  state: string
  enabled: boolean
}

type Error = {
  status: number
  service: string
  message: string
}

export interface Company {
  last_update: Date
  name: string
  alias: string
  tax_id: string
  type: string
  founded: string
  size: string
  capital: number
  email: string
  phone: string
  phone_alt: string
  federal_entity: string
  registration: {
    status: string
    status_date: Date
    status_reason: string | null
    special_status: string | null
    special_status_date: string | null
  }
  address: {
    street: string
    number: string
    details: string | null
    zip: string
    neighborhood: string
    city: string
    state: string
    city_ibge: string
    state_ibge: string
  }
  legal_nature: {
    code: string
    description: string
  }
  primary_activity: Activity
  secondary_activities: Activity[]
  membership: Member[]
  partnership: Partner[]
  simples_nacional: {
    last_update: Date
    simples_optant: boolean
    simples_included: string | null
    simples_excluded: string | null
    simei_optant: boolean
  }
  sintegra: {
    last_update: Date
    home_state_registration: string
    registrations: Registration[]
  }
  files: {
    registration: string
    membership: string
  }
  maps: {
    roads: string
    satellite: string
    street: string
  }
  error?: Error[]
}
