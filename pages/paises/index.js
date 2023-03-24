import Layout from '../../components/layout'
import mapa from "../../public/imagenes/mapa.png";
import Image from "next/image";
import Swal from "sweetalert2";

export default function paises ({}) {

    function alertaArgentina (){

        return (
            Swal.fire({
                title: "Argentina",
                text: "Ciudades: Buenos Aires",
                imageUrl:
                  "https://dfmas.df.cl/dfmas/site/artic/20220819/imag/foto_0000000720220819170528/Argentina-_2.jpg",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image",
                footer: '<a href="https://es.wikipedia.org/wiki/Argentina">Más Informacíon</a>',
              })
        )
    }

    function alertaChile (){

        return (
            Swal.fire({
                title: "Chile",
                text: "Regiones: Coquimbo, Santiago, Arica y todo el sur de Chile",
                imageUrl:
                  "https://www.latercera.com/resizer/LgrqlJqHFSxGGJRD6JsR3_J0swY=/arc-anglerfish-arc2-prod-copesa/public/R33ACWPRQ5BLHCL65LJJB4IUHQ.jpg",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image",
                footer: '<a href="https://es.wikipedia.org/wiki/Chile">Más Informacíon</a>',
              })
        )
    }

    function alertaColombia (){

        return (
            Swal.fire({
                title: "Colombia",
                text: "Ciudades: Bogotá, Bolívar, Boyacá, Norte de Santander y Putumayo",
                imageUrl:
                  "https://www.latercera.com/resizer/hkY00-cPk0sxNbzw19859sQ2Ueo=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/46H7VDPWPOBYV4YPRIHP32KXQI.jpg",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image",
                footer: '<a href="https://es.wikipedia.org/wiki/Colombia">Más Informacíon</a>',
              })
        )
    }

    function alertaPeru (){

        return (
            Swal.fire({
                title: "Perú",
                text: "Ciudades: Lima",
                imageUrl:
                  "http://convenioandresbello.org/cab/wp-content/uploads/2020/07/noticia48_peru_01.jpg",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image",
                footer: '<a href="https://es.wikipedia.org/wiki/Per%C3%BA">Más Informacíon</a>',
              })
        )
    }


    return(
        <>
            <Layout title="PAISES"/>

            <div className='w-full flex justify-center content-center h-full mt-4 bg-yellow-300 rounded-full shadow-xl shadow-black'>
                    
                <div className='text-center relative'>
                    <h1 className='text-3xl font-bold'>Nos puedes encontrar en estos paises</h1>
                    <Image
                    src={mapa}
                    width={5000 / 10}
                    height={3000 / 10}
                    alt="plato.jpg"
                    
                    />

                    <div className='absolute   bottom-40 left-16              md:inset-0.5 md:top-96 md:right-60 h-8 '>
                        <button type="button" onClick={alertaChile} className='bg-white rounded-lg font-bold shadow-xl shadow-black hover:bg-red-600'>CH</button>
                    </div>    
                    
                    <div className='absolute    top-56 left-8               md:inset-0.5 md:top-56 md:right-96  h-8'>
                        <button type="button" onClick={alertaPeru} className='bg-white rounded-lg font-bold shadow-xl shadow-black hover:bg-red-600'>PE</button>
                    </div>

                    <div className='absolute   top-36 left-12                md:inset-0.5 md:top-28 md:right-80  h-8'>
                        <button type="button" onClick={alertaColombia} className='bg-white rounded-lg font-bold shadow-xl shadow-black hover:bg-red-600'>CO</button>
                    </div>        

                    <div className='absolute Z-10    bottom-32 left-24           md:bottom-52 md:right-52 h-8 '>
                        <button onClick={alertaArgentina} type="button" className='bg-white rounded-lg font-bold shadow-xl shadow-black hover:bg-red-600'>AR</button>
                    </div>    

                </div>

                

            </div>

            
        
        </>
    )

}





/* Nota: al exportar una funcion asincrona los props de esta se pueden mandar a llamar en el mismo archivo */

