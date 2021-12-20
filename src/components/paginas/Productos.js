import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioProductos from '../ui/FormularioProductos';
import Sidebar from '../ui/Sidebar';

const Productos = () => {

    const [productos, guardarProductos] = useState([]);

    fetch("http://152.70.213.108:8080/api/clothe/all")
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            guardarProductos(data);
        });

    return (
        <>
            <div className="md:flex min-h-screen" >
                <Sidebar />
                <div className="md:w-2/5 xl:w-4/5 p-6">
                <div className='bg-orange-400 rounded-full text-center shadow-lg'>
                    <h1 className="text-3xl font-normal mb-4 text-gray-800">Productos</h1>
                </div>
                    <Link to="/nuevo-producto" className="  bg-indigo-800 shadow-lg rounded-lg inline-block mb-5 p-2 text-white uppercase font-bold">
                        Agregar Producto
                    </Link>
                    {productos.map(producto => (
                        <FormularioProductos
                            key={producto.reference}
                            producto={producto}
                        />


                    ))}

                </div>
            </div>
        </>
    );
}

export default Productos;