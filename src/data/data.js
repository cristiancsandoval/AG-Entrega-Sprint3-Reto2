import axios from "axios";
import { endpoint } from "../helpers/url";

export const addData = (newData) =>{

    axios.post(endpoint, newData)
        .then(()=>{
            console.log("Nota agregada")
        })
        .catch((error)=>{
            console.log(error)
        })

}

export const actualizarData = (data, id) =>{
    
    axios.put(endpoint+id, data)
        .then(()=>{
            console.log("Nota actualizada")
        })
        .catch((error)=>{
            console.log(error)
        })

}

export const eliminarData = (id) =>{

    axios.delete(endpoint+id)
        .then(()=>{
            console.log("Nota eliminada")
        })
        .catch((error)=>{
            console.log(error)
        })

}

export const limpiarData = (datos)=>{

    datos.forEach(note => {
        if(note.status.includes("completed")){
            eliminarData(note.id)
        }
    });

}