import styled from "styled-components";

export const WeatherWrapper = styled.div`
  color: ${({theme}) => theme.text };
  background-color: ${({theme}) => theme.main };
  border-radius: 12px 12px 0px 0px;
  padding: 24px 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 700;

  .content{
    padding: 24px;
  }

  .icon{
    font-size: 55px;
  }

  #temperature{
    font-size: 25px;
    color: ${({theme}) => theme.darkText};
  }

  #city{
    font-size: 25px;
  }
`
