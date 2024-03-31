import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import AjouterPlayer from './AjouterPlayer'
import ModifierPlayer from './ModifierPlayer'


export default function App() {
    const [id,setId] = useState(1) 
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/add' element={<AjouterPlayer id={id} setId={setId}/>}/>
            <Route path='/update/:id' element={<ModifierPlayer/>}/>
        </Routes>
    </BrowserRouter>
  )
}
