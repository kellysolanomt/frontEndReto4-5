import React from 'react';
import Sidebar from '../ui/Sidebar';
const DetalleOrdenes = () => {
    return (
        <>
            <div className="md:flex min-h-screen" >
                <Sidebar />
                <div className="md:w-2/5 xl:w-4/5 p-6">
                <div className='bg-orange-400 rounded-full text-center shadow-lg'>
                    <h1 className="text-3xl  text-gray-800 font-normal mb-4">Detalle ordenes</h1>
                </div>

                </div>
            </div>
        </>
    );
}

export default DetalleOrdenes;