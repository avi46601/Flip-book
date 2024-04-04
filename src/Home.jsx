import React from 'react'
import Sidebar from './Components/Sidebar'
import Mainbar from './Components/Mainbar'
import Monthlist from './Components/monthlist'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
const Home = () => {

    return (
        <BrowserRouter >
         <div className='flex bg-slate-100'>
            <Sidebar />
            <Routes>
                <Route path='/' element={<Monthlist />} ></Route>
                <Route path='/month' element={<Mainbar />}></Route>
            </Routes>
        </div>
        </BrowserRouter>
       
    )
}

export default Home