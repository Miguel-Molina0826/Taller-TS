// Parámetros opcionales y por defecto [cite: 132, 134]
function saludar(nombre: string, titulo?: string): string {
  return titulo ? `Hola, ${titulo} ${nombre}` : `Hola, ${nombre}`;
}

// Función Flecha para transformar datos [cite: 160, 161]
const precios = [100, 200, 300];
const conIVA = precios.map((precio) => precio * 1.19);

const mayores = [15, 22, 17, 30, 12].filter((edad) => edad >= 18);