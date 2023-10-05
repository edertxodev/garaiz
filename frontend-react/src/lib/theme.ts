import '@fontsource/dm-serif-display'
import '@fontsource/fuggles'
import '@fontsource/roboto-condensed'
import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
  fonts: {
    body: "'Roboto Condensed', sans-serif",
    heading: "'DM Serif Display', sans-serif",
    altHeading: "'Fuggles', cursive",
  },
})
