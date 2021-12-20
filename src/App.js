// import './App.css';
import React from "react";
import { Routes, Route } from 'react-router';
import Sidebar from "./components/ui/Sidebar";

import Ordenes from './components/paginas/Ordenes';
import Usuarios from './components/paginas/Usuarios';
import Productos from './components/paginas/Productos';
import Login from './components/paginas/Login'
import Index  from "./components/paginas/Index";

import DetalleOrdenes from "./components/paginas/DetalleOrdenes";
import DetalleProductos from "./components/paginas/DetalleProductos";
import DetalleUsuarios from "./components/paginas/DetalleUsuarios";

import ActualizarProducto from "./components/paginas/ActualizarProducto";
import ActualizarUsuario from "./components/paginas/ActualizarUsuario";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/index" element={<Index/>}/>
        <Route path="/ordenes" element={<Ordenes/>}/>
        <Route path="/usuarios" element={<Usuarios/>}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/nueva-orden" element={<DetalleOrdenes/>}/>
        <Route path="/nuevo-usuario" element={<DetalleUsuarios/>}/>
        <Route path="/nuevo-producto" element={<DetalleProductos/>}/>
        <Route path="/actualizar-producto" element={<ActualizarProducto/>}/>
        <Route path="/actualizar-usuario" element={<ActualizarUsuario/>}/>
        <Route path="/actualizar-producto/:reference" element={< ActualizarProducto/>} />
        <Route path="/actualizar-usuario/:id" element={<ActualizarUsuario/>} />
    </Routes>
    </>
  );
}

export default App;
