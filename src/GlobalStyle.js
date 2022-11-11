import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

}

body{
    overflow-x: hidden ;
    background-color: #ede0d4;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    width: 90%;
    max-width: 1000px;
    

}`