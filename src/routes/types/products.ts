export type CodigosExternosType={
    codigoExterno:string,
}
export interface ProductoInterface {
    codigoInterno: string,
    descripcion: string,
    codigosExternos: Array<CodigosExternosType>
}