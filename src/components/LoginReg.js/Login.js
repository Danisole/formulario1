import React from 'react'
import { useForm } from 'react-hook-form'
import { InputForm, LabelForm, Fail, Container3, ButtonForm, FormControl, FormList } from '../Form/ComponentsStyles';
// import swal from 'sweetalert';
import axios from 'axios';
import {  ApiUrlLogin } from '../../service/ApiRest';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


const Login = () => {

    const navigate = useNavigate();
    console.log(navigate);

    const {register, handleSubmit, formState:{errors}, reset} = useForm();

    const onSubmit = async (data) => {

        const dataForm = data;

        try{
            const response =await axios.post(ApiUrlLogin, JSON.stringify({"data":dataForm}),
            {
                headers: { 'Content-Type': 'application/json' },

                
            }
            
        );

        console.log("Ingresaste correctamente")
        console.log(response)
        const accessToken =response?.data?.token;
        console.log(accessToken)
        localStorage.setItem("token", accessToken);
        reset();

        if(accessToken){
            navigate("/formList")
            return
        }else{
            navigate("/")
            return
        }

        }catch(error){
            console.log(error)
        }



    } 

  return (
      <FormControl>
            <h2>Login</h2>

          <FormList onSubmit={handleSubmit(onSubmit)}>
              <LabelForm>
                    <label>Usuario</label>    
                    <InputForm type="text" ref="username" {...register("username", {required:true})} placeholder="Usuario"/>
                    {(errors.username?.type ==="required") && <Fail>El campo no puede estar vacio</Fail>}
                </LabelForm>

                <LabelForm>
                <label>Contraseña</label>    
                <InputForm type="password" ref='password' {...register("password", {required:true,})} placeholder="contraseña"/>
                {/* pattern: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/ */}
                {(errors.password?.type ==="required") && <Fail>El campo no puede estar vacio</Fail>}
                {/* {(errors.password?.type ==="pattern") && <Fail>Debe poseer al menos 8 caracteres, una letra mayuscula, una minuscula, un numero</Fail>} */}
            </LabelForm>

            <Container3>
                <ButtonForm type="submit">Ingresar</ButtonForm>
            </Container3> 

          </FormList>
          
      </FormControl>
          
      
  )
}

export default Login