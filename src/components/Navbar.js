import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import styles from './navbar.module.css'

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.nav_container}>
        <h1>Cart Store</h1>
        <div className={styles.icon_container}>
          <AiOutlineShoppingCart className={styles.nav_icon} />
          <span className={styles.icon_qty}>2</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
