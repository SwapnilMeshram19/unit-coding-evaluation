
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Components/Navbar';
import { Home } from './Home';
import { Login } from './LoginPage';

export const Pages=()=>{

    return(<div style={{width:"100%"}}>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>

    </div>)
}