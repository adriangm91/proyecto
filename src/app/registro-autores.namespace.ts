export namespace AutoresNamespace {
    export interface Autores {
        nombre?:string,
        apellido?:string,
        cedula?: string,
        generoLiterario?:string,
        fechaNacimiento?: Date,
        libros?: Array<Libros>
    }
    export interface Libros {
        titulo:string,
        annoPublicado: Date,
        generoLiterario: string,
        autor?: string
    }
}