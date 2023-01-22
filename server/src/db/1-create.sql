-- Crear base de datos para "punto de Venta"--

create database puntoventa;

USE puntoventa;

-- Crear tabla "proveedores"--
create table proveedores(
    id_proveedor int not null auto_increment primary key,
    proveedor varchar(50) not null,
    informacion varchar(100)
);

-- Crear tabla "departamentos"--
create table departamentos(
    id_departamento int not null auto_increment primary key,
    departamento varchar(50) not null,
    informacion varchar(100)
);


-- Crear tabla "categorias"--
create table categorias (
    id_categoria int not null auto_increment primary key,
    categoria varchar(50) not null,
    departamento int not null, foreign key(departamento) references departamentos(id_departamento)
);

-- Crear tabla "productos"--
create table productos (
    id_producto int not null auto_increment primary key,
    codigo varchar(20) not null,
    producto varchar(100) not null,
    categoria int not null,
    proveedor int not null,
    stock int not null,
    costo decimal not null,
    precio decimal not null,
    foreign key(categoria) references categorias(id_categoria),
    foreign key(proveedor) references proveedores(id_proveedor)
);

-- Crear tabla "movimientos"--
create table movimientos(
    id_movimiento int not null auto_increment primary key,
    fecha datetime not null,
    hora time not null,
    producto int not null,
    Tipo text not null,
    cantidad int not null,
    departamento int not null,
    foreign key(producto) references productos(id_producto),
    foreign key(departamento) references departamentos(id_departamento)
);