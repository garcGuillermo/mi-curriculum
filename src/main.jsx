// main.jsx
// ===============================================
// Punto de entrada principal de la SPA React.
// - Monta el componente <App /> en el DOM.
// - Aplica React.StrictMode para mejores advertencias en desarrollo.
// - Usa BrowserRouter para habilitar rutas en la app.
// ===============================================

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
