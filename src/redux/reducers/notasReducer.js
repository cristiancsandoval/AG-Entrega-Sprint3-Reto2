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
            const note = state.notas.find((n)=>(n.id===action.payload))
            const filter = state.notas.filter((n)=>(n.id!==action.payload))
            const newStatus = (note.status==="active") ? "completed" : "active"
            const newNote = {nota:note.nota, id:note.id, status:newStatus}
            actualizarData(newNote, note.id)
            return{
                ...state,
                notas: [newNote, ...filter]
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