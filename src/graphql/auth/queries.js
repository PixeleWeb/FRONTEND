import {gql} from '@apollo/client';



const GET_REGISTRO = gql`
query Usuario($id: String!) {
    Usuario(_id: $id) {
      _id
      nombre
      apellido
      identificacion
      correo
      estado
      rol
    }
  }
  `;

export {GET_REGISTRO};
