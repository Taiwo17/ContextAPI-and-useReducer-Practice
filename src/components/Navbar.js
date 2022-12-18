import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { StoreState } from '../context/StoreState'
import { useNavigate } from 'react-router-dom'

import styles from './navbar.module.css'

function Navbar() {
  const { state } = StoreState()
  const navigate = useNavigate()

  function getTotal() {
    // let itemCount = 0

    // Using Object Method
    // for (const [key] of Object.entries(state.cart)) {
    //   itemCount = itemCount + state.cart[key].qty
    // }
    // return itemCount

    // Using Array Method
    let total = 0
    state.cart.forEach((item) => {
      total += item.qty
    })
    return total
  }

  function linkNav() {
    getTotal() === 0 ? navigate('/') : navigate('/cart')
  }

  return (
    <div className={styles.container}>
      <div className={styles.nav_container}>
        <h1 style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          Cart Store
        </h1>
        <div className={styles.icon_container} onClick={() => linkNav()}>
          <AiOutlineShoppingCart className={styles.nav_icon} />
          <span className={styles.icon_qty}>
            {getTotal() === 0 ? null : getTotal()}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
