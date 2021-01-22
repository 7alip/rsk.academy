import { extendTheme } from '@chakra-ui/react'

import { styles } from './global'
const fonts = { body: `'Rubik', sans-serif`, mono: `'Consolas', monospace` }

const colors = {
  light: {
    text: '#102026',
    bg: '#e3e9e8',
  },
  dark: {
    text: '#9fdfd1',
    bg: '#102026',
  },
  rsk: {
    green: {
      50: '#E0F6E4',
      100: '#B3E9BC',
      200: '#80DA90',
      300: '#4DCB63',
      400: '#26C041',
      500: '#00b520',
      600: '#00AE1C',
      700: '#00A518',
      800: '#009D13',
      900: '#008D0B',
    },
    blue: {
      50: '#E0EFFF',
      100: '#B3D7FF',
      200: '#80BDFF',
      300: '#4DA3FF',
      400: '#268FFF',
      500: '#007BFF',
      600: '#0073FF',
      700: '#0068FF',
      800: '#005EFF',
      900: '#004BFF',
    },
    text: {
      50: '#F3FBF9',
      100: '#E2F5F1',
      200: '#CFEFE8',
      300: '#BCE9DF',
      400: '#ADE4D8',
      500: '#9FDFD1',
      600: '#97DBCC',
      700: '#8DD7C6',
      800: '#83D2C0',
      900: '#72CAB5',
    },
  },
}

const theme = extendTheme({
  styles,
  colors,
  fonts,
  shadows: {
    outline: 'none',
  },
})

export default theme
