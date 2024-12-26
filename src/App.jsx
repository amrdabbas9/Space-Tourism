
import './App.css'
import NavBar from './Components/navbar'

import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'


import Home from './Pages/home'
import Destination from './Pages/destination'
import Crew from './Pages/crew'
import Technology from './Pages/technology'

function App() {
  const location = useLocation()
  console.log(Home)

  return (
    <>
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </AnimatePresence>
    </>
  )
}

export default App

