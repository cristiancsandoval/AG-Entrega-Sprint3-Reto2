import React, { useState } from 'react'
import ListToDo from './ListToDo'
import { cambiarTema, obtenerTema } from '../helpers/tema'
import { CntrApp, DragDropText } from '../styles/styles'
import {moon, sun} from '../media/images'

const CntrMain = () => {

    const [tema, setTema] = useState(obtenerTema())
    const icon = (tema==="light")?  moon : sun

    console.log('prueba revert');

    console.log('primer cambio 2');

  return (
    <CntrApp className={tema}>
        <div>
            <h1>Todo</h1>
            <button onClick={()=>setTema(cambiarTema())} >
                <img src={icon} alt='theme icon'/>
            </button>
        </div>
        <ListToDo/>
        <DragDropText>
          Drag and drop to reorder list
        </DragDropText>
    </CntrApp>
  )
}

export default CntrMain