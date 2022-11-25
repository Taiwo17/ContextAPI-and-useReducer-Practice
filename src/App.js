import { DataProvider } from './context/StoreState'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
