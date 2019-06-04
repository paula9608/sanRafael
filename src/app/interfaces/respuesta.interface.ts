import { Ipregunta } from './pregunta.interface';

export interface Irespuesta{
    id?:number,
    nombre?: string,
    correcta?:boolean,
    pregunta?:Ipregunta
}