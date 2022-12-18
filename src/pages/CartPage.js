import React from 'react'
import Navbar from '../components/Navbar'
import { StoreState } from '../context/StoreState'
import styles from './cartpage.module.css'

function CartPage() {
  const { state, dispatch } = StoreState()
  const { cart } = state

  const grandTotal = () => {
    let totalPrice = 0
    let totalQuantity = 0
    cart.forEach((item) => {
      totalPrice += item.price * item.qty
      totalQuantity += item.quantity
    })
    return { totalPrice, totalQuantity }
  }

  return (
    <>
      <Navbar />

      {/* Using Array Method for Looping through */}

      <div className={styles.cart_container}>
        {cart.map((item) => {
          return (
            <div key={item.id} className={styles.cart_products}>
              <div className={styles.img_container}>
                <img src={item.image} alt='' />
                <p
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    dispatch({ type: 'REMOVE_CART', payload: item })
                  }
                >
                  Remove
                </p>
              </div>
              <div className={styles.title_container}>
                <p className={styles.product_title}>{item.title}</p>
              </div>
              <div className={styles.btn_group}>
                <button
                  onClick={() => dispatch({ type: 'DECREASE', payload: item })}
                  className={styles.btn}
                >
                  -
                </button>
                <p>{item.qty}</p>
                <button
                  onClick={() => dispatch({ type: 'INCREASE', payload: item })}
                  className={styles.btn}
                >
                  +
                </button>
              </div>
              <div className={styles.price_container}>
                <p> ${item.price * item.qty} </p>
              </div>
            </div>
          )
        })}

        {/* Using Object Method to Loop through */}
        {/* {Object.entries(cart).map(([key]) => {
          return (
            <div key={cart[key].id} className={styles.cart_products}>
              <div className={styles.img_container}>
                <img src={cart[key].image} alt='' />
                <p
                  onClick={() =>
                    dispatch({ type: 'REMOVE_CART', payload: cart[key] })
                  }
                >
                  Remove
                </p>
              </div>
              <div>
                <p className={styles.product_title}>{cart[key].title}</p>
              </div>
              <div className={styles.btn_group}>
                <button className={styles.btn}>-</button>
                <p>2</p>
                <button className={styles.btn}>+</button>
              </div>
              <div>
                <p>Total Price</p>
              </div>
            </div>
          )
        })} */}
      </div>
      <div className={styles.grand_total}>
        <p>${grandTotal().totalPrice.toFixed(2)} </p>
      </div>
    </>
  )
}

export default CartPage
