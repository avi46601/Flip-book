import React from 'react'
import Navbar from './Common/Navbar'
import Footer from './Common/Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Navbar />
      <div className='home'>
        <div class="flex flex-col items-center justify-center h-auto bg-gray-100 p-4 bg-white py-16">
          {/* <!-- Container for the title and the upload area --> */}
          <div class="w-full max-w-4xl p-8 bg-white">
            <h1 class="text-4xl font-bold text-center mb-6">Convert PDFs into flipbooks and more.</h1>
            {/* <!-- Upload area --> */}
            <div class="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="15%" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16" >
                <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z" />
              </svg>
              <p class="mb-2">Drag & Drop</p>
              <span class="text-gray-500 mb-6">OR</span>
              <Link to="/magazines">
                <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Upload file</button>
              </Link>
            </div>
           
            
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Home