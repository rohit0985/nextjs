import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
       <nav>
     <ul className='menubar'>
      <li><Link href="/home">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
      <li><Link href="/block">Blog</Link></li>
      <li><Link href="/product">Product</Link></li>
     </ul>
     </nav>
    </div>
  )
}

export default Navbar
