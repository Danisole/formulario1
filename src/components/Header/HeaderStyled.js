import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #00296b;
    padding: 0 30px;
    
    margin-top: 0;

`

export const BtnHeader = styled.button`
     width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 4px;
    border: #003566 ;
    background-color: #fff;
    color: black;
    font-weight: 600;
    &:hover{
        background-color:#84bcda;
    }
`