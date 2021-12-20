import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import Sidebar from '../ui/Sidebar';

const ActualizarProducto = () => {

    const navigate = useNavigate();

    const { reference } = useParams();
    // console.log({reference});

    const [productosActualizar, guardarProductosActualizar] = useState([]);

    fetch(`http://152.70.213.108:8080/api/clothe/${reference}`)
        .then((res) => res.json())
        .then((data) => {
            guardarProductosActualizar(data);
        });

    const { category, size, description, price, quantity, photography } = productosActualizar;
    const formik = useFormik({
        initialValues: {
            reference: reference,
            category: "",
            size: "",
            description: "",
            availability: true,
            price: "",
            quantity: "",
            photography: "",
        },
        onSubmit: datos => {
            Swal.fire({
                title: 'Quieres actualizar el producto?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, updated it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    try { console.log(datos);
                        fetch(`http://152.70.213.108:8080/api/clothe/update`, {
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
                    navigate('/productos');
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
                    <h1 className="text-3xl font-light mb-4">Actualizar Productos</h1>

                    <div className="flex justify-center mt-10">
                        <div className="w-full max-w-3xl">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-4">
                                    <p className="font-bold text-2xl text-yellow-600 mb-4">{reference} </p>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">CATEGORÍA</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="category"
                                        type="text"
                                        placeholder="Categoría"
                                        value={formik.values.category || category}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">TALLA</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="size"
                                        type="text"
                                        placeholder="Talla"
                                        value={formik.values.size || size}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">DESCRIPCION</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="description"
                                        type="text"
                                        placeholder="Descripcion"
                                        value={formik.values.description || description}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">DISPONIBILIDAD</label>
                                    <select
                                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                                        id="availability"
                                        value={formik.values.availability}
                                        onChange={formik.handleChange}>
                                        <option value="true">Disponible</option>
                                        <option value="false">No Disponible</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">PRECIO</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="price"
                                        type="number"
                                        placeholder="Precio"
                                        value={formik.values.price || price}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">CANTIDAD</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="quantity"
                                        type="number"
                                        placeholder="Cantidad"
                                        value={formik.values.quantity || quantity}
                                        onChange={formik.handleChange}
                                    />
                                </div>


                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">FOTOGRAFIA</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="photography"
                                        type="text"
                                        placeholder="Fotografia"
                                        value={formik.values.photography || photography}
                                        onChange={formik.handleChange}
                                    />
                                </div>




                                <input
                                    type="submit"
                                    className="bg-indigo-800 shadow-lg rounded-lg hover:bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold"
                                    value="Actualizar Producto"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ActualizarProducto;