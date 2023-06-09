export const  validarNombre = (nombre) => {
    const length = nombre.length
    return  (length > 1 && length < 30) ? true : false
}

export const validarApellido = (apellido) =>{
    const length = apellido.length
    return  (length > 1 && length < 50) ? true : false
}

export const valitarTelefono = (telefono) => {
    const length = telefono.length
    return  length ==10 ? true : false
}