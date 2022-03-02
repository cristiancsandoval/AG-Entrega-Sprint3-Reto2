import React from 'react'
import { Provider } from 'react-redux'
import CntrMain from '../components/CntrMain'
import store from '../redux/store/store'

const ToDoApp = () => {
  return (
    <Provider store={store}>
      <CntrMain/>
    </Provider>
  )
}

export default ToDoApp