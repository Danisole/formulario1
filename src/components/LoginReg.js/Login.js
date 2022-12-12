import React from 'react'
import { useForm } from 'react-hook-form'
import { InputForm, LabelForm, Fail, Container3, ButtonForm, FormControl, FormList } from '../Form/ComponentsStyles';
import swal from 'sweetalert';




const Login = () => {

    

    const {register, handleSubmit, formState:{errors}, reset} = useForm();

    const onSubmit = (data) =>{
      swal(`Bienvenido usuario ${data.nombre}`, "Aprieta OK para continuar", "success");
      console.log(data.nombre);
      reset();

  }

  return (
      <FormControl>
            <h2>Login</h2>

          <FormList onSubmit={handleSubmit(onSubmit)}>
              <LabelForm>
                    <label>Usuario</label>    
                    <InputForm type="text" ref="nombre" {...register("nombre", {required:true})} placeholder="Usuario"/>
                    {(errors.nombre?.type ==="required") && <Fail>El campo no puede estar vacio</Fail>}
                </LabelForm>

                <LabelForm>
                <label>Contraseña</label>    
                <InputForm type="password" ref='password' {...register("password", {required:true, pattern: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/})} placeholder="contraseña"/>
                {(errors.password?.type ==="required") && <Fail>El campo no puede estar vacio</Fail>}
                {(errors.password?.type ==="pattern") && <Fail>Debe poseer al menos 8 caracteres, una letra mayuscula, una minuscula, un numero</Fail>}
            </LabelForm>

            <Container3>
                <ButtonForm type="submit">Ingresar</ButtonForm>
            </Container3>  

            

          </FormList>
          
      </FormControl>
          
      
  )
}

export default Login