import Layout from "../components/layout"
import Image from "next/image"
import sushi from "../public/imagenes/sushi.png"
import sushi2 from "../public/sushi.ico"
import Jump from 'react-reveal/Jump';
import Bounce from 'react-reveal/Bounce'
import comiendo from '../public/imagenes/comiendo.jpg'
import Tada from 'react-reveal/Tada';
import Swal from 'sweetalert2'



export default function Home() {
  
  const alert = () => {

    

    function alert() {
      Swal.fire({
        title: 'Sushi Nigiri',
        text: '¡A SOLO $7.999 PESOS!',
        imageUrl: 'https://www.japonalternativo.com/wp-content/uploads/2020/04/receta-de-sushi-de-salmon-crudo-1024x775.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        footer: '<a href="/menu">¿Quieres verlo?</a>'
      })

          
        }
        
    return (
        
        alert()

    )

}
  
  return (

      

      <div >


        <div className="hidden sm:flex ">
            <Layout title="INICIO" />  
        </div>

          <Jump>

              <div className="sm:flex mt-20 w-full justify-center text-6xl">
                <h1 className="font-nabla text-amber-400"> <span>Sushi </span>Next.js &nbsp;</h1>
                
                <Image src={sushi2} width={1000/10} height={3000/10} alt="sushi2.jpg"></Image>
              </div>  

          </Jump>

        <Bounce>

          <div className=" sm:flex w-full  justify-evenly mt-28  ">
            
            <div className="sm:w-1/3 md:w-1/3">
              <Image src={sushi} width={5000/10} height={3000/10}  alt="plato.jpg"/>
              
            </div>
            
              

              <div className="sm:my-auto sm:w-1/3 md:w-1/3 mt-10">
                <h1 className="text-slate-50 text-3xl text-center sm:text-left md:text-7xl sm:text-3xl uppercase">tu sushi fresco <br /> a domicilio</h1>  
                <h2 className="mt-4 text-amber-400 text-xl text-center sm:text-left md:text-2xl sm:text-sm uppercase">menu de la casa <br/> precio especial</h2>
                <button onClick={alert} type="button"  className="bg-white px-4 py-0 mt-4 rounded-xl text-2xl text-red-500 font-bold w-full sm:w-48  hover:text-amber-400 hover:bg-slate-800">Ver más</button>
              </div>
            
          </div> 

        </Bounce>

        <Tada>

         <div className="sm:w-4/4 sm:flex mt-16">
              <Image src={comiendo}  className="sm:w-2/4" alt="comiendo.jpg" />

              <div className="sm:w-2/4 bg-amber-400 sm:flex items-center p-11">
                  <p className="uppercase font-bold text-4xl text-white ">Todos los Viernes promocion <span className="text-red-600 text-5xl">2x1</span> a <span className="text-red-600 sm:text-5xl">50% de descuento</span> si eres cliente frecuente  </p>
              </div>
         </div>

        </Tada>


        
           
        

      </div>

        
        

    

      
    
  )
}
