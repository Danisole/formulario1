import styled from "styled-components";

export const FormContainerGeneral = styled.form`

` 

export const H2 = styled.h2`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 20px;
margin-top: 50px;
`
export const Container1 = styled.div`
display: grid;
grid-gap: 20px;
grid-template-columns: repeat(3, 1fr) ;
`
export const LabelForm = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`
export const InputForm = styled.input`
width: 250px;
height: 32px;
border-radius: 5px;
border-color: #e5e5e5;
font-size: medium;
padding: 3px;
`

export const Container2 = styled.div`
height: 800px;
width: auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
gap: 25px;
margin-top: 30px;

`

export const TextareaForm = styled.textarea`
width: 100%;
height: 100px;
border-radius: 5px;
border-color: #e5e5e5;
font-size: medium;
padding: 6px;

@media (min-width: 765px){
    width: auto;
}

`

export const Container3 = styled.div`
display: flex;
justify-content: flex-end;
gap: 30px;
`

export  const ButtonForm = styled.button`
width: 100px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 50px;
cursor: pointer;
border-radius: 7px;
border: #eb5e28 ;
background-color: #eb5e28;
color: white;
&:hover{
    background-color:#dc2f02;
}
`
export const Fail = styled.small`
color: red
`

export const FormControl = styled(Container2)`
    justify-content: center;
    align-items: center;
    margin: 30px;
`

export const FormList = styled.form`
    margin: 1rem 0;
`