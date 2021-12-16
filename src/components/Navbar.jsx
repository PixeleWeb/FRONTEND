import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return <nav className='bg-indigo-200'>
    <ul className='flex w-full justify-between my-8 font-extrabold'>
        <li className='text-4xl'>Gestion de Proyectos</li>
        <li className='text-xl'>Usuarios</li>
        <li className='text-xl'>Proyectos</li>
        <li className='text-xl'>Inscripciones</li>
        <li className='text-xl'>Avances</li>
        <li className='px-3'>
        <Link to='/login'>
            <button className='bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700'>
            Iniciar Sesion
            </button>
        </Link>
        
        
        </li>
    </ul>
    </nav>
};

export default Navbar;
