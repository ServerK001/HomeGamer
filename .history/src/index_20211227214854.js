import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './App';
import AuthProvider, { Contexto } from './service/contex';

ReactDOM.render(
  <React.StrictMode>
   
    <AuthProvider >
    <App />
    </AuthProvider>
      
    
    

    
    
  </React.StrictMode>,
  document.getElementById('root')
);


