export const SUPPORTED_CHAINS = [1, 30, 31, 5777]

export const ChainId = {
  MAINNET: 1,
  ROPSTEN: 3,
  RINKEBY: 4,
  GOERLI: 5,
  KOVAN: 42,
  RSK_MAINNET: 30,
  RSK_TESTNET: 31,
}

export const NETWORK_LABELS = {
  [ChainId.MAINNET]: 'Ethereum',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GOERLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.RSK_MAINNET]: null,
  [ChainId.RSK_TESTNET]: 'Testnet',
}

export const adminAccount =
  process.env.NEXT_PUBLIC_ADMIN_ACCOUNT ||
  '0xD046b0b7DD1d15C84eE0733E085045B040db0b03'

export const COURSES = {
  Developer: '0xe9c79c9226e2cD36C09b1404825B7381240311bA',
  Business: '0x406657dC292E080f4c919b573f4A774773860adb',
}
