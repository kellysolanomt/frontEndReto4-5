import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ActualizarProducto from '../paginas/ActualizarProducto';

const FormularioProductos = ({ producto }) => {

    const { reference, category, size, description, availability, price, quantity, photography } = producto;

    const [ productos, guardarProductos] = useState([]);

    fetch("http://152.70.213.108:8080/api/clothe/all")
    .then((res) => res.json())
    .then((data) => {
        //console.log(data);
        guardarProductos(data);
    });

    const actualizarProducto = reference => {
        // console.log(reference);
        {
            producto.map(producto => (
                <ActualizarProducto
                    key={producto.reference}
                    producto={producto} />))
        };

    }

    const borrarProducto = reference => {

        Swal.fire({
            title: 'Quieres borrar el producto?',
            text: "¡No podrás revertir tu decisión!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Yes, deleted it!'
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    console.log(reference);
                    fetch(`http://localhost:8080/api/clothe/${reference}`, {
                        method: "DELETE",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                    }).then((data) => {
                        // console.log(data);
                    });
                    Swal.fire(
                        '¡Borrado!',
                        'Se borro correctamente.',
                        'success'
                    );
                } catch (error) {
                    console.log(error)
                }

            }
        })
    }



    return (
        <div className="w-full px-3 mb-4">
            <div className="p-5 shadow-md bg-white">
                <div className="lg:flex">
                    <div className="lg:w-5/12 xl:w-3/12">

                        <img src={photography} alt=" imagen ropa " />
                        <div className="sm:flex sm:-mx-2 pl-2">

                        </div>
                    </div>
                    <div className="lg:w-7/12 xl:w-9/12 pl-5">
                        
                        <p className="font-bold text-3xl text-yellow-600 mb-4">{reference} </p>
                        <p className="text-gray-600 mb-2">Categoria: {''}
                            <span className="text-gray-700 font-bold">{category}</span>
                        </p>
                        <p className="text-gray-600 mb-2">Talla: {''}
                            <span className="text-gray-700 font-bold">{size} </span>
                        </p>
                        <p className="text-gray-600 mb-2">Descripción: {''}
                            <span className="text-gray-700 font-bold">{description}</span>
                        </p>
                        <p className="text-gray-600 mb-2">Disponibilidad: {''}
                            <span className="text-gray-700 font-bold">{availability}</span>
                        </p>
                        <p className="text-gray-600 mb-2">Precios: {''}
                            <span className="text-gray-700 font-bold">$ {price}</span>
                        </p>
                        <p className="text-gray-600 mb-2">Cantidad: {''}
                            <span className="text-gray-700 font-bold">{quantity}</span>
                        </p>
                        
                        
                        <button
                            onClick={() => borrarProducto(producto.reference)}
                            type="submit"
                            className="bg-indigo-800 shadow-lg rounded-lg hover:bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold"
                        >Borrar</button>

                        <button
                            type="submit"
                            className="bg-indigo-800 shadow-lg rounded-lg hover:bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold">
                            <Link to={`/actualizar-producto/${producto.reference}`}>
                                Actualizar Producto
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormularioProductos;
