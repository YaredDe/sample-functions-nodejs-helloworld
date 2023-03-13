// function main(args) {
//     let name = args.name || 'stranger'
//     let greeting = 'Hello ' + name + '!'
//     console.log(greeting)
//     return {"body": greeting}
//   }

const nodemailer = require("nodemailer")

async function main(args) {
  let nombre = args.nombre

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
    res.status(200).json({ message: "Se ha mandado el correo con exito" })
  } catch(err) {
    res.status(500).json({ error: "Hubo un error" })
  }
}

exports.main = main
