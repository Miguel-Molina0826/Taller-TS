// Simulación de entrada de usuario (en Node.js sin prompt)
// Para usar en navegador o con entrada real, reemplaza prompt() según sea necesario

// Definir combos disponibles
const COMBO_1: number = 25000;  // Combo clásico
const COMBO_2: number = 32000;  // Combo premium
const COMBO_3: number = 28500;  // Combo especial

// Definir interfaz para Combo
interface Combo {
    nombre: string;
    precio: number;
}

// Definir interfaz para Pedido
interface Pedido {
    combo: number;
    cantidad: number;
}

const COMBOS: Record<number, Combo> = {
    1: { nombre: "Combo Clásico (hamburguesa + papas + gaseosa)", precio: COMBO_1 },
    2: { nombre: "Combo Premium (hamburguesa doble + papas grandes + bebida)", precio: COMBO_2 },
    3: { nombre: "Combo Especial (hamburguesa + aros de cebolla + postre)", precio: COMBO_3 }
};

let totalGeneral: number = 0;

// Pedidos predefinidos con const
const pedidos: Pedido[] = [
    { combo: 1, cantidad: 2 },
    { combo: 2, cantidad: 1 },
    { combo: 3, cantidad: 3 },
    { combo: 4, cantidad: 0 }  // 4 para finalizar
];

console.log("====================================");
console.log("   BIENVENIDO AL RESTAURANTE BURGER");
console.log("====================================\n");

// Procesar cada pedido
for (let i: number = 0; i < pedidos.length; i++) {
    const seleccion: number = pedidos[i].combo;
    const cantidad: number = pedidos[i].cantidad;

    // Mostrar menú
    console.log("\n--- MENÚ DE COMBOS ---");
    console.log("1. " + COMBOS[1].nombre + " - $" + COMBOS[1].precio);
    console.log("2. " + COMBOS[2].nombre + " - $" + COMBOS[2].precio);
    console.log("3. " + COMBOS[3].nombre + " - $" + COMBOS[3].precio);
    console.log("4. Finalizar pedido");
    console.log("---------------------");
    console.log("Selección: " + seleccion);

    // Validar selección con if/else if/else
    if (seleccion === 1) {
        // Combo 1 seleccionado
        console.log("\n✓ Seleccionaste: " + COMBOS[1].nombre);
        let subtotal: number = COMBOS[1].precio * cantidad;
        totalGeneral += subtotal;

        console.log("Cantidad: " + cantidad);
        console.log("Subtotal: $" + subtotal);
        console.log("Total acumulado: $" + totalGeneral);

    } else if (seleccion === 2) {
        // Combo 2 seleccionado
        console.log("\n✓ Seleccionaste: " + COMBOS[2].nombre);
        let subtotal: number = COMBOS[2].precio * cantidad;
        totalGeneral += subtotal;

        console.log("Cantidad: " + cantidad);
        console.log("Subtotal: $" + subtotal);
        console.log("Total acumulado: $" + totalGeneral);

    } else if (seleccion === 3) {
        // Combo 3 seleccionado
        console.log("\n✓ Seleccionaste: " + COMBOS[3].nombre);
        let subtotal: number = COMBOS[3].precio * cantidad;
        totalGeneral += subtotal;

        console.log("Cantidad: " + cantidad);
        console.log("Subtotal: $" + subtotal);
        console.log("Total acumulado: $" + totalGeneral);

    } else if (seleccion === 4) {
        // Finalizar pedido
        console.log("\n====================================");
        console.log("   PEDIDO FINALIZADO");
        console.log("====================================");
        console.log("TOTAL A PAGAR: $" + totalGeneral);
        console.log("¡Gracias por tu compra!");
        console.log("====================================\n");
        break;

    } else {
        // Opción no válida
        console.log("\n❌ Opción no válida. Por favor, selecciona 1, 2, 3 o 4.");
    }
}