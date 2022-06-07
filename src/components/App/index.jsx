import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../assets/styles/global'

import darkTheme from '../../assets/themes/darkTheme'
import lightTheme from '../../assets/themes/lightTheme'
import Header from '../Header'
import WeatherDisplay from '../WeatherDisplay'

export default function App(){
  const [ theme, setTheme] = useState('dark')

  function toggleTheme(){
    theme === 'light' ? setTheme('dark') : setTheme('light')

  }
  return(
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <WeatherDisplay />
    </ThemeProvider>
  )
}
