import { actualizarData, eliminarData, limpiarData } from "../../data/data";
import { types } from "../types/types";

const initialState = {
    notas:[]
}

export const notasReducer = (state=initialState, action) =>{
    switch (action.type) {
        case types.CARGAR_DATA:
            return {
                ...state,
                notas: action.payload.map((data) => data),
            }
        case types.AGREGAR_NOTA:
            return {
                ...state,
                notas: [ action.payload, ...state.notas]
            }
        case types.MARCAR_NOTA:
            const arregloNotas = [...state.notas]
            const note = arregloNotas.find((n)=>(n.id===action.payload))
            const index = arregloNotas.findIndex((n)=>(n.id===action.payload))
            const newStatus = (note.status==="active") ? "completed" : "active"
            const newNote = {nota:note.nota, id:note.id, status:newStatus}
            arregloNotas.splice(index, 1, newNote)
            actualizarData(newNote, note.id)
            return{
                ...state,
                notas: arregloNotas
            }
        case types.ELIMINAR_NOTA:
            const newData = state.notas.filter((n)=>(n.id!==action.payload))
            eliminarData(action.payload)
            return{
                ...state,
                notas: [...newData]
            }
        case types.LIMPIAR_COMPLETADO:
            const notasActivas = state.notas.filter((n)=>(n.status.includes("active")))
            limpiarData(state.notas)
            return{
                ...state,
                notas: [...notasActivas]
            }
        default:
            return state;
    }
}