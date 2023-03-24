import Layout from '../../components/layout'
import { useEffect, useState } from 'react'
import Image from 'next/image';

export default function local ({}) {
    const [dataResponse,setdataResponse] = useState([]);

    

    useEffect(() => {
        async function getPageData(){
            const apiUrlEndpoint = "http://localhost:3000/api/getdata";
            const response = await fetch(apiUrlEndpoint);
            const res = await response.json()
            console.log(res.results);
            setdataResponse(res.results)
        }
     getPageData();
    }, [])

    return (
      <>
        <Layout title="LOCALES" />

        

        
        {dataResponse.map((results) => {

            return (
              <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                  <img
                    className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                    alt="hero"
                    src={results.foto_locales}
                  />
                  <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> {results.titulo_locales} </h1>
                    <p className="mb-8 leading-relaxed">
                      {results.descripcion_locales}
                    </p>
                  </div>
                </div>
              </section>
            );
        } )}
      </>
    );
    
}