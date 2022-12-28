import Menu from "../components/menu"
import Head from "next/head"

const layout = ({children, title}) => {

    return (

        <>
            
            <Head>
                <title>Sushi Next.js | {title ? `${title}`: ""} </title>
                <link rel="icon" href="/sushi.ico" />
            </Head>    
            
            

            
             <Menu />    
            
            

            <div>{children}</div>

        </>

    ) 

}

export default layout ;