// Arrays y Tuplas etiquetadas [cite: 69, 72]
let numeros: number[] = [1, 2, 3, 4, 5];
let ubicacion: [latitud: number, longitud: number] = [4.60, -74.08];

// Alias de Tipo para un Estudiante [cite: 74, 78, 79, 80]
type Estudiante = {
  nombre: string;
  edad: number;
  carrera: string;
  matricula: string;
  promedio?: number; // Propiedad opcional
};

const alumno: Estudiante = {
  nombre: "Carlos Pérez",
  edad: 22,
  carrera: "Ingeniería de Sistemas",
  matricula: "2024-001"
};