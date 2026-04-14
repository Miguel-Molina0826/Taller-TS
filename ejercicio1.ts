// Tipos Primitivos [cite: 46, 47, 48, 49, 50]
let nombre: string = "María";
let edad: number = 25;
let activo: boolean = true;
let vacio: null = null;

// Ejercicio: Verificación de tipos con 'unknown' [cite: 60, 61, 62, 63]
function procesarDato(dato: unknown): string {
  if (typeof dato === "string") {
    return dato.toUpperCase(); // TypeScript sabe que es string aquí
  }
  if (typeof dato === "number") {
    return dato.toFixed(2); // TypeScript sabe que es number aquí
  }
  return "Tipo no soportado";
}

// Uso de 'never' para errores [cite: 63]
function lanzarError(mensaje: string): never {
  throw new Error(mensaje);
}