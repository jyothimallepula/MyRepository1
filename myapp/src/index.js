import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
function Display(){
return <h1><center>Form is Submitted  Successfully </center></h1>}
function MyForm(){
return(
<center>
<form >
<h1>My Registration Form</h1>
Name:   <input type="text"name="" /><br></br>
DOB:   <input type="date"name="" /><br></br>
Email:  <input type="email"name="" /><br></br>
Password:  <input type="password"name="" /><br></br>
</form>
<input onClick={send} type="submit"name="" /><br></br>

</center>
)}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
    < MyForm/>
);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
function send(){
root2.render(
    < Display/>
);
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
