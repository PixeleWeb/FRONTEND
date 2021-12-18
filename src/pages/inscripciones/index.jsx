import { useQuery } from '@apollo/client';
import { GET_INSCRIPCIONES } from 'graphql/inscripciones/queries';
import React,{useEffect} from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Enum_EstadoInscripcion } from 'utils/enum';


const IndexInscripciones = () => {
    const {data,error,loading}=useQuery(GET_INSCRIPCIONES);

    useEffect(() => {
        console.log('data servidor',data);
    },[data]);

    useEffect(()=>{
        if(error){
            toast.error('Error consultando las Inscripciones')
        }
    },[error])


    if(loading) return <div>Cargando .......</div>;

    



    return (
        <div className='flex flex-col items-center justify-center '>
        <h2 className='text-2xl font-extrabold text-gray-800'>Lista de Inscripciones</h2>
        
        <table className='tabla'>
            <thead>
                <tr>
                <th>Estado</th>
                <th>Fecha Ingreso</th>
                <th>Fecha Egreso</th>
                <th>Proyecto</th>
                <th>Estudiante</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {data &&
                data.Inscripciones.map((u) => {
                    return (
                    <tr key={u._id}>
                        <td>{Enum_EstadoInscripcion[u.estado]}</td>
                        <td>{u.fechaIngreso}</td>
                        <td>{u.fechaEgreso}</td>
                        <td>{u.identificacion}</td>
                        <td>{u.proyecto}</td>
                        <td>{u.estudiante}</td>
                        <td>
                        
                        <Link to={`/inscripciones/aprobar/${u._id}`}>
                            <i className='fas fa-thumbs-up text-yellow-600 hover:text-yellow-400 cursor-pointer' />
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

export default IndexInscripciones;