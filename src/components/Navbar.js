import React from "react";
//import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
    <>
{/*
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">{props.aboutText}</Link>
      </li>
  </ul>*/}



    {/*     DONT USE THIS    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
      
  </form>*/}


  {/*</div>
  <div className={`form-check form-switch mx-4 text-${props.mode==='dark'?'light':'dark'}`} >
  <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault">Change Mode</label>
</div>
</nav>*/}


{/* START RANDOM HERE */ }

<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home&nbsp;</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">{props.aboutText}</Link>
        </li>
      </ul>
    </div>
   
  </div>
  <div className={`form-check form-switch mx-4 text-${props.mode==='dark'?'light':'dark'}`} >
  <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault">Mode</label>
</div>
</nav>










</>
  );
}

/*Navbar.PropTypes={title: PropTypes.isRequired,
                aboutText:PropTypes.string}*/

Navbar.defaultProps = {
  title: "default title",
  aboutText: "About text here",
}; // if we dont pass propType{this: " <Navbar title="TextUtils" aboutText="About TextUtils"/>"} then this will be set