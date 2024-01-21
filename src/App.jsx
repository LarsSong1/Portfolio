
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './assets/pages/homePage'
import Contact from './assets/pages/Contact'
import Navbar from './assets/components/navbar'
import Form from './assets/pages/form'





function App() {
  


  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/'  element={<HomePage/>}/>
          {/* <Route path='/'  element={<Home/>}/> */}
          <Route path='/contact' element={<Contact/>} />
          <Route path='/formcontact' element={<Form/>}/>
          <Route path='/formcontact/:plan' element={<Form/>}/>
          <Route path='*' element={<HomePage/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
