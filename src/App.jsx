import './App.css'
import React from 'react'
import Mainbar from './Components/Mainbar'
import Monthlist from './Components/monthlist'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
function App() {
 
  return (
    <div>
     <BrowserRouter >
         <div className='flex bg-slate-100'>
            <Routes>
                <Route path='/' element={<Monthlist />} ></Route>
                <Route path='/month' element={<Mainbar />}></Route>
                <Route path='/home' element={<Home />} ></Route>
            </Routes>           
        </div> 
        </BrowserRouter>
    </div>
  )
}

export default App
