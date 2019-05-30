import { Ipregunta } from './pregunta.interface';

export interface Irespuesta{
    id?:number,
    estado?:boolean,
    pregunta:Ipregunta
}