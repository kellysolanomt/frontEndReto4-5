import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import Sidebar from '../ui/Sidebar';

const ActualizarUsuario = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    // console.log({reference});

    const [usuariosActualizar, guardarUsuariosActualizar] = useState([]);

    fetch(`http://152.70.213.108:8080/api/user/${id}`)
        .then((res) => res.json())
        .then((data) => {
            guardarUsuariosActualizar(data);
        });

        const { identification, name, birthtDay, monthBirthtDay, address, cellPhone, email, password, zone, type } = usuariosActualizar;
    const formik = useFormik({
        initialValues: {
            id: id,
            identification: "",
            name: "",
            birthtDay: "",
            monthBirthtDay: "",
            address: "",
            cellPhone: "",
            email: "",
            password: "",
            zone: "",
            type: "",
        },
        onSubmit: datos => {
            Swal.fire({
                title: 'Quieres actualizar el usuario?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, updated it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    try { console.log(datos);
                        fetch(`http://152.70.213.108:8080/api/user/update`, {
                            method: "PUT",
                            body: JSON.stringify(datos),
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                        })
                            .then((res) => res.json())
                            .then((data) => {
                        });
                    Swal.fire(
                        'Updated!',
                        'Se actualizo correctamente.',
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
                    <h1 className="text-3xl font-light mb-4">Actualizar Usuarios</h1>

                    <div className="flex justify-center mt-10">
                        <div className="w-full max-w-3xl">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-4">
                                    <p className="font-bold text-2xl text-yellow-600 mb-4">{id} </p>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">IDENTIFICACION</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="identification"
                                        type="text"
                                        placeholder="Identificación"
                                        value={formik.values.identification || identification}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">NOMBRE</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="text"
                                        placeholder="Nombre"
                                        value={formik.values.name || name}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">FECHA DE CUMPLEAÑOS</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="birthtDay"
                                        type="date"
                                        placeholder=""
                                        value={formik.values.birthtDay || birthtDay}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">MES DE CUMPLEAÑOS</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="monthBirthtDay"
                                        type="text"
                                        placeholder="Mes de cumpleaños"
                                        value={formik.values.monthBirthtDay || monthBirthtDay}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">DIRECCIÓN</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="address"
                                        type="text"
                                        placeholder="Dirección"
                                        value={formik.values.address || address}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">TELÉFONO</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="cellPhone"
                                        type="number"
                                        placeholder="Teléfono"
                                        value={formik.values.cellPhone || cellPhone}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">E-MAIL</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="text"
                                        placeholder="E-mail"
                                        value={formik.values.email || email}
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
                                        value={formik.values.password || password}
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
                                        value={formik.values.zone || zone}
                                        onChange={formik.handleChange}
                                    />
                                </div>


                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">TIPO DE USUARIO</label>
                                    <select
                                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                                        id="type"
                                        value={formik.values.type}
                                        onChange={formik.handleChange}>
                                        <option value="ASE">Asesor Comercial</option>
                                        <option value="COORD">Coordinador de Zona</option>
                                    </select>
                                </div>

                                <input
                                    type="submit"
                                    className="bg-indigo-800 shadow-lg rounded-lg hover:bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold"
                                    value="Actualizar Usuario"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ActualizarUsuario;