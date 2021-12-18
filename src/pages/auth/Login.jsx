import { useQuery } from '@apollo/client';
import { GET_REGISTRO } from 'graphql/auth/queries';
import React,{useEffect} from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Enum_Rol, Enum_EstadoUsuario} from 'utils/enum';


const IndexCrear = () => {
    const {data,error,loading}=useQuery(GET_REGISTRO);

    useEffect(() => {
        console.log('data servidor',data);
    },[data]);

    useEffect(()=>{
        if(error){
            toast.error('Error creando los usuarios')
        }
    },[error])


    if(loading) return <div>Cargando .......</div>;

    



    return (
        <div className='flex flex-col items-center justify-center '>
        <h2 className='text-2xl font-extrabold text-gray-800'>Lista de Usuarios Creados</h2>
        
        <table className='tabla'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Correo</th>
              <th>Identificación</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Crear</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.Usuarios.map((u) => {
                return (
                  <tr key={u._id}>
                    <td>{u.nombre}</td>
                    <td>{u.apellido}</td>
                    <td>{u.correo}</td>
                    <td>{u.identificacion}</td>
                    <td>{Enum_Rol[u.rol]}</td>
                    <td>{Enum_EstadoUsuario[u.estado]}</td>
                    <td>
                      <Link to={`/auth/Registro/${u._id}`}>
                        <i className='fas fa-pen text-yellow-600 hover:text-yellow-400 cursor-pointer' />
                      </Link>
                      
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    )
}

export default IndexCrear;
