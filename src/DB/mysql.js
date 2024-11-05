import mysql from 'mysql'
import config from '../config.js'
import {mysql_} from "../config.js";
import { error } from '../red/response.js';

const dbconfig = {
    host : mysql_.host,
    user : mysql_.user,
    password : mysql_.password,
    database: mysql_.database

}
let conexion;

const conMysql = ()=>{
    console.log(dbconfig)
    
    conexion = mysql.createConnection(dbconfig)
    
    conexion.connect((err)=> {
        if (err){
        console.log("db err",err)
        setTimeout(conMysql,200)
    }
    else{
        console.log('db conectada')
}
})
conexion.on('error',err => {
    
    console.log('db err',err)
    if (err.code === 'PROTOCOL_CONNECTION_LOST'){
        
    conMysql()
    
}
else{
    throw err

}
})
}


conMysql();

const todos = (tabla)=>{

return new Promise( (resolve, reject) =>{

    conexion.query("select * from "+ tabla, (error,result)=>{

        if (error) return reject(error);
        resolve(result)
    })
} )

}




const agregar = (tabla, data) => {
    console.log(data)
    return new Promise((resolve, reject) => {
        conexion.query(`INSERT INTO ${tabla} SET ?`, data, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
};


export default {todos , agregar}