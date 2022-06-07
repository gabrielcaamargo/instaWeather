import { WeatherWrapper } from './styles'
import {BsFillCloudLightningRainFill} from 'react-icons/bs'

//BsFillCloudLightningRainFill
export default function WeatherDisplay(){
  return (
    <WeatherWrapper>
      <div className='content'>
        <p><BsFillCloudLightningRainFill className='icon'/></p>
        <p id='temperature'>46°F</p>
      </div>

      <div className='content'>
        <p id='city'>New York</p>
      </div>
    </WeatherWrapper>
  )
}
