import { useState } from 'react'
import { ProductListings } from './pages'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className=''>
      <Navbar />
      <ProductListings />
    </div>
  )
}

export default App
