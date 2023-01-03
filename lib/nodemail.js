const nodemailer = require('nodemailer')



/* const consulta_usuario = `Nombre: ${nombre} \nEmail: ${email}\nTelefono: ${telefono}\nConsulta: ${ms}  `  */

export const enviarMail= async ({consulta_usuario,asunto})=>{
    const config ={
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user:'examenfinal1999@gmail.com', 
            pass: 'hheglvnudyxaffni'
        }
    }

    const mensaje ={
        from:'examenfinal1999@gmail.com',
        to: 'examenfinal1999@gmail.com', /* Nota: aqui se puede agregar cualquier correo al que el usuario quiera que se envie */
        subject: asunto,
        text: consulta_usuario 


    }

    const transport = nodemailer.createTransport(config)
    const info = await transport.sendMail(mensaje)
    console.log(info)
}

/* enviarMail(consulta_usuario,asunto); */


