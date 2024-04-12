import React, { useState } from "react";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import { Link } from "react-router-dom";

function Home() {
  // Step 1: Create state for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Step 2: Define function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Navbar />
      <div className="home pt-12">
        <div class="flex flex-col items-center justify-center h-auto bg-gray-100 p-4 bg-white py-16">
          {/* <!-- Container for the title and the upload area --> */}
          <div class="w-full max-w-4xl p-8 bg-white">
            <h1 class="text-4xl font-bold text-center mb-6">
              Convert PDFs into flipbooks and more.
            </h1>
            {/* <!-- Upload area --> */}
            <div class="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15%"
                height="15%"
                fill="currentColor"
                class="bi bi-filetype-pdf"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"
                />
              </svg>
              <p class="mb-2">Drag & Drop</p>
              <span class="text-gray-500 mb-6">OR</span>
              <button
                class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                onClick={toggleModal}
              >
                Upload file
              </button>

              {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                  <div className="bg-white min-h-96 min-w-96 p-6 rounded-lg relative">
                    {/* Your modal content */}
                    <h2 className="text-4xl font-bold text-center mb-4">
                      Your file is being converted...
                    </h2>
                    <div className="relative">
                      <svg
                        class="animate-spin relative -ml-1 mb-12 mr-3 h-48 py-8 w-full text-gray-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M12 2C6.477 2 2 6.477 2 12c0 1.656.421 3.21 1.156 4.547l1.5-1.5A7.963 7.963 0 004 12c0-4.418 3.582-8 8-8s8 3.582 8 8a7.963 7.963 0 00-1.656 5.047l1.5 1.5A9.969 9.969 0 0022 12c0-5.523-4.477-10-10-10z"
                        ></path>
                      </svg>

                      <svg
                        class="h-10 w-20 animate-bounce absolute top-20 left-[204px]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M8 2h8a2 2 0 012 2v1h-2.5a.5.5 0 00-.5.5V8H20v11a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z"
                          fill="#ff6464"
                        />
                        <path
                          d="M8 11h3m-3 2h3m-3 2h3m4-4v4a.5.5 0 01-.5.5H13v-5h2.5a.5.5 0 01.5.5z"
                          fill="#ffdd57"
                        />
                        <text
                          x="9"
                          y="7.5"
                          fill="#4a4a4a"
                          font-size="2"
                          font-weight="bold"
                          font-family="sans-serif"
                        >
                          PDF
                        </text>
                      </svg>
                    </div>
                    <div class="w-full bg-gray-200 rounded-lg ">
                      <div
                        className="bg-blue-500 text-xs leading-none p-0.5 text-center text-white rounded-lg"
                        style={{ width: "40%" }}
                      >
                        40%
                      </div>
                    </div>

                    <button
                      className=" text-xl font-bold py-2 px-4 rounded  absolute top-0 right-0"
                      onClick={toggleModal}
                    >
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
