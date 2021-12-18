import React, { useEffect } from 'react';
import Input from 'components/input';
import DropDown from 'components/Dropdown';
import ButtonLoading from 'components/BottonLoading';
import useFormData from 'hooks/useFormData';
import { CREAR_INSCRIPCION } from 'graphql/inscripciones/mutaciones';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Enum_EstadoInscripcion } from 'utils/enum';

const CrearInscripciones = () => {
    const { form, formData, updateFormData } = useFormData(null);
    
    

    const [crearInscripciones, { data:mutationData,loading:mutationLoading, error:mutationError }] =
        useMutation(CREAR_INSCRIPCION);

    const submitForm = (e) => {
        e.preventDefault();
        crearInscripciones({ variables: formData });
    };

    useEffect(() => {
        if(mutationData){
        toast.success('Inscripcion creado con exito');
        }
        }, [mutationData]);


        useEffect(() => {
        if(mutationError){
            toast.error('Error modificando Inscripcion');
        }
        
        
        }, [mutationError]);


    

    

    return (
        <div className='flex flex-col h-full w-full items-center justify-center'>
        <Link to='/inscripciones/crear'>
            <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
        </Link>
        <h1 className='text-3xl font-bold my-4'>Crear Inscripcion</h1>
        <form className='flex flex-col' onSubmit={submitForm} onChange={updateFormData} ref={form}>
            <div className='grid grid-cols-2 gap-5'>
            <DropDown label='Rol deseado:' name='estado' required={true} options={Enum_EstadoInscripcion} />
            <Input label='Fecha de ingreso:' name='Fecha de Ingreso' type='date' required />
            <Input label='Fecha de egreso:' name='Fecha de egreso' type='date' required />
            <Input label='proyecto:' name='Proyecto' type='text' required />
            <Input label='nombre de estudiante:' name='Estudiante' type='text' required />
            
            
            </div>
            <ButtonLoading
            disabled={Object.keys(formData).length === 0}
            loading={mutationLoading}
            text='Inscribirme'
            />
        </form>
        
        </div>
    );
};

export default CrearInscripciones;