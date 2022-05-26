import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Customer from './Pages/Customer';
import { AppProvider } from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <Customer />
  </AppProvider>
);


