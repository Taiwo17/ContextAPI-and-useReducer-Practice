import React from 'react'
import { StoreState } from '../context/StoreState'
import styles from './itemcart.module.css'

function ItemCart({ item }) {
  const { dispatch } = StoreState()
  const { price, title, image } = item
  return (
    <section className={styles.container}>
      <div className={styles.product_container}>
        <img className={styles.img_container} src={image} alt='' />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price_tag}>${price} </p>
        <button
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: item })}
          className={styles.btn}
        >
          Add to Cart
        </button>
      </div>
    </section>
  )
}

export default ItemCart
