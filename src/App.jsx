import { useState } from 'react'
import { ProductListings } from './pages'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full'>
      <Navbar />
      <ProductListings />
    </div>
  )
}

export default App
