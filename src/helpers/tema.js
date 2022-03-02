//Funciones de gestión del tema

export const obtenerTema = () => {

    const tema = localStorage.getItem("theme")
    const valorTema = (tema===null) ? "light" : tema
    return valorTema

}

export const cambiarTema = () =>{

    const valorTema = obtenerTema()
    const nuevoTema = (valorTema==="light") ? "dark" : "light"
    localStorage.setItem("theme", nuevoTema)
    return nuevoTema

}