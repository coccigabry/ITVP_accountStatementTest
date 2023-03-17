import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Balance from './pages/Balance'
import { useGlobalContext } from './context/context'

function App() {
  const { isUserLogged, isFileImported } = useGlobalContext()

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
