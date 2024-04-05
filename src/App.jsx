import './App.css'
import React from 'react'

import Mainbar from './Components/Mainbar'
import Monthlist from './Components/monthlist'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import MagazinePage from './Components/Home/MagazinePage'

function App() {

  return (
    <div>
      <Router>
        <Routes>

          <Route path='/home' element={<Home />} />
          <Route path='/magazines' element={<MagazinePage />} />
        </Routes>
        <div className='flex bg-slate-100'>

          <Routes>
            <Route path='/' element={<Monthlist />} ></Route>
            <Route path='/month' element={<Mainbar />}></Route>

          </Routes>
        </div>
      </Router>

    </div>


  )
}

export default App
