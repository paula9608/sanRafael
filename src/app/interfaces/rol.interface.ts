export interface IRol {
    id?: number,
    nombre?: string,
    password?: string,
    tipo?: TipoRolEnum   
}

export enum TipoRolEnum {
    ROLE_ADMIN = 'ROLE_ADMIN',
	ROLE_PROFESOR = 'ROLE_PROFESOR',
	ROLE_ESTUDIANTE = 'ROLE_ESTUDIANTE'
}