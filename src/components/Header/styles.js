import styled from "styled-components";

export const Container = styled.header`
    color: ${({theme}) => theme.text };
    display: flex;
    justify-content: space-between;
    margin: 64px auto 0px;
    padding: 30px;
    align-items: center;

    .checkbox{
      opacity: 0;
      position: absolute;
    }

    .checkbox:checked + .label .ball{
        transform: translateX(24px);
      }

  .label{
    background-color: rgba(0,0,0, 0.8);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    padding: 5px;
    width: 56px;
    height: 32px;
    position: relative;


    .moon{
      color: #f1c40f;
      font-size: 18px;
    }

    .ball{
      width: 28px;
      height: 28px;
      top: 2px;
      left: 2px;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
      transition: transform 0.2s linear;
    }


    .sun{
      color: #f1c40f;
      font-size: 18px;
    }
  }
`
