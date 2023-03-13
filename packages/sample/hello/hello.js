// function main(args) {
//     let name = args.name || 'stranger'
//     let greeting = 'Hello ' + name + '!'
//     console.log(greeting)
//     return {"body": greeting}
//   }

const nodemailer = require("nodemailer")

async function main(args) {
  let nombre = args.nombre
  let correo = args.correo
  let whatsapp = args.whatsapp

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "testingstuff708@gmail.com",
        pass:"xmlkrwbxnoqojufo"
    }
  })
  try {
    await transporter.sendMail({
      from: "Test account",
      to: "yared_delatorre@hotmail.com",
      subject: "Cotización de evento",
      text: `Se hizo una cotización de evento con los siguientes datos: 
      Nombre: ${nombre}
      Correo: ${correo}
      Whatsapp: ${whatsapp}
      Tipo de Evento: ${args.evento}
      Número de Personas: ${args.personas}
      Selección de Menu: ${args.menu}
      Lugar: ${args.lugar}
      Hora Y Fecha: ${args.hora_fecha}
      `
    })
    return { message: "Se ha mandado el correo con exito" }
  } catch(err) {
    return { error: "Hubo un error" }
  }
}

exports.main = main
