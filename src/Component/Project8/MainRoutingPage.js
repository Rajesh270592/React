import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'

export default function MainRoutingPage() {
  return (
    <BrowserRouter>
    <Navbar/> 
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about/:id" element={<About/>}></Route>
     </Routes>
     </BrowserRouter>
    
  )
}
