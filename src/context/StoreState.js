import axios from 'axios'
import { createContext, useContext, useEffect, useReducer } from 'react'
import { storeReducer } from './storeReducer'

// Define the storage context
const StoreContext = createContext({})

// Define the Data provider that will later pass it onto the children

export function DataProvider({ children }) {
  // const [products, setProducts] = useState([])

  // const fetchProducts = async () => {
  //   try {
  //     const res = await axios.get('https://fakestoreapi.com/products?limit=10')
  //     setProducts(res.data)
  //   } catch (err) {
  //     console.log(err.message)
  //   }
  // }

  // useEffect(() => {
  //   fetchProducts()
  // }, [])

  // Initialize the products and the cart

  const initState = { cart: [] }

  const [state, dispatch] = useReducer(storeReducer, initState)
  // console.log(state)

  // useEffect(() => {
  //   if (state.cart) {
  //     axios.get('https://fakestoreapi.com/products?limit=10').then((res) => {
  //       dispatch({ type: 'ADD_TO_CART', cart: res.data })
  //     })
  //   }
  // }, [])

  // function addCart(cart) {
  //   dispatch({ type: 'ADD_TO_CART', payload: cart })
  // }

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
