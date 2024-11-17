const fs = require('fs')

const registrar = (nombre, edad, tipo, color, enfermedad) => {
 
    const registro = {
        "nombre": nombre,
        "edad": edad,
        "tipo": tipo, 
        "color": color,
        "enfermedad": enfermedad
    }



    try {
        const data = fs.readFileSync('citas.json', 'utf8');
        const citas = JSON.parse(data);
        citas.registros.push(registro)

        fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
        console.log('Registro de cita exitoso');
    } catch (err) {
        console.error('Error al procesar las citas:', err);
    }


}

const leer = () => {
    const citas = fs.readFileSync('citas.json', 'utf8')
    const citasTemp = JSON.parse(citas)
    citasTemp.registros.forEach((registro) => {
        console.log(`Nombre del Animal ${registro.nombre}, Edad ${registro.edad}, Tipo de animal ${registro.tipo}, Color del animal ${registro.color}, Enfermedad ${registro.enfermedad}`)
    })       
}

module.exports = { registrar, leer } 