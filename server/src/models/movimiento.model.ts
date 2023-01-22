export interface Movimiento {
    id_movimiento : number;
    fecha         : Date;
    hora          : Date;
    producto      : number;
    tipo          : string;
    cantidad      : number;
    departamento  : number;
}