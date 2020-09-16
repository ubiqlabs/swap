import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from './NetworkConnector'

const NETWORK_URL = process.env.REACT_APP_NETWORK_URL

if (typeof NETWORK_URL === 'undefined') {
  throw new Error(`REACT_APP_NETWORK_URL must be a defined environment variable`)
}

export const network = new NetworkConnector({
  urls: { [Number(process.env.REACT_APP_CHAIN_ID)]: NETWORK_URL }
})

export const injected = new InjectedConnector({
  supportedChainIds: [8]
})
