import React from 'react'
import { useForm } from 'react-hook-form'
import { FORMS1, FORMS2 } from '../data/FormulariosArray';
import { ContainerForm, Container1, H2, LabelForm, InputForm, Container2, TextareaForm, ButtonForm, Container3, Fail } from './ComponentsStyles';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';



const FormList = () => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();

    const customSubmit = (data) =>{
        swal("Carga exitosa", "Aprieta OK para continuar", "success");
        console.log(data);
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