import React,{useEffect, useState} from 'react'

//realizar un formulario
const usuariosBackend=[{
    identificacion:'1234',
    nombre:'luisa',
    apellido:'matoma'    
},
{
    identificacion:'1234777',
    nombre:'aleja',
    apellido:'soler'    
},
{
    identificacion:'12349999',
    nombre:'antonella',
    apellido:'salazar'    
},
];

const Usuarios = () => {
    const [mostrarTabla, setMostrarTabla]=useState(true);
    const [usuarios, setUsuarios]=useState([]);
    const [textoBoton, setTextoBoton]=useState('Crear Nuevo Usuario');

    useEffect(()=>{
        //obtener datos desde el bakend
        setUsuarios(usuariosBackend);
    },[]);

    useEffect(()=>{
        if(mostrarTabla){
            setTextoBoton('Crear Nuevo Usuario');

        }else{
            setTextoBoton('Mostrar todos los Usuarios');
        }

    },[mostrarTabla]);
    return (
        <div className='flex h-full w-full flex-col items-center justify-start p-8'>
        <div className='flex flex-col'>
        <h2 className='text-3xl font-extrabold text-gray-900 '>Pagina de Administracion de Usuarios</h2>
        <button onClick={()=>{setMostrarTabla(!mostrarTabla)}}   className='text-white bg-indigo-500 p-5 rounded-full m-6 w-28 self-end'>{textoBoton}</button>
        
        </div>
        
        {mostrarTabla ? (<TablaUsuarios listaUsuarios={usuarios}/>):(<FormularioCreacionUsuarios/>)}
        </div>
             
    );
};



const TablaUsuarios=({listaUsuarios})=>{
    useEffect(()=>{
        console.log('este es el listado de usuarios en el componente de tabla', listaUsuarios);
    },[listaUsuarios]);
    
    return(
        <div className='flex flex-col items-center justify-center '>
        <h2 className='text-2xl font-extrabold text-gray-800'>Todos los Usuarios</h2>
        <table >
        <thead>
        <tr>
        <th>Identificacion</th>
        <th>Nombre</th>
        <th>Apellido</th>
        </tr>
        </thead>
        <tbody>
        {listaUsuarios.map((usuario)=>{
            return(
                <tr>
                    <td>{usuario.identificacion}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.apellido}</td>
                </tr>

            );
             } )}
                

        
        </tbody>
        
        </table>
   
        
        </div>
        
    );
};

const FormularioCreacionUsuarios=()=>{
    return(
        <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-extrabold text-gray-800'>Crear nuevo Usuario</h2>
         <form className='grid grid-cols-2'>
        <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'  type='text'/>
        <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'  type='text'/>
        <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'  type='text'/>
        <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'  type='text'/>
        <button className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bd-green-600 text-white'>Guardar Usuario</button>    
        </form>
        </div>
    );
};

export default Usuarios;
