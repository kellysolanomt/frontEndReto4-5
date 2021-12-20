import React, {useState, useEffect} from 'react';
import { Link, useParams,useNavigate  } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2'; 
import Sidebar from '../ui/Sidebar';

const DetalleProductos = () => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            reference: "",
            category: "",
            size: "",
            description: "",
            availability: "",
            price: "",
            quantity: "",
            photography: "",
        },

        onSubmit: datos => {
            Swal.fire({
                title: 'Quieres crear el producto?',
                text: "Se generará un elemento en la BD!",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, created it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    try {console.log(datos);
                        fetch(`http://152.70.213.108:8080/api/clothe/new`, {
                            method: "POST",
                            body: JSON.stringify(datos),
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                                "Access-Control-Allow-Origin" : "*", 
                                "Access-Control-Allow-Credentials" : true 
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
                <div className='bg-orange-400 rounded-full text-center shadow-lg'>
                    <h1 className="text-3xl text-gray-800 font-normal mb-4">Agregar Productos</h1>
                </div>
                    <div className="flex justify-center mt-10">
                        <div className="w-full max-w-3xl">
                            <form onSubmit={formik.handleSubmit}>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">REFERENCIA</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="reference"
                                        type="text"
                                        placeholder="Referencia"
                                        value={formik.values.reference}
                                        onChange={formik.handleChange}
                                    />
                                </div>


                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">CATEGORIA</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="category"
                                        type="text"
                                        placeholder="Categoría"
                                        value={formik.values.category}
                                        onChange={formik.handleChange}


                                    />
                                </div>
                                {/* {formik.touched.category && formik.errors.category ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.category} </p>
                            </div>
                        ) : null} */}

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">TALLA</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="size"
                                        type="text"
                                        placeholder="Talla"
                                        value={formik.values.size}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                {/* {formik.touched.size && formik.errors.size ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.size} </p>
                            </div>
                        ) : null} */}

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">DESCRIPCION</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="description"
                                        type="text"
                                        placeholder="Descripcion"
                                        value={formik.values.description}
                                        onChange={formik.handleChange}

                                    />
                                </div>


                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">DISPONIBILIDAD</label>
                                <select
                                    className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                                    id="availability"
                                    value={formik.values.availability}
                                    onChange={formik.handleChange}
                                >
                                    <option value="true">Disponible</option>
                                    <option value="false">No Disponible</option>
                                </select>



                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">PRECIO</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="price"
                                        type="number"
                                        placeholder="Precio"
                                        value={formik.values.price}
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
                                        value={formik.values.quantity}
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
                                        value={formik.values.photography}
                                        onChange={formik.handleChange}
                                    />
                                </div>


                                

                                <input
                                    type="submit"
                                    className="bg-indigo-800 shadow-lg rounded-lg hover:bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold"
                                    value="Agregar Producto"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetalleProductos;