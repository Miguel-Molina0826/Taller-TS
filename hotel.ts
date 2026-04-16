//interfas

type TipoHabitacion = "economica" | "estandar" | "suite";

interface Reserva {
  id: number;
  cliente: string;
  tipo: TipoHabitacion;
  noches: number;
  precioBase: number;
  descuento: number;
  total: number;
}

//precios base 

const precios: Record<TipoHabitacion, number> = {
  economica: 80,
  estandar: 150,
  suite: 300
};
//contador 

let reservas: Reserva[] = [];
let idReserva = 1;

//calcular el descuento 

function calcularDescuento(noches: number): number {
  if (noches >= 11) return 0.15;
  if (noches >= 6) return 0.10;
  if (noches >= 3) return 0.05;
  return 0;
}

//crear la reserva 

function crearReserva(cliente: string, tipo: TipoHabitacion, noches: number): void {
  if (!precios[tipo]) {
    console.log("Tipo de habitación inválido");
    return;
  }

  const precioBase = precios[tipo];
  const descuento = calcularDescuento(noches);

  const total = (precioBase * noches) * (1 - descuento);

  const nuevaReserva: Reserva = {
    id: idReserva++,
    cliente,
    tipo,
    noches,
    precioBase,
    descuento,
    total
  };

  reservas.push(nuevaReserva);

  console.log("Reserva creada:", nuevaReserva);
}

//crear  reportes 

function generarReporte(): void {
  console.log("=== REPORTE ===");

  // map()
  const resumen = reservas.map(r => {
    return `${r.cliente} - ${r.tipo} - ${r.noches} noches - Total: $${r.total}`;
  });

  resumen.forEach(r => console.log(r));

  // ingresos por tipo (filter + reduce)
  const tipos: TipoHabitacion[] = ["economica", "estandar", "suite"];

  tipos.forEach(tipo => {
    const ingresos = reservas
      .filter(r => r.tipo === tipo)
      .reduce((acc, r) => acc + r.total, 0);

    console.log(`Ingresos ${tipo}: $${ingresos}`);
  });

  // total descuentos
  const totalDescuentos = reservas.reduce((acc, r) => {
    return acc + (r.precioBase * r.noches * r.descuento);
  }, 0);

  console.log("Descuentos totales:", totalDescuentos);
}


console.log("INICIANDO HOTEL");

crearReserva("Miguel", "economica", 2);
crearReserva("Ana", "suite", 5);
crearReserva("Carlos", "estandar", 7);

generarReporte();