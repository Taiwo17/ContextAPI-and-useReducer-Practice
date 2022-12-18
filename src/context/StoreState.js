import { createContext, useContext, useReducer } from 'react'
import { storeReducer } from './storeReducer'

// Define the storage context
const StoreContext = createContext({})

// Local Storage
const storage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : []

// Define the Data provider that will later pass it onto the children

export function DataProvider({ children }) {
  const initState = { cart: storage, products: [] }

  const [state, dispatch] = useReducer(storeReducer, initState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const StoreState = () => {
  return useContext(StoreContext)
}

export default StoreContext
