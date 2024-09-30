// src/Routes/routes.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../Components/Login';

// Definir el componente AppRouter
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas definidas aquí */}
        <Route path="/login" element={<Login />} />

        {/* Redirección automática al Login si la ruta no coincide */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter; // Asegúrate de exportar el componente
