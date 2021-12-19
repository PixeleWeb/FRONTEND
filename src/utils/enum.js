const Enum_Rol = {
  ADMINISTRADOR: 'Administrador',
  ESTUDIANTE: 'Estudiante',
  LIDER: 'Líder',
};

const Enum_EstadoUsuario = {
  PENDIENTE: 'Pendiente',
  AUTORIZADO: 'Autorizado',
  NO_AUTORIZADO: 'No autorizado',
};

const Enum_EstadoProyecto = {
  ACTIVO: 'Activo',
  INACTIVO: 'Inactivo',
};

const Enum_FaseProyecto ={
  INICIADO: 'iniciado',
  DESARROLLO:'desarrollo',
  TERMINADO:'terminado',
  NULO:'nulo',
};

const Enum_TipoObjetivo = {
  GENERAL: 'General',
  ESPECIFICO: 'Específico',
};

const Enum_EstadoInscripcion ={
  INICIADO: 'iniciado',
  DESARROLLO:'desarrollo',
  TERMINADO:'terminado',
  NULO:'nulo',
};

export { Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto,  Enum_EstadoInscripcion, Enum_TipoObjetivo,Enum_FaseProyecto };
