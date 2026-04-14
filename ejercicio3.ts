// Optional Chaining y Nullish Coalescing [cite: 109, 111, 112, 113, 115]
type Usuario = {
  nombre: string;
  direccion?: { calle?: string; ciudad: string; };
};

const usuario: Usuario = { nombre: "Ana" };
const calle = usuario.direccion?.calle; // undefined, no da error [cite: 111]

let nombreEntrada: string | null = null;
let nombreMostrar = nombreEntrada ?? "Anónimo"; // "Anónimo" [cite: 113]