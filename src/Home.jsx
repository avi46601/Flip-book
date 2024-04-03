import React from 'react'
import Sidebar from './Components/Sidebar'
import Mainbar from './Components/Mainbar'
import Monthlist from './Components/monthlist'
const Home = () => {
    
    return (
        <div className='flex  bg-slate-100'>
            <Sidebar/>
            <Mainbar />
            {/* <Monthlist /> */}
        </div>
    )
}

export default Home