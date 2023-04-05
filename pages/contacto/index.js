import Layout from "../../components/layout";
import { useState } from "react";
import Swal from "sweetalert2";
import {sendContactForm} from '../../lib/sendContactForm';

const contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const datos = {nombre, email, telefono, asunto, mensaje};

  const verificar = async (e) => {
    if (datos.nombre && datos.email && datos.telefono && datos.asunto && datos.mensaje !== '') {
      await sendContactForm(datos);
    } else {
      e.preventDefault();

      Swal.fire({
        icon: "error",
        title: "Lo sentimos... ",
        text: "Debe de llenar todo el fomulario para continuar",
      });
    }
  }

  return (
    <>
      
        <Layout title="CONTACTO" />
      

      <div className="flex justify-center m-36">
        <div className=" w-96 md:w-4/5 border bg-white rounded-xl p-3 shadow-2xl shadow-black">
          <h1 className="block text-4xl mb-7 uppercase text-center font-bold text-amber-400">
            Formulario de contacto
          </h1>
          <h2 className="block text-xl mb-7  text-center text-amber-400">
            escribenos y en breve nos pondremos en contacto contigo
          </h2>

          <form  method="POST" action="https://formsubmit.co/examenfinal1999@gmail.com" className="block text-2xl uppercase">
            <div>
              <label htmlFor="nombre" className="block text-amber-400">
                Nombre
              </label>
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                name="name"
                id="nombre"
                className="block w-full font-bold  text-sm h-9 bg-red-500 rounded-xl "
                placeholder="Nombre completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-amber-400">
                Email
              </label>
              <input
                value={email}
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="block w-full font-bold text-sm h-9 bg-red-500 rounded-xl"
                placeholder="example@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="asunto" className="block text-amber-400">
                Asunto
              </label>
              <input
                value={asunto}
                type="text"
                name="subject"
                onChange={(e) => setAsunto(e.target.value)}
                className="block w-full font-bold text-sm h-9 bg-red-500 rounded-xl"
                placeholder="Descripcion "
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-amber-400">
                Mensaje
              </label>
              <textarea
                value={mensaje}
                type="text"
                name="comments"
                onChange={(e) => setMensaje(e.target.value)}
                id="mensaje"
                className="block w-full font-bold text-sm h-20 bg-red-500 rounded-xl"
                placeholder="Mensaje completo completo"
                cols="30"
                rows="3"
              />
              <input type="hidden" name="_next" value="http://localhost:3000/contacto" />
              <input type="hidden" name="_captcha" value="false" />
            </div>

            <div className="w-full text-center ">
              <button
                type="submit"
                className="mt-2  bg-amber-400 rounded-xl p-2  text-center font-bold text-white hover:bg-lime-600"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default contacto;
