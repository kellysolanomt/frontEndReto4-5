import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Swal from 'sweetalert2';
import Sidebar from '../ui/Sidebar';

const DetalleUsuarios = () => {

    const navigate = useNavigate();

    // validación y leer los datos del formulario
    const formik = useFormik({
        initialValues: {
            id: '',
            identification: '',
            name: '',
            birthtDay: '',
            monthBirthtDay: '',
            address: '',
            cellPhone: '',
            email: '',
            password: '',
            zone: '',
            type: '',
        },
        onSubmit: datos => {
            Swal.fire({
                title: 'Quieres crear un usuario?',
                text: "Se generará un elemento en la BD!",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, created it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    try {
                        console.log(datos);
                        fetch(`http://152.70.213.108:8080/api/user/new`, {
                            method: "POST",
                            body: JSON.stringify(datos),
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                                "Access-Control-Allow-Origin": "*",
                                "Access-Control-Allow-Credentials": true
                            },
                        })
                            .then((res) => res.json())
                            .then((datos) => {
                                console.log(datos);
                            });

                        Swal.fire(
                            'Se creo correctamente.',
                            'success'


                        );
                        navigate('/usuarios');
                    } catch (error) {
                        console.log(error)
                    }

                }
            })

        }
    });

    return (
        <>
            <div className="md:flex min-h-screen" >
                <Sidebar />
                <div className="md:w-2/5 xl:w-4/5 p-6">
                    <div className='bg-orange-400 rounded-full text-center shadow-lg'>
                        <h1 className="text-3xl font-normal text-gray-800 mb-4">Crear usuarios</h1>
                    </div>


                    <div className="flex justify-center mt-10">
                        <div className="w-full max-w-3xl">
                            <form
                                onSubmit={formik.handleSubmit}
                            >
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">ID</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="id"
                                        type="number"
                                        placeholder="id "
                                        value={formik.values.id}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">IDENTIFICACIÓN</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="identification"
                                        type="number"
                                        placeholder="Identificacion "
                                        value={formik.values.identificacion}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">NOMBRE</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="text"
                                        placeholder="Nombre "
                                        value={formik.values.nombre}
                                        onChange={formik.handleChange}

                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">FECHA CUMPLEAÑOS</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="birthtDay"
                                        type="date"
                                        placeholder=""
                                        value={formik.values.birthtDay}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">MES DE CUMPLEAÑOS</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="monthBirthtDay"
                                        type="text"
                                        placeholder="Mes de Cumpleaños"
                                        value={formik.values.monthBirthtDay}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">DIRECCIÓN</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="address"
                                        type="text"
                                        placeholder="Direccion"
                                        value={formik.values.address}
                                        onChange={formik.handleChange}

                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">CELULAR</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="cellPhone"
                                        type="number"
                                        placeholder="Telefono Celular"
                                        value={formik.values.cellPhone}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">E-MAIL</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="text"
                                        placeholder="Correo Electrónico"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">CONTRASEÑA</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="text"
                                        placeholder="Contraseña"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">ZONA</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="zone"
                                        type="text"
                                        placeholder="Zona"
                                        value={formik.values.zone}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">TIPO DE USUARIO</label>
                                    <select
                                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                                        id="type"
                                        value={formik.values.type}
                                        onChange={formik.handleChange}
                                    >
                                        <option value="">Seleccione el tipo de usuario: </option>
                                        <option value="ASE">Asesor Comercial</option>
                                        <option value="COORD">Coordinador de Zona</option>
                                    </select>
                                </div>

                                <input
                                    type="submit"
                                    className="bg-indigo-800 shadow-lg rounded-lg hover:bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold"
                                    value="Agregar usuario"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetalleUsuarios;