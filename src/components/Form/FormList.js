import React, { useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { FORMS1, FORMS2 } from '../data/FormulariosArray';
import { ContainerForm, Container1, H2, LabelForm, InputForm, Container2, TextareaForm, ButtonForm, Container3, Fail } from './ComponentsStyles';
import swal from 'sweetalert';
import { Link,useNavigate  } from 'react-router-dom';
import { apiUserCartilla } from '../../service/ApiRest';


const FormList = () => {

    const navigate = useNavigate();
    
    useEffect(()=>{

        const getToken = localStorage.getItem("token");
        console.log(getToken)

        if(getToken === undefined){

        navigate("/")
        }

    },[])


    const {register, handleSubmit, formState:{errors}, reset} = useForm();

    const customSubmit = async(data) =>{

        const dataForm = data

        console.log(dataForm)

        reset();
    }

    return (
    <>
        <ContainerForm>
            <H2>Formulario de registro</H2>
            
            <form onSubmit={handleSubmit(customSubmit)}>
                
                <Container1>
                    {FORMS1.map((form) =>(
                        <LabelForm key={form.id}>
                            <label>{form.label}</label>
                            <InputForm type='text' {...register(form.tipo, {required:true})} />
                            {(errors[form.tipo]?.type ==="required") && <Fail>El campo no puede estar vacio</Fail>}
                        </LabelForm>
                    ))}
                </Container1>

                <Container2>
                    {FORMS2.map((form) =>(
                        <LabelForm>
                            <label>{form.label}</label>
                            <TextareaForm type='text' {...register(form.tipo, {})}/>
                        </LabelForm>
                    ))}
                </Container2>

                <Container3>
                    <ButtonForm type="submit">Guardar</ButtonForm>
                    <ButtonForm>PDF</ButtonForm>
                </Container3>            
                
            </form>

            <ButtonForm><Link to="/" style={{color: "white", textDecoration:"none"}}>Volver</Link></ButtonForm>
        </ContainerForm>    
    </>
    
  )
}

export default FormList