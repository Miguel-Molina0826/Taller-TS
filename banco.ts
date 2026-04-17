// interfas 

type Estado = "esperando" | "atendido";

interface Cliente {
  turno: number;
  nombre: string;
  estado: Estado;
  llegada: number;
  inicioAtencion?: number;
  finAtencion?: number;
}

//datos base 

let fila: Cliente[] = [];
let turnoActual = 1;

//fila 

function llegarCliente(nombre: string): void {
  const cliente: Cliente = {
    turno: turnoActual++,
    nombre,
    estado: "esperando",
    llegada: Date.now()
  };

  fila.push(cliente);
  console.log("Cliente en fila:", cliente);
}

//atender cliente 

function atenderCliente(): void {
  const cliente = fila.find(c => c.estado === "esperando");

  if (!cliente) {
    console.log("No hay clientes en espera");
    return;
  }

  cliente.estado = "atendido";
  cliente.inicioAtencion = Date.now();

  // Simular tiempo de atención (ej: 2 segundos)
  setTimeout(() => {
    cliente.finAtencion = Date.now();
    console.log("Cliente atendido:", cliente);
  }, 2000);
}

//estadisticas

function generarEstadisticas(): void {
  console.log("=== ESTADÍSTICAS ===");

  const esperando = fila.filter(c => c.estado === "esperando");
  const atendidos = fila.filter(c => c.estado === "atendido");

  console.log("En espera:", esperando.length);
  console.log("Atendidos:", atendidos.length);

  // tiempos de espera
  const tiemposEspera = atendidos.map(c => {
    return (c.inicioAtencion! - c.llegada);
  });

  const promedioEspera = tiemposEspera.length > 0
    ? tiemposEspera.reduce((a, b) => a + b, 0) / tiemposEspera.length
    : 0;

  // tiempos de atención
  const tiemposAtencion = atendidos.map(c => {
    return (c.finAtencion! - c.inicioAtencion!);
  });

  const promedioAtencion = tiemposAtencion.length > 0
    ? tiemposAtencion.reduce((a, b) => a + b, 0) / tiemposAtencion.length
    : 0;

  console.log("Promedio espera (ms):", promedioEspera);
  console.log("Promedio atención (ms):", promedioAtencion);
}

    console.log("INICIANDO BANCO");

llegarCliente("Miguel");
llegarCliente("Ana");
llegarCliente("Carlos");

atenderCliente();

setTimeout(() => {
  atenderCliente();
}, 3000);

setTimeout(() => {
  generarEstadisticas();
}, 6000);