import {Italler} from './taller.interface'
export interface Ipregunta{
    id?:number,
    nombre?:string,
    premio?:boolean,
    tipo?: TipoEnum,
    taller:Italler

}
export enum TipoEnum {
    TIPO_OPERACIONBASICA='TIPO_OPERACIONBASICA',
	TIPO_VOCALES='TIPO_VOCALES',
	TIPO_SILABA='TIPO_SILABA',
    TIPO_FRACCION='TIPO_FRACCION',
    TIPO_OTRO='TIPO_OTRO'
}