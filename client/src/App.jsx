import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Balance from './pages/Balance'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/balance' element={<Balance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
