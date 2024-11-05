export const success = (req,res,mensaje,status)=>{

    const statusCode = status || 200
    const mensajeOk = mensaje ||""
    res.status(statusCode).send({

        error: false,
        status:statusCode,
        body:mensaje
    })
}


export const error = (req,res,mensaje,status)=>{

    const statusCode = status || 500
    const mensajeOk = mensaje ||"error"
    res.status(statusCode).send({

        error: true,
        status:statusCode,
        body:mensaje
    })
}