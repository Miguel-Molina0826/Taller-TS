// interfas 

interface Lavadora {
  id: number;
  disponible: boolean;
}

interface Alquiler {
  id: number;
  lavadoraId: number;
  horas: number;
  descuento: number;
  total: number;
}

//datos 

let lavadoras: Lavadora[] = [
  { id: 1, disponible: true },
  { id: 2, disponible: true },
  { id: 3, disponible: true }
];

let alquileres: Alquiler[] = [];

let idAlquiler = 1;


//calculo del descuento 

function calculoDescuento(horas: number): number {
  if (horas >= 9) return 0.30;
  if (horas >= 5) return 0.20;
  if (horas >= 3) return 0.10;
  return 0;
}

//alquilar

function alquilarLavadora(horas: number): void {
  const lavadoraDisponible = lavadoras.find(l => l.disponible);

  if (!lavadoraDisponible) {
    console.log("No hay lavadoras disponibles");
    return;
  }

  const precioBase = 2;
  const descuento = calcularDescuento(horas);
  const total = (precioBase * horas) * (1 - descuento);

  lavadoraDisponible.disponible = false;

  const nuevoAlquiler: Alquiler = {
    id: idAlquiler++,
    lavadoraId: lavadoraDisponible.id,
    horas,
    descuento,
    total
  };

  alquileres.push(nuevoAlquiler);

  console.log("Lavadora alquilada:", nuevoAlquiler);
}

//devolver lavadora 

function devolverLavadora(idLavadora: number): void {
  const lavadora = lavadoras.find(l => l.id === idLavadora);

  if (!lavadora) {
    console.log("Lavadora no existe");
    return;
  }

  lavadora.disponible = true;
  console.log("Lavadora devuelta:", idLavadora);
}

//reportes 

function generarReportes(): void {
  console.log("=== REPORTE LAVADORAS ===");

  // map()
  alquileres.map(a => {
    console.log(`Lavadora ${a.lavadoraId} - ${a.horas}h - Total: $${a.total}`);
  });

  // dinero total (reduce)
  const total = alquileres.reduce((acc, a) => acc + a.total, 0);
  console.log("Total recaudado:", total);

  // lavadoras disponibles (filter)
  const disponibles = lavadoras.filter(l => l.disponible);
  console.log("Lavadoras disponibles:", disponibles.length);

  // alquileres con descuento >= 20%
  const conDescuento = alquileres.filter(a => a.descuento >= 0.20);
  console.log("Alquileres con descuento >=20%:", conDescuento);
}

