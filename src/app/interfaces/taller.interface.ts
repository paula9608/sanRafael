import { Imateria } from './materia.interface';

export interface Italler{
    id?: number,
    titulo?:string,
    descripcion?: string,
    materia:Imateria,
    grado?: GradoEnum   
}

export enum GradoEnum {
    GRADO_PREESCOLAR='GRADO_PREESCOLAR',
    GRADO_PRIMERO='GRADO_PRIMERO',
    GRADO_SEGUNDO='GRADO_SEGUNDO',
    GRADO_TERCERO='GRADO_TERCERO',
    GRADO_CUARTO='GRADO_CUARTO',
    GRADO_QUINTO='GRADO_QUINTO'
}