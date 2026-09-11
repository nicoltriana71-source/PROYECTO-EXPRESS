const manejadorErrores = (req, res, next) => {
    const codigoEstado = error.statuCode || 500
    const mensaje = error.mensaje || "Error inesperado."
    console.error(`[ERROR] - ${new Date().toISOString()} - ${codigoEstado} - ${mensaje}`)

    //Validar si hay mas informacion 

    
}

