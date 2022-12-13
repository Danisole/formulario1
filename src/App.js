import React, { useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormList from "./components/Form/FormList";
import Header from "./components/Header/Header";
import Login from "./components/LoginReg.js/Login";


function App() {

  return (
    
      <BrowserRouter>
      <Header/>
    
        <Routes>

          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>

          <Route path="/formList" element={<FormList/> }/>
      
        </Routes>   

    </BrowserRouter>

  );
}


export default App;
