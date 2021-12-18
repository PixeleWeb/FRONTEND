import React, { useEffect } from 'react';
import Input from 'components/input';
import { Enum_Rol } from 'utils/enum';
import DropDown from 'components/Dropdown';
import ButtonLoading from 'components/BottonLoading';
import useFormData from 'hooks/useFormData';
import { CREAR_USUARIO } from 'graphql/auth/mutaciones';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const { form, formData, updateFormData } = useFormData(null);
  
  

  const [crearUser, { data:mutationData,loading:mutationLoading, error:mutationError }] =
    useMutation(CREAR_USUARIO);

  const submitForm = (e) => {
    e.preventDefault();
    crearUser({ variables: formData });
  };

  useEffect(() => {
    if(mutationData){
      toast.success('Usuario creado con exito');
    }
    }, [mutationData]);


    useEffect(() => {
      if(mutationError){
        toast.error('Error modificando el Usuario');
      }
      
      
      }, [mutationError]);


  

  

  return (
    <div className='flex flex-col h-full w-full items-center justify-center'>
    <Link to='/usuarios'>
        <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
      </Link>
      <h1 className='text-3xl font-bold my-4'>Crear Usuario</h1>
      <form className='flex flex-col' onSubmit={submitForm} onChange={updateFormData} ref={form}>
        <div className='grid grid-cols-2 gap-5'>
          <Input label='Nombre:' name='nombre' type='text' required />
          <Input label='Apellido:' name='apellido' type='text' required />
          <Input label='Documento:' name='identificacion' type='text' required />
          <DropDown label='Rol deseado:' name='rol' required={true} options={Enum_Rol} />
          <Input label='Correo:' name='correo' type='email' required />
         
        </div>
        <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={mutationLoading}
          text='Registrarme'
        />
      </form>
      
    </div>
  );
};

export default Register;