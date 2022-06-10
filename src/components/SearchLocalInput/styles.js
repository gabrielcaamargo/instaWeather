import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 2px;

  input{
  width: 70%;
  text-align: left;
  padding: 18px;
  border-radius: 8px;

  border: 3px solid ${({theme}) => theme.background};
  outline: none;

  font-size: 16px;

  transition: border-color .2s linear;

  :focus{
    border: 3px solid ${({theme}) => theme.main};
  }
  }

  button {
    width: 30%;
    height: 3.5rem;
    border: none;
    outline: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.light};
    cursor: pointer;

    transition: background-color .2s linear;


    :hover{
      background-color: ${({theme}) => theme.main};
    }
  }
`
