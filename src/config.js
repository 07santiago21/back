import dotenv from 'dotenv'
dotenv.config()

const config = {

    port : process.env.PORT || 4000

}


export const mysql_ = {

    host : 'localhost',
    user : process.env.USER || 'root',
    password : process.env.PASSWORD || '',
    database : process.env.MYSQL_DB || 'neggo'
}
  
export default config