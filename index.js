const { registrar, leer } = require("./operaciones")

const operacion = process.argv[2]
const citas = process.argv.slice(3)


const nombreCita = citas[0];
const edadCita = citas[1];
const tipoCita = citas[2];
const colorCita = citas[3];
const enfermedadCita = citas[4];

if (operacion === 'registrar') {
    registrar(nombreCita, edadCita, tipoCita, colorCita, enfermedadCita);
} else if (operacion === 'leer') {
    leer();
} else {
    console.log('Operación no válida');
}

