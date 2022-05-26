import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Customer from './Pages/Customer';
import EditarCustomer from './Pages/EditCustomer';
import { AppProvider } from './context/AppContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/index"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path="/editar-pedido" element={<EditarCustomer />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);


