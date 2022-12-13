import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputForm, LabelForm, Fail, Container3, ButtonForm, FormControl, FormList } from '../Form/ComponentsStyles';
import swal from 'sweetalert';
import axios from 'axios';
import {  ApiUrlLogin } from '../../service/ApiRest';
import { Link } from 'react-router-dom';


const Login = () => {

    const[post, setPost]= useState(null)

    // useEffect(()=>{
    //     axios.get()
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error))
    // }, [])

    function loguearte(data){
        axios
            .post(ApiUrlLogin, {
                data
            })
            .then ((response)=>{
                setPost(response.data)
                console.log(response)
            })
    }
  

    const {register, handleSubmit, formState:{errors}, reset} = useForm();

  const onSubmit = (data) =>{
      
      swal(`Bienvenido usuario ${data.username}`, "Aprieta OK para continuar", "success");
      console.log(data);
      loguearte()
      reset();

  }

  
  return (
      <FormControl>
            <h2>Login</h2>

          <FormList onSubmit={handleSubmit(onSubmit)}>
              <LabelForm>
                    <label>Usuario</label>    
                    <InputForm type="text" ref="username" {...register("username", {required:true})} placeholder="Usuario" />
                    {(errors.username?.type ==="required") && <Fail>El campo no puede estar vacio</Fail>}
                </LabelForm>

                <LabelForm>
                <label>Contraseña</label>    
                <InputForm type="password" ref='password' {...register("password", {required:true,})} placeholder="contraseña" />
                {/* pattern: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/ */}
                {(errors.password?.type ==="required") && <Fail>El campo no puede estar vacio</Fail>}
                {/* {(errors.password?.type ==="pattern") && <Fail>Debe poseer al menos 8 caracteres, una letra mayuscula, una minuscula, un numero</Fail>} */}
            </LabelForm>

            <Container3>
                <ButtonForm type="submit"><Link to="/formList" style={{color: "white", textDecoration:"none"}}>Ingresar</Link></ButtonForm>
            </Container3>  

            

          </FormList>
          
      </FormControl>
          
      
  )
}

export default Login