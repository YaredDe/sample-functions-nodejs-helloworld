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
      `
    })
    res.status(200).json(req.body)
  } catch(err) {
    res.status(500).json({ error: "Hubo un error" })
  }
}

exports.main = main
