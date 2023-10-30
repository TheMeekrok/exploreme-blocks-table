export interface IBlock {
  height: number
  time: string
  hash: string
  txsCount: number
  proposer: {
    operatorAddress: string
    moniker: string
    avatar: string
  }
  canonical: boolean
}
