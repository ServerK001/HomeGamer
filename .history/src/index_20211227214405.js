import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './App';
import { Contexto } from './service/contex';

ReactDOM.render(
  <React.StrictMode>
   
    <Contexto>
      
    </Contexto>
    <App />

    
    
  </React.StrictMode>,
  document.getElementById('root')
);


