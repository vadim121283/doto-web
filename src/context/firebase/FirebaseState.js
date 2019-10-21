import React, {useReducer} from 'react'
import axios from 'axios'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'
import { SHOW_LOADER, REMOVE_DOTO, ADD_DOTO, FETCH_DOTOS } from '../types'

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({children}) => {
  const initialState = {
    dotos: [],
    loading: false
  }
  const [state, dispatch] = useReducer(firebaseReducer, initialState)

  const showLoader = () => dispatch({type: SHOW_LOADER})

  const fetchDotos = async () => {
    showLoader()
    const res = await axios.get(`${url}/dotos.json`)
    
    const payload = Object.keys(res.data).map(key => {
      return {
        ...res.data[key],
        id: key
      }
    })

    dispatch({
      type: FETCH_DOTOS,
      payload
    })
  }

  const addDoto = async title => {
    const doto = {
      title, date: new Date().toJSON()
    }
    try {
      const res = await axios.post(`${url}/dotos.json`, doto);
      const payload = {
        ...doto,
        id: res.data.name
      }

      dispatch({
        type: ADD_DOTO,
        payload
      })

    } catch (e) {
      throw new Error(e.message)
    }
    
  }

  const removeDoto = async id => {
    await axios.delete(`${url}/dotos/${id}.json`)

    dispatch({
      type: REMOVE_DOTO,
      payload: id
    })
  }

  return (
    <FirebaseContext.Provider value={{
      showLoader, addDoto, removeDoto, fetchDotos,
      loading: state.loading,
      dotos: state.dotos
    }} >
      {children}
    </FirebaseContext.Provider>
  )
}