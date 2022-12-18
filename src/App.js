import { DataProvider } from './context/StoreState'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartPage from './pages/CartPage'

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<CartPage />} path='/cart' />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
