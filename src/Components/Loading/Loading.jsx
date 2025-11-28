import React from 'react'
import Lottie from 'lottie-react'
import loadingAnimation from '../../../animations/loading.json'

export default function Loading({ message = 'You are forbidden to access this page' }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-100">
      <div className="w-48 md:w-56">
        <Lottie 
          animationData={loadingAnimation} 
          loop={false} 
          autoplay={true} 
          style={{ height: 200, width: 200 }}
        />
      </div>
      <h1 className="mt-4 text-xl font-semibold text-red-600 text-center">{message}</h1>
    </div>
  )
}