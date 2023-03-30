import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login/Login';
import Preferences from './Preferences';
import useToken from "./useToken";
export default App;


function App() {

    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/Dashboard" element = {<Dashboard />}/>

            <Route path="/Preferences" element = {<Preferences />}/>


          </Routes>
        </BrowserRouter>
      </div>
  );
}


