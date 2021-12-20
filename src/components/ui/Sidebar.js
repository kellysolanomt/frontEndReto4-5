import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return(
        <div className="md:w-2/6 xl:w-1/5 bg-gradient-to-tl from-orange-300 to-orange-500">
            <div className="p-6">
                <div className="bg-gradient-to-tl from-orange-300 to-orange-500 rounded-2xl">
                <p className="uppercase text-gray-800 text-2xl tracking-wide text-center font-bold">De Alto Turmeque LTDA</p>
                    <img src="https://res.cloudinary.com/dxy8a7cns/image/upload/v1639942702/RETO%205/logoAlto_zzcnlk.png" alt=" imagen ropa " className="w-1/2 mx-auto"/>
            
                </div>
                
                <p className="mt-3 mb-3 text-gray-800">Administra tu empresa en las siguientes opciones:</p>

                <nav className="mt-9">
                    <NavLink className="p-1 text-gray-800 block hover:bg-indigo-800 hover:text-white rounded-lg" activeClassName="text-yellow-500" exact="true" to="/">Login</NavLink>
                    <NavLink className="p-1 text-gray-800 block hover:bg-indigo-800 hover:text-white rounded-lg" activeClassName="text-yellow-500" exact="true" to="/ordenes">Ordenes</NavLink>
                    <NavLink className="p-1 text-gray-800 block hover:bg-indigo-800 hover:text-white rounded-lg" activeClassName="text-yellow-500" exact="true" to="/productos">Productos</NavLink>
                    <NavLink className="p-1 text-gray-800 block hover:bg-indigo-800 hover:text-white rounded-lg" activeClassName="text-yellow-500" exact="true" to="/usuarios">Usuarios</NavLink>

                </nav>
            </div>
        </div>
    );
}

export default Sidebar;