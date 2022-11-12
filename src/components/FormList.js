import React from 'react'
import { useForm } from 'react-hook-form'
import { FORMS1, FORMS2 } from './FormulariosArray';
import { Container1, H2, LabelForm, InputForm, Container2, TextareaForm, ButtonForm, Container3, Fail } from './ComponentsStyles';
import swal from 'sweetalert';



const FormList = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();

    const customSubmit = (data) =>{
        swal("Carga exitosa", "Aprieta el boton para continuar", "success");
        console.log(data)
    }
    

return (
    <>
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
    </>
    
  )
}

export default FormList