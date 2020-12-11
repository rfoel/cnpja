type Subscription = {
  status: string
  payment_method: string
  activated: string
  plan: {
    name: string
    price: string
    credits: number
    reffils: string
    reccurence: string
  }
}

export interface Me {
  email: string
  name: string
  given_name: string
  family_name: string
  nickname: string
  status: string
  remaining_credits: number
  profile_picture: string | null
  subscriptions: Subscription[]
}
