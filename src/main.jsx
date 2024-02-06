import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './index2.css'
import { NextUIProvider } from "@nextui-org/react";
import BrdNav from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BrdInfoCrud from './components-info/brd-info-crud';
import BrdRegister from './components-crud/brd-register';
import AdminComp from './admin/brd-admin-components.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>

        <BrdNav />

        <Routes>
          <Route path='/' element={<BrdInfoCrud />}/>
          <Route path='/brd-registro' element={<BrdRegister />}/>
          <Route path='/brd-update' element={<AdminComp />}/>
          <Route path='/brd-consult-all' element={<p></p>}/>
        </Routes>

      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
