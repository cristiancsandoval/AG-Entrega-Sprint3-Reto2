import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData } from '../data/data'
import { endpoint } from '../helpers/url'
import { iconClose, iconSelect } from '../media/images'
import { agregarNota, cargarData, eliminarNota, limpiarCompletado, marcarNota } from '../redux/actions/notasActions'
import { BarraOpciones, CntrList } from '../styles/styles'

const ListToDo = () => {

  const dispatch = useDispatch()
  const {notas} = useSelector((state)=>state.notas);
  const [filtro, setFiltro] = useState("");
  const [nuevaNota, setNuevaNota] = useState("");
  const lista = notas.filter((note)=>(note.status.includes(filtro)));
  const itemsLeft = (notas.filter((note)=>(note.status.includes("active")))).length;
  const [cargando, setCargando] = useState(true);
  const alerta =  cargando ? "Loading notes..." : `No ${filtro} notes`

  useEffect(()=>{
    
    axios.get(endpoint)
        .then((response)=>{
            dispatch(cargarData(response.data));
            setCargando(false)
        })
        .catch((e)=>{
            console.log(e)
        })

  }, [dispatch])

  const handleSubmit = (e) =>{

    e.preventDefault();
    if(nuevaNota!==""){
      const id = nuevaNota.at(0)+String(Math.round((Math.random())*1000))+nuevaNota.at(nuevaNota.length-1)
      const nueva = {nota:nuevaNota, status:"active", id}
      addData(nueva)
      dispatch(agregarNota(nueva))
      setNuevaNota("")
    }
    
  }

  const handleChange = ({target}) =>{
      setNuevaNota(target.value)
  }

  return (
    <CntrList>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Create a new todo...'
                value={nuevaNota}
                onChange={handleChange}
            />
        </form>
        <div>
          {lista.length===0 &&
            <div><p className='alert'>{alerta}</p></div>
          }
          { 
            lista.map(note=>(
              <div key={note.id} className={note.status}>
                <button className='btn-select' onClick={()=>dispatch(marcarNota(note.id))}>
                  <img src={iconSelect} alt='Icon check' />
                </button>
                <p>{note.nota}</p>
                <button className='btn-close' onClick={()=>dispatch(eliminarNota(note.id))}>
                  <img src={iconClose} alt='Icon close'/>
                </button>
              </div>
            ))
          }
        </div>
        <BarraOpciones>
          <p>{itemsLeft} items left</p>
          <div className={filtro}>
            <button onClick={()=>setFiltro("")} >All</button>
            <button onClick={()=>setFiltro("active")}>Active</button>
            <button onClick={()=>setFiltro("completed")}>Completed</button>
          </div>
          <button onClick={()=>dispatch(limpiarCompletado())} >clear completed</button>
        </BarraOpciones>
    </CntrList>
  )
}

export default ListToDo