import React from 'react'
import { useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'
import forbiddenAnimation from '../../../animations/loading.json'
import loadingAnimation from '../../../animations/loading.json'

export default function ForbiddenPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-gray-50 to-gray-100 p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center flex flex-col items-center">
        <div className="w-48 md:w-56 relative">
          <Lottie 
            animationData={loadingAnimation} 
            loop={false} 
            autoplay={true} 
            style={{ height: 200, width: 200 }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">403 — Forbidden</h1>
            <p className="text-gray-600">Sorry, you don’t have permission to access this page.</p>
          </div>
        </div>

        <div className="space-y-3 sm:flex sm:space-y-0 sm:justify-center sm:gap-3 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex hover:bg-green-500 items-center justify-center px-5 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 w-full sm:w-auto"
          >
            Go Back
          </button>

          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center hover:text-black justify-center px-5 py-2 rounded-lg bg-red-600 text-white text-sm font-medium shadow hover:shadow-md w-full sm:w-auto"
          >
            Go Home
          </button>
        </div>

        <p className="mt-6 text-xs  text-gray-400 text-center">If you believe this is a mistake, please contact the administrator.</p>
      </div>
    </div>
  )
}