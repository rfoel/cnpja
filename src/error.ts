export class CNPJaError {
  details: any
  message: string
  status: number
  statusText: string

  constructor(error: Response, data: any) {
    this.details = data.details
    this.message = data.message
    this.status = error.status
    this.statusText = error.statusText
  }
}
