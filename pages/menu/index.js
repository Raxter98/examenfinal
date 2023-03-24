import Layout from "../../components/layout"
import { useEffect, useState } from 'react'
import Image from 'next/image';

export default function Home() {
  
  const [dataResponse,setdataResponse] = useState([]);



    useEffect(() => {
        async function getPageData(){
            const apiUrlEndpoint = "http://localhost:3000/api/getdata-menu";
            const response = await fetch(apiUrlEndpoint);
            const res = await response.json()
            console.log(res.results);
            setdataResponse(res.results)
        }
     getPageData();
    }, [])
  
  
  
  
  return (
    <>
      <Layout title="MENÚ" />

      <div class="flex flex-wrap -m-4">
        {dataResponse.map((results) => {
          return (
            <div class="p-4 lg:w-1/4 md:w-1/2 mt-3">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={results.foto_menu}
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    {results.titulo_menu}
                  </h2>
                  <p class="mb-4">
                    {results.descripcion_menu}
                  </p>
                  <span class="inline-flex">
                    
                    
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
