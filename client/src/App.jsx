import './App.css'
import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import FruitsPage from './pages/FruitsPage'
import NavBar from './components/NavBar'
import { ThemeContext } from './context/theme.context'
import IsAnon from './components/IsAnon'
import IsPrivate from './components/IsPrivate'
import AddFruit from './pages/AddFruit'

function App() {

  const { theme } = useContext(ThemeContext)

  return (
    <div className={`app ${theme}`}>

      <NavBar />

      <Routes>
        <Route path='/' element={<IsPrivate> <HomePage /> </IsPrivate>} />
        <Route path='/login' element={<IsAnon><LoginPage /></IsAnon>} />
        <Route path='/signup' element={<IsAnon><SignUpPage /></IsAnon>} />
        <Route path='/new fruit' element={<IsPrivate><AddFruit /></IsPrivate>} />
        <Route path='/fruits' element={<IsPrivate> <FruitsPage /> </IsPrivate>} />
      </Routes>

    </div>
  )
}

export default App
