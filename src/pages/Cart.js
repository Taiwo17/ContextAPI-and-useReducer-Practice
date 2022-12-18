import { StoreState } from '../context/StoreState'
import { useEffect } from 'react'
import ItemCart from '../components/ItemCart'
import axios from 'axios'
import styles from './cart.module.css'

function Cart() {
  const { state, dispatch } = StoreState()
  const fetchStore = async () => {
    try {
      const storeData = await axios.get(
        'https://fakestoreapi.com/products?limit=10'
      )
      dispatch({
        type: 'ADDED_PRODUCTS',
        payload: storeData.data,
      })
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
        {state.products && state.products.length > 0
          ? state.products.map((item, index) => (
              <ItemCart key={index} item={item} />
            ))
          : null}
      </div>
    </>
  )
}

export default Cart
