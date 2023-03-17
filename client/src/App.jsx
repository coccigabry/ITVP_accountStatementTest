import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Balance from './pages/Balance'
import { useContext } from 'react'
import { AuthContext } from './context/context'

function App() {
  const { isUserLogged, isFileImported } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/balance' element={isUserLogged && isFileImported ? <Balance /> : <Navigate to='/' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
