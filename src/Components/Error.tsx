import React from 'react'
import Navbar from './Navbar'

export const Error:React.FC = () => {
  return (
    <div>
        <Navbar />
        <h1 className='error-text'>Error 404</h1>
    </div>
  )
}
