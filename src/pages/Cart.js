import { StoreState } from '../context/StoreState'
import { useEffect } from 'react'
import ItemCart from '../components/ItemCart'
import axios from 'axios'
import styles from './cart.module.css'

function Cart() {
  const { state, dispatch } = StoreState()
  console.log(typeof state.cart)
  const fetchStore = async () => {
    try {
      const storeData = await axios.get(
        'https://fakestoreapi.com/products?limit=10'
      )
      dispatch({
        type: 'ADD_TO_CART',
        payload: { cart: storeData.data },
      })
      // console.log(storeData.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    fetchStore()
  }, [])

  return (
    <>
      <div className={styles.cart_container}>
        {state.cart && state.cart.length > 0
          ? state.cart.map((item) => console.log(item.id))
          : null}
      </div>
    </>
  )
}

export default Cart
