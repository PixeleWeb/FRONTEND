import {gql} from '@apollo/client';


const CREAR_USUARIO = gql`
mutation CrearUsuario(
  $nombre: String!, 
  $identificacion: String!, 
  $correo: String!, 
  $rol: Enum_Rol!, 
  $apellido: String!, 
  $estado: Enum_EstadoUsuario)
   {
  crearUsuario(
    nombre: $nombre, 
    identificacion: $identificacion, 
    correo: $correo, 
    rol: $rol, 
    apellido: $apellido, 
    estado: $estado
    ) {
      
    nombre
    identificacion
    correo
    rol 
    apellido
    estado
    
    
  }
}


`;

export {CREAR_USUARIO};
