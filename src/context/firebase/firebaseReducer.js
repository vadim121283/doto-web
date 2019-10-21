import { SHOW_LOADER, ADD_DOTO, FETCH_DOTOS, REMOVE_DOTO } from "../types"

const handlers = {
  [SHOW_LOADER]: state => ({...state, loading: true}),
  [ADD_DOTO]: (state, {payload}) => ({...state, 
    dotos: [...state.dotos, payload]}),
  [FETCH_DOTOS]: (state, {payload}) => ({...state, dotos: payload, loading:false}),
  [REMOVE_DOTO]: (state, {payload}) => ({
    ...state, 
    dotos: state.dotos.filter(doto => doto.id !== payload)
  }),
  DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}