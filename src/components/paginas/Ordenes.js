import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../ui/Sidebar';
const Ordenes = () => {



    return (
        <>
            <div className="md:flex min-h-screen" >
                <Sidebar />
                <div className="md:w-2/5 xl:w-4/5 p-6">
                    <div className='bg-orange-400 rounded-full text-center shadow-lg'>
                        <h1 className="text-3xl font-normal mb-4 text-gray-800">Ordenes</h1>
                    </div>
                    
                    <Link to="/nueva-orden" className="  bg-indigo-800 shadow-lg rounded-lg inline-block mb-5 p-2 text-white uppercase font-bold">
                        Agregar Orden 
                    </Link>

                </div>
            </div>
        </>
    );
}

export default Ordenes;