import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Navbar } from 'react-bootstrap';

function MyNavbar(){
  return(
    <div>
      <Navbar className='p-3' style={{background:"black"}}>
        <Navbar.Brand href='#' style={{color:"red"}}>ABC</Navbar.Brand>
        <Navbar.Brand href='#' style={{color:"green"}}>PQR</Navbar.Brand>
        <Navbar.Brand href='#' style={{color:"blue"}}>RST</Navbar.Brand>
      </Navbar>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyNavbar/> );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
