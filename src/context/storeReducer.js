export function storeReducer(state, action) {
  switch (action.type) {
    case 'ADDED_PRODUCTS':
      return { ...state, products: [...state.products, ...action.payload] }

    // Using Object Method for the ADD_TO_CART
    // case 'ADD_TO_CART':
    //   const item = state.cart[action.payload.id]
    //   return {
    //     ...state,
    //     cart: {
    //       ...state.cart,
    //       [action.payload.id]: item
    //         ? { ...item, qty: item.qty + 1 }
    //         : { ...action.payload, qty: 1 },
    //     },
    //   }

    // Using Array Method
    case 'ADD_TO_CART':
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      )
      // First Method firing twice
      itemInCart
        ? itemInCart.qty++
        : state.cart.push({ ...action.payload, qty: 1 })
      localStorage.setItem('cart', JSON.stringify(state.cart))

      return { ...state, cart: [...state.cart] }

    // Second Method - Code

    case 'INCREASE':
      // First Method using FindIndex function
      // state.cart[state.cart.findIndex((item) => item.id === action.payload.id)]
      //   .qty++
      // return { ...state, cart: [...state.cart] }

      // Second Method using Find function
      let item = state.cart.find((item) => item.id === action.payload.id)
      item.qty++
      localStorage.setItem('cart', JSON.stringify(state.cart))

      return { ...state, cart: [...state.cart] }

    case 'DECREASE':
      let itemDecrement = state.cart.find(
        (item) => item.id === action.payload.id
      )
      itemDecrement.qty === 1 ? (itemDecrement = 1) : itemDecrement.qty--
      localStorage.setItem('cart', JSON.stringify(state.cart))

      return { ...state, cart: [...state.cart] }

    case 'REMOVE_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }
    // Using Object Method for the cart
    // case 'REMOVE_CART':
    //   let newCart = { ...state.cart }
    //   delete newCart[action.payload.id]
    //   return { ...state, cart: newCart }

    default:
      return state
  }
}
