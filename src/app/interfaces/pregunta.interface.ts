import {Italler} from './taller.interface'
export interface Ipregunta{
    id?:number,
    nombre?:string,
    premio?:boolean,
    descripcion?:string,
    taller:Italler
}