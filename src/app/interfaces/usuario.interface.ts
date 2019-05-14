import { IRol } from './rol.interface';

export interface IUsuario {
    id?: number,
    nombre?: string,
    username?: string,
    password?: string,
    rol: IRol
}