
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './assets/pages/homePage'
import Contact from './assets/pages/Contact'
import Navbar from './assets/components/navbar'


function App() {
  return (
    <>
     
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
