import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import FormularioUsuarios from '../ui/FormularioUsuarios';
import Sidebar from '../ui/Sidebar';

const Usuarios = () => {

    const [usuarios, guardarUsuarios] = useState([]);

    fetch("http://152.70.213.108:8080/api/user/all")
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            guardarUsuarios(data);
        });

    return (
        <>
            <div className="md:flex min-h-screen" >
                <Sidebar />
                <div className="md:w-2/5 xl:w-4/5 p-6">
                <div className='bg-orange-400 rounded-full text-center shadow-lg'>
                    <h1 className="text-3xl font-normal mb-4 text-gray-800">Usuarios</h1>
                </div>
                    <Link to="/nuevo-usuario" className="  bg-indigo-800 shadow-lg rounded-lg inline-block mb-5 p-2 text-white uppercase font-bold">
                        Agregar Usuario
                    </Link>
                    {usuarios.map(usuario => (
                        <FormularioUsuarios
                            key={usuario.id}
                            usuario={usuario}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Usuarios;