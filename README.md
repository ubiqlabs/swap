# Shinobi Interface

[![Tests](https://github.com/Uniswap/uniswap-interface/workflows/Tests/badge.svg)](https://github.com/Uniswap/uniswap-interface/actions?query=workflow%3ATests)
[![Styled With Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

An open source interface for Shinobi -- a protocol for decentralized exchange of Ubiq tokens.

- Interface: [shinobi.ubiq.ninja](https://shinobi.ubiq.ninja)
- contracts: [deployed by 5plint3r](https://github.com/5plint3r/shinobi-artifacts)
- Docs: [uniswap.org/docs/](https://uniswap.org/docs/)

## Accessing the Shinobi Interface

visit [shinobi.ubiq.ninja](https://shinobi.ubiq.ninja)

## Listing a token

Please see the
[@octanolabs/default-token-list](https://github.com/octanolabs/default-token-list) 
repository.

## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"` 

Note that the interface only works on testnets where both 
[Uniswap V2](https://uniswap.org/docs/v2/smart-contracts/factory/) and 
[multicall](https://github.com/makerdao/multicall) are deployed.
The interface will not work on other networks.

## Contributions

**Please open all pull requests against the `develop` branch.** 
CI checks will run against all PRs.
