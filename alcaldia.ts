// PROGRAMA DE BIENESTAR PARA ADULTO MAYOR - ALCALDÍA DE ARMENIA
// Salario mínimo vigente
const SALARIO_MINIMO: number = 1300000;
const PORCENTAJE_60_80: number = 0.12;  // 12%
const PORCENTAJE_MAYOR_80: number = 0.15;  // 15%

// Definir interfaz para Persona
interface Persona {
    nombre: string;
    edad: number;
}

// Registro de personas predefinidas
const personas: Persona[] = [
    { nombre: "Juan García", edad: 65 },
    { nombre: "María López", edad: 82 },
    { nombre: "Carlos Pérez", edad: 55 },
    { nombre: "Ana Martínez", edad: 78 },
    { nombre: "Pedro Rodríguez", edad: 85 },
    { nombre: "Rosa Hernández", edad: 72 }
];

// Contadores y acumuladores
let beneficiarios60_80: number = 0;
let beneficiariosMayor80: number = 0;
let noAplican: number = 0;
let montoTotalPresupuesto: number = 0;

console.log("========================================");
console.log("PROGRAMA DE BIENESTAR PARA ADULTO MAYOR");
console.log("     ALCALDÍA DE ARMENIA");
console.log("========================================\n");
console.log("Total de personas a registrar: " + personas.length);
console.log("\n");

// Ciclo for para procesar cada persona
for (let i: number = 0; i < personas.length; i++) {
    const nombre: string = personas[i].nombre;
    const edad: number = personas[i].edad;

    console.log("--- PERSONA " + (i + 1) + " ---");
    console.log("Nombre: " + nombre);
    console.log("Edad: " + edad);

    // Clasificar a la persona con if/else if/else
    let porcentajeAplicado: number = 0;
    let subsidio: number = 0;
    let aplica: boolean = false;

    if (edad >= 60 && edad <= 80) {
        // Adulto Mayor entre 60 y 80 años
        porcentajeAplicado = PORCENTAJE_60_80;
        subsidio = SALARIO_MINIMO * porcentajeAplicado;
        montoTotalPresupuesto += subsidio;
        beneficiarios60_80++;
        aplica = true;

    } else if (edad > 80) {
        // Adulto Mayor Senior (más de 80 años)
        porcentajeAplicado = PORCENTAJE_MAYOR_80;
        subsidio = SALARIO_MINIMO * porcentajeAplicado;
        montoTotalPresupuesto += subsidio;
        beneficiariosMayor80++;
        aplica = true;

    } else {
        // Menor de 60 años - no aplica
        noAplican++;
    }

    // Usar operador ternario para asignar categoría
    const categoria: string = aplica ? (edad > 80 ? "Adulto Mayor Senior" : "Adulto Mayor") : "No aplica";

    // Mostrar información de la persona
    if (aplica) {
        console.log("Categoría: " + categoria);
        console.log("Porcentaje aplicado: " + (porcentajeAplicado * 100) + "%");
        console.log("Valor del subsidio: $" + subsidio.toLocaleString('es-CO'));
        console.log("✓ APLICA AL PROGRAMA");
    } else {
        console.log("Categoría: " + categoria);
        console.log("✗ NO APLICA AL PROGRAMA (menor de 60 años)");
    }

    console.log("\n");
}

// Resumen final
console.log("========================================");
console.log("           RESUMEN FINAL");
console.log("========================================\n");
console.log("Total de personas registradas: " + personas.length);
console.log("Total de beneficiarios: " + (beneficiarios60_80 + beneficiariosMayor80));
console.log("  - Beneficiarios 60-80 años: " + beneficiarios60_80);
console.log("  - Beneficiarios mayores de 80 años: " + beneficiariosMayor80);
console.log("Personas que NO aplican: " + noAplican);
console.log("\n");
console.log("Monto total a presupuestar: $" + montoTotalPresupuesto.toLocaleString('es-CO') + " COP");
console.log("Porcentaje de cobertura: " + ((beneficiarios60_80 + beneficiariosMayor80) / personas.length * 100).toFixed(2) + "%");
console.log("\n========================================");
console.log("Presupuesto anual (12 meses): $" + (montoTotalPresupuesto * 12).toLocaleString('es-CO') + " COP");
console.log("========================================\n");