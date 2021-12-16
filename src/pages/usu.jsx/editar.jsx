import React,{useEffect} from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useParams,Link } from 'react-router-dom';
import { GET_USUARIO } from 'graphql/usuarios/queries';
import Input from 'components/input';
import ButtonLoading from 'components/BottonLoading';
import useFormData from 'hooks/useFormData';
import { EDITAR_USUARIO } from 'graphql/usuarios/mutaciones';
import { toast } from 'react-toastify';
import DropDown from 'components/Dropdown';
import { Enum_EstadoUsuario } from 'utils/enum';


const EditarUsuario = () => {
    const {form,formData,updateFormData}= useFormData(null);
    const {_id}= useParams();

    const {
        data:querydata,
        error:queryError,
        loading:queryLoading
    }=useQuery(GET_USUARIO, {
        variables:{_id},
    });
    console.log(querydata);

    const [editarUsuario, {data:mutationData,loading:mutationLoading, error:mutationError}] = useMutation(EDITAR_USUARIO);

    
    const submitForm = (e)=>{
        e.preventDefault();
        console.log('fd', formData);
        delete formData.rol;
        editarUsuario({
            variables:{_id, ...formData},
        })
    };

     useEffect(() => {
      if(mutationData){
        toast.success('Usuario modificado con exito');
      }
      }, [mutationData]);


      useEffect(() => {
        if(mutationError){
          toast.error('Error modificando el Usuario');
        }
        if(queryError){
          toast.error('Error consultando el Usuario');
        }
        }, [mutationError,queryError]);


    

    if(queryLoading) return <div>Cargando .......</div>;

    return (
        <div className='flew flex-col w-full h-full items-center justify-center p-10'>
      <Link to='/usuarios'>
        <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
      </Link>
      <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar Usuario</h1>
      <form
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
        className='flex flex-col items-center justify-center'
      >
        <Input
          label='Nombre de la persona:'
          type='text'
          name='nombre'
          defaultValue={querydata.Usuario.nombre}
          required={true}
        />
        <Input
          label='Apellido de la persona:'
          type='text'
          name='apellido'
          defaultValue={querydata.Usuario.apellido}
          required={true}
        />
        <Input
          label='Correo de la persona:'
          type='email'
          name='correo'
          defaultValue={querydata.Usuario.correo}
          required={true}
        />
        <Input
          label='Identificación de la persona:'
          type='text'
          name='identificacion'
          defaultValue={querydata.Usuario.identificacion}
          required={true}
        />
        <DropDown
          label='Estado de la persona:'
          name='estado'
          defaultValue={querydata.Usuario.estado}
          required={true}
          options={Enum_EstadoUsuario}
      /> 
        <span>Rol del Usuario:   {querydata.Usuario.rol}</span>
        <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={mutationLoading}
          text='Confirmar'
        /> 
      </form>
    </div>
    )
}

export default EditarUsuario;
