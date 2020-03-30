import {combineReducers} from 'redux'
import {SET_NAVIGATION, SET_SOUNDS, SET_BACKGROUND_IMAGE, SET_PRODUCTS, SET_PURCHASES} from './actions'

const navigationReducer = (state = [], action) => {
  if (action.type === SET_NAVIGATION) return action.payload
  return state
}

const soundsReducer = (state = [], action) => {
  if (action.type === SET_SOUNDS) return action.payload
  return state
}

const backgroundImageReducer = (state = [], action) => {
  if (action.type === SET_BACKGROUND_IMAGE) return action.payload
  return state
}

const productsReducer = (state = [], action) => {
  if (action.type === SET_PRODUCTS) return action.payload
  return state
}

const purchasesReducer = (state = {}, action) => {
  if (action.type === SET_PURCHASES) return action.payload
  return state
}

const reducer = combineReducers({
  navigation: navigationReducer,
  sounds: soundsReducer,
  backgroundImage: backgroundImageReducer,
  products: productsReducer,
  purchases: purchasesReducer
})

export default reducer
