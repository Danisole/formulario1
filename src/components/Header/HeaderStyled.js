import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #001d3d;
    padding: 0 30px;
    
    margin-top: 0;


    a{
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        text-decoration: none;

        &:hover{
            text-decoration: underline;
        }
    }
`