const manejadorErrores = (error, req, res, next) => {
    const codigoEstado = error.statusCode || 500
    const mensaje = error.message || "Error inesperado!!"

    console.error(
        `[ERROR] - ${new Date().toISOString()} - ${codigoEstado} - ${mensaje}`
    )

    // Validar si hay más información
    if (error.stack) {
        console.error(error.stack)
    }

    // Respuesta en JSON
    res.status(codigoEstado).json({
        Error: "ERROR",
        codigoEstado,
        mensaje,

        // Dependiendo si estamos en desarrollo o producción
        ...(process.env.NODE_ENV === "development" && {
            stack: error.stack
        })
    })
}

module.exports = manejadorErrores
