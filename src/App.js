
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About"
import './App.css';
import React,{ useState } from 'react';
import Alert from "./components/Alert";

import {  
  BrowserRouter as Router,
  Routes,Route
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enabled!","success")
      /*setInterval(()=>{
        document.title='TextUtils is Amazing';
      },2000)
      setInterval(()=>{
        document.title='Install TextUtils Now';
      },1500)*/
      /*document.title='TextUtils | Dark Mode'*/
      }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled!","success")
     
      /*document.title='TextUtils | Dark Mode'*/
    }
  }

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(()=>{setAlert(null);},1900)
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert}/>
        <div className="container my-3" >
          <Routes> 
            <Route exact path="/about" element={<About mode={mode}/>}/>
            <Route exact path="/" element={ <TextForm mode={mode} showAlert={showAlert} heading="Enter the text below to analyze"/>}/> 
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
