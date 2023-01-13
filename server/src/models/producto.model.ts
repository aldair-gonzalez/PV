export interface Producto {
    id           : number;
    codigo       : string;
    producto     : string;
    departamento : number;
    categoria    : number;
    proveedor    : number;
    invMinimo    : number;
    existencia   : number;
    pCosto       : number;
    pVenta       : number;
}