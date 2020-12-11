type Request = {
  id: number
  path: string
  requested: string
  status: number
  time: number
  cost: number
}

export interface Requests {
  count: number
  results: Request[]
}
