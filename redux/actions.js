// action types
export const SET_NAVIGATION = 'SET_NAVIGATION'
export const SET_SOUNDS = 'SET_SOUNDS'
export const SET_BACKGROUND_IMAGE = 'SET_BACKGROUND_IMAGE'
export const SET_PRODUCTS = 'SET_PRODUCTS'
export const SET_PURCHASES = 'SET_PURCHASES'

// action creators
export const setNavigation = update => ({
  type: SET_NAVIGATION,
  payload: update,
})

export const setSounds = update => ({
  type: SET_SOUNDS,
  payload: update
})

export const setBackgroundImage = update => ({
  type: SET_BACKGROUND_IMAGE,
  payload: update
})

export const setProducts = update => ({
  type: SET_PRODUCTS,
  payload: update
})

export const setPurchases = update => ({
  type: SET_PURCHASES,
  payload: update
})