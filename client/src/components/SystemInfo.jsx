import axios from 'axios'
import React, { useState } from 'react'
import NetworkSpeed from './NetworkSpeed'

const SystemInfo = ({ data }) => {
  const [netSpeed, getNetSpeed] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const getNetworkSpeed = () => {
    setIsLoading(true)
    const url = 'http://localhost:5000/get-speed'
    axios
      .get(url)
      .then((res) => {
        getNetSpeed(res.data.result)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }

  return (
    <div className="h-screen flex justify-center">
      <div className="bg-slate-800 shadow-xl text-white md:w-2/5 mx-2 h-fit my-12 border-4 border-rose-400 rounded">
        <h2 className="font-bold text-red-400 text-2xl text-center underline">
          SYSTEM INFORMATION
        </h2>
        <div className="md:pl-8 px-2 md:pr-2 py-8 font-semibold md:text-xl">
          <p>
            Username : <span className="pl-2 font-normal">{data.username}</span>
          </p>
          <p>
            Hostname : <span className="pl-2 font-normal">{data.hostname}</span>
          </p>
          <p>
            Platform : <span className="pl-2 font-normal">{data.platform}</span>
          </p>
          <p>
            Architecture :{' '}
            <span className="pl-2 font-normal">{data.architecture}</span>
          </p>
          <p>
            CPU : <span className="pl-2 font-normal">{data.cpu}</span>
          </p>
          <p>
            Total Memory :{' '}
            <span className="pl-2 font-normal">{data.totalMemory}</span>
          </p>
          <p>
            Available memory :{' '}
            <span className="pl-2 font-normal">{data.freeMemory}</span>
          </p>
          <p>
            OS version :{' '}
            <span className="pl-2 font-normal">{data.osVersion}</span>
          </p>
          <p>
            Release : <span className="pl-2 font-normal">{data.release}</span>
          </p>
          <p>
            Type : <span className="pl-2 font-normal">{data.type}</span>
          </p>

          {isLoading ? (
            <div className='mt-4' role="status">
              <svg
                aria-hidden="true"
                className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-rose-400"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>   
            </div>
          ) : (
            <>
              {netSpeed === '' ? (
                <button
                  onClick={getNetworkSpeed}
                  className="bg-red-400 border mt-4 p-3 text-xl rounded shadow text-white"
                >
                  Check Internet speed
                </button>
              ) : (
                ''
              )}
              {netSpeed && netSpeed ? <NetworkSpeed netSpeed={netSpeed} /> : ''}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default SystemInfo
