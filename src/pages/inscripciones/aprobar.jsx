import React,{useEffect} from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useParams,Link } from 'react-router-dom';
import { GET_INSCRIPCIONES } from 'graphql/inscripciones/queries';
import Input from 'components/input';
// import ButtonLoading from 'components/BottonLoading';
import useFormData from 'hooks/useFormData';
import { APROBAR_INSCRIPCION } from 'graphql/inscripciones/mutaciones';
import { toast } from 'react-toastify';
import DropDown from 'components/Dropdown';
// import { Enum_EstadoUsuario } from 'utils/enum';
import { Enum_EstadoInscripcion } from 'utils/enum';


const AprobarInscripcion = () => {
    const {form,formData,updateFormData}= useFormData(null);
    const {_id}= useParams();

    const {
        data:querydata,
        error:queryError,
        loading:queryLoading
    }=useQuery(GET_INSCRIPCIONES, {
        variables:{_id},
    });
    console.log(querydata);

    const [aprobarInscripcion, {data:mutationData, error:mutationError}] = useMutation(APROBAR_INSCRIPCION);

    
    const submitForm = (e)=>{
        e.preventDefault();
        console.log('fd', formData);
        delete formData.rol;
        aprobarInscripcion({
            variables:{_id, ...formData},
        })
    };

        useEffect(() => {
        if(mutationData){
            toast.success('inscripcion aprobada con exito');
        }
        }, [mutationData]);


        useEffect(() => {
        if(mutationError){
            toast.error('Error aprobando inscripcion');
        }
        if(queryError){
            toast.error('Error consultando inscripciones');
        }
        }, [mutationError,queryError]);


    

    if(queryLoading) return <div>Cargando .......</div>;

    return (
        <div className='flew flex-col w-full h-full items-center justify-center p-10'>
        <Link to='/usuarios'>
            <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
        </Link>
        <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'> Aprobar Inscripcion </h1>
        <form
            onSubmit={submitForm}
            onChange={updateFormData}
            ref={form}
            className='flex flex-col items-center justify-center'
        >
            <DropDown
            label='Estado de la inscripcion:'
            name='estado'
            defaultValue={querydata.Inscripciones.estado}
            required={true}
            options={Enum_EstadoInscripcion}
            /> 
            
            <Input
            label='fecha de ingreso'
            type='date'
            name='fecha de ingreso'
            defaultValue={querydata.Inscripciones.fechaIngreso}
            required={true}
            />
            <Input
            label='fecha de egreso'
            type='date'
            name='fecha de egreso'
            defaultValue={querydata.Inscripciones.fechaEgreso}
            required={true}
            />
            <Input
            label='proyecto'
            type='texto'
            name='nombre del proyecto'
            defaultValue={querydata.Inscripciones.proyecto}
            required={true}
            />
        
            <Input
            label='nombre del estudiante'
            type='text'
            name='estudiante'
            defaultValue={querydata.Inscripciones.estudiante}
            required={true}
            />
            
        </form>
    </div>
    )
}

export default AprobarInscripcion;
