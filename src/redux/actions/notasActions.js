import { types } from "../types/types"

export const cargarData = (data) =>({
    type : types.CARGAR_DATA,
    payload : data
})

export const agregarNota = (nota) =>({
    type: types.AGREGAR_NOTA,
    payload: nota
})

export const marcarNota = (id) =>({
    type: types.MARCAR_NOTA,
    payload: id
})

export const eliminarNota = (id) =>({
    type: types.ELIMINAR_NOTA,
    payload: id
})

export const limpiarCompletado = () =>({
    type: types.LIMPIAR_COMPLETADO
})