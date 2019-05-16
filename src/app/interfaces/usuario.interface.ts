import { IRol } from './rol.interface';

export interface IUsuario {
    id?: number,
    nombre?: string,
    apellido?: string,
    telefono?: string,
    direccion?: string,
    username?: string,
    grado?:string,
    password?: string,
    rol: IRol

}
  