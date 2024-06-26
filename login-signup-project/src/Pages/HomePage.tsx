import React from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Services from '../Components/Services'
import Products from '../Components/Products'
import SalePart from '../Components/SalePart'

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Services/>
      <Products/>
      <SalePart/>
    </div>
  )
}
