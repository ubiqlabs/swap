interface Window {
  ethereum?: {
    isMetaMask?: false
    isSparrow?: true
    on?: (...args: any[]) => void
    removeListener?: (...args: any[]) => void
  }
  web3?: {}
}
