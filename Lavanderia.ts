interface Cliente {
    nombre: string;
    horas: number;
    index?: number;
}

const PRECIO_POR_HORA = 5000;
const DESCUENTO_PORCENTAJE = 0.30;
const HORAS_MINIMAS_DESCUENTO = 12;

function calcularCostoSinDescuento(horas: number): number {
    return horas * PRECIO_POR_HORA;
}

function calcularDescuento(costo: number, horas: number): number {
    return horas >= HORAS_MINIMAS_DESCUENTO
        ? costo * DESCUENTO_PORCENTAJE
        : 0;
}

function calcularPrecioFinal(costo: number, descuento: number): number {
    return costo - descuento;
}

function mostrarResumen(
    cliente: Cliente,
    index: number,
    costo: number,
    descuento: number,
    total: number
): void {
    console.log(`=== CLIENTE ${index + 1} ===`);
    console.log(`Nombre: ${cliente.nombre}`);
    console.log(`Horas alquiladas: ${cliente.horas}`);
    console.log(`Costo sin descuento: $${costo}`);

    if (descuento > 0) {
        console.log(`Descuento (30%): -$${descuento}`);
    } else {
        console.log("Descuento: Sin descuento");
    }

    console.log(`Total a pagar: $${total}\n`);
}

function procesarCliente(cliente: Cliente, index: number): void {
    const costo = calcularCostoSinDescuento(cliente.horas);
    const descuento = calcularDescuento(costo, cliente.horas);
    const total = calcularPrecioFinal(costo, descuento);

    mostrarResumen(cliente, index, costo, descuento, total);
}

const clientes: Cliente[] = [
    { nombre: "Juan", horas: 5 },
    { nombre: "Maria", horas: 15 },
    { nombre: "Carlos", horas: 12 },
    { nombre: "Ana", horas: 8 },
    { nombre: "Pedro", horas: 20 }
];

console.log(`Clientes a procesar hoy: ${clientes.length}\n`);

clientes.forEach((cliente, index) => {
    procesarCliente(cliente, index);
});