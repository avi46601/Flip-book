import './App.css'
import React from 'react'

import Mainbar from './Components/Mainbar'
import Monthlist from './Components/monthlist'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import { SignIn } from './Components/SignIn'


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <div className='flex bg-slate-100'>
          <Routes>
            <Route path='/dashboard' element={<Monthlist />} ></Route>
            <Route path='/month' element={<Mainbar />}></Route>
            <Route path='/signin' element={<SignIn />}></Route>

          </Routes>
        </div>
      </Router>

    </div>


  )
}

export default App
