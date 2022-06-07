import { BsSun, BsMoonFill } from 'react-icons/bs'

import { Container } from './styles'

export default function Header({toggleTheme}){
  return(
    <Container>
      <div className="logo">
        <h1>insta<span>Weather</span></h1>
      </div>
      <div>
        <input type="checkbox" id="checkbox" className="checkbox" onChange={toggleTheme}/>
        <label htmlFor="checkbox" className='label'>
          <BsMoonFill  className='moon'/>
          <BsSun className='sun'/>
          <div className="ball"></div>
        </label>
      </div>
    </Container>
  )
}
