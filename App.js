//import logo from './logo.svg';

import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextFirm  from './components/TextFirm';
import PropTypes from 'prop-types'
//import PropTypes from 'prop-types';

  import Alert from './components/Alert';
  import React from "react";
  


function App() {

  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert(
       { msg:message,
        type:type
       }
      )
      setTimeout(()=>{ setAlert(null);
      },1000 )

  }
        
  


  const [mode,setMode]=useState("light");

  const togglemode=()=>{
    if (mode==="light") {
      setMode("dark");
      document.body.style.backgroundColor="#010123";
      showAlert("DarkModeEnabled", "success")
      document.title="TextUtils-Dark Mode"

    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("LightModeEnabled", "success")
      document.title="TextUtils-Light Mode"
    }
    setInterval(()=>{document.tittle="DarkMode Activated"},2000)}


  return (
    
 <div> <Navbar  text="TextUtilsmore" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
            {/* <About /> */}
            <TextFirm   setAlert={showAlert} heading="Enter Text To Analyze Below"  mode={mode}/>
            </div>
      </div> 
    );
}

export default App;

Navbar.propTypes={text:PropTypes.string.isRequired,
                    home:PropTypes.string,
                  about:PropTypes.string};

                  // Navbar.defaultProps = {
                  //   text: 'Tittle here',
                  //   home:"Home here"
                  // };