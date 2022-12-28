import Layout from "../components/layout"
import Image from "next/image"
import sushi from "../public/imagenes/sushi.png"
import sushi2 from "../public/sushi.ico"

export default function Home() {
  return (


      <div >


        <div className="hidden sm:flex ">
            <Layout title="INICIO" />  
        </div>

              <div className="sm:flex mt-20 w-full justify-center text-6xl">
                <h1 className="font-nabla text-amber-400"> <span>Sushi </span>Next.js &nbsp;</h1>
                
                <Image src={sushi2} width={1000/10} height={3000/10}></Image>
              </div>  

         <div className=" sm:flex w-full  justify-evenly mt-28  ">
            
            <div className="sm:w-1/3 md:w-1/3">
              <Image src={sushi} width={5000/10} height={3000/10}  />
              
            </div>
            
              

              <div className="sm:my-auto sm:w-1/3 md:w-1/3 mt-10">
                <h1 className="text-slate-50 text-3xl text-center sm:text-left md:text-7xl sm:text-3xl uppercase">tu sushi fresco <br /> a domicilio</h1>  
                <h2 className="mt-4 text-amber-400 text-xl text-center sm:text-left md:text-2xl sm:text-sm uppercase">menu de la casa <br/> precio especial</h2>
                <button type="button"  className="bg-white px-4 py-0 mt-4 rounded-xl text-2xl text-red-900 font-bold w-full sm:w-48  hover:text-amber-400 hover:bg-slate-800">Ver más</button>
              </div>
            
          </div> 

        
           
        

      </div>

        
        

    

      
    
  )
}
