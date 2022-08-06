
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Private } from '../Components/Private';
import { Home } from './Home';
import { Login } from './LoginPage';

export const Pages=()=>{

    return(<div style={{width:"100%"}}>
        <Routes>
            <Route path="/" element={<Private><Home/></Private>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>

    </div>)
}