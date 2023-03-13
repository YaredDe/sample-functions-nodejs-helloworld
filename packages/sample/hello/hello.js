const nodemailer = require("nodemailer")

async function main(args) {
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
      to: "proyecto10campo@gmail.com",
      subject: "Cotización de evento",
      text: `Se hizo una cotización de evento con los siguientes datos: 
      Nombre: ${args.nombre}
      Correo: ${args.correo}
      Whatsapp: ${args.whatsapp}
      Tipo de Evento: ${args.evento}
      Número de Personas: ${args.personas}
      Selección de Menu: ${args.menu}
      Lugar: ${args.lugar}
      Hora Y Fecha: ${args.hora_fecha}
      `
    })
    return { "body": "Se ha mandado el correo con exito" }
  } catch(err) {
    return { "body": `Hubo un error: ${err}` }
  }
}

exports.main = main
