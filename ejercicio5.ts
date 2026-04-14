type Semaforo = "rojo" | "amarillo" | "verde";

function obtenerAccion(color: Semaforo): string {
  switch (color) {
    case "rojo": return "Detenerse";
    case "amarillo": return "Precaución";
    case "verde": return "Avanzar";
    default:
      // Si se añade un color nuevo al tipo y no se maneja aquí, dará error
      const _exhaustive: never = color;
      return _exhaustive;
  }
}