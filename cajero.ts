// interfas 

interface Transaccion {
  id: number;
  tipo: "deposito" | "retiro" | "consulta";
  monto: number;
  fecha: Date;
  saldoResultante: number;
}

interface Cuenta {
  titular: string;
  saldo: number;
  transacciones: Transaccion[];
}


let contadorId = 1;

const cuenta: Cuenta = {
  titular: "Miguel",
  saldo: 1000,
  transacciones: []
};

//consultar saldo
function consultarSaldo(cuenta: Cuenta): number {
  console.log("Saldo actual:", cuenta.saldo);
  return cuenta.saldo;
}
//depositar dinero

function depositar(cuenta: Cuenta, monto: number): void {
  if (monto <= 0) {
    console.log("Monto inválido");
    return;
  }

  cuenta.saldo += monto;

  const nuevaTransaccion: Transaccion = {
    id: contadorId++,
    tipo: "deposito",
    monto,
    fecha: new Date(),
    saldoResultante: cuenta.saldo
  };

  cuenta.transacciones.push(nuevaTransaccion);
}

//retirar dinero

function retirar(cuenta: Cuenta, monto: number): void {
  if (monto <= 0) {
    console.log("Monto inválido");
    return;
  }

  if (monto > cuenta.saldo) {
    console.log("Fondos insuficientes");
    return;
  }

  cuenta.saldo -= monto;

  const nuevaTransaccion: Transaccion = {
    id: contadorId++,
    tipo: "retiro",
    monto,
    fecha: new Date(),
    saldoResultante: cuenta.saldo
  };

  cuenta.transacciones.push(nuevaTransaccion);
}

//estado de cuenta

function estadoCuenta(cuenta: Cuenta): void {
  console.log("=== HISTORIAL ===");

  // map()
  const resumen = cuenta.transacciones.map(t => {
    return `${t.id} - ${t.tipo} - $${t.monto} - Saldo: $${t.saldoResultante}`;
  });

  resumen.forEach(r => console.log(r));

  // filter()
  const depositos = cuenta.transacciones.filter(t => t.tipo === "deposito");
  const retiros = cuenta.transacciones.filter(t => t.tipo === "retiro");

  // reduce()
  const totalDepositado = depositos.reduce((acc, t) => acc + t.monto, 0);
  const totalRetirado = retiros.reduce((acc, t) => acc + t.monto, 0);

  console.log("Total depositado:", totalDepositado);
  console.log("Total retirado:", totalRetirado);
}

console.log("Iniciando prueba");

consultarSaldo(cuenta);

depositar(cuenta, 500);
retirar(cuenta, 200);

estadoCuenta(cuenta);
 console.log("INICIANDO CAJERO");

consultarSaldo(cuenta);

depositar(cuenta, 500);
retirar(cuenta, 200);

estadoCuenta(cuenta);