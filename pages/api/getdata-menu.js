import mysql from 'mysql2/promise';

export default async function handler (req,res){

const dbconection = await mysql.createConnection({

host: 'localhost',
database: 'sushijs',
user: "root",
password: "",


});

try {

    const query = "SELECT * FROM menu"
    const values = []
    const [data] = await dbconection.execute(query, values) 
    dbconection.end()
    
    res.status(200).json({results: data })

} catch (error){
    /* res.status(500).json({error:error.message}) */
}


}

