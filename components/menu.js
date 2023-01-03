import react from "react";
import Link from "next/link";
import Bounce from 'react-reveal/Bounce';

const menu = () => {

    return(

        <>
           <Bounce>

                <ul className="hidden md:flex text-2xl font-bold text-zinc-50  uppercase w-full ">
                
                    <li className="ml-10 hover:text-amber-400"> <Link href='/'> inicio </Link> </li>
                    <li className="ml-10 hover:text-amber-400"> <Link href="/menu"> menú </Link> </li>
                    <li className="ml-10 hover:text-amber-400"> <Link href="#"> locales </Link> </li>
                    <li className="ml-10 hover:text-amber-400"> <Link href="#"> paises </Link> </li>
                    <li className="ml-10 hover:text-amber-400"> <Link href="/contacto"> contacto </Link> </li>
                
                
                </ul>
            
            </Bounce> 
               
        
        </>

    )
}

export default menu;