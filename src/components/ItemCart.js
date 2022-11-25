import React from 'react'
import { StoreState } from '../context/StoreState'
import styles from './itemcart.module.css'

function ItemCart({ id, price, title, image }) {
  // console.log(image)
  // const {
  //   state: { cart },
  //   dispatch,
  // } = StoreState()

  // function dispatchFn() {
  //   dispatch({ type: 'ADD_TO_CART', payload: 'item' })
  // }
  return (
    <div className={styles.container}>
      <div className={styles.product_container}>
        <img className={styles.img_container} src={image} alt='' />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price_tag}>${price} </p>
        <button className={styles.btn}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ItemCart
