import React from 'react'
import Product1 from './Assets/Product-1.webp'
import Product2 from './Assets/Product-2.webp'
import Product3 from './Assets/Product-3.webp'
import Product4 from './Assets/Product-4.png'
import Product5 from './Assets/Product-5.webp'
import Product6 from './Assets/Product-6.webp'
import Product7 from './Assets/Product-7.webp'
import Product8 from './Assets/Product-8.webp'
import Product9 from './Assets/Product-9.webp'
import Product10 from './Assets/Product-10.webp'
import Product11 from './Assets/Product-11.webp'
import Product12 from './Assets/Product-12.webp'



export default function Products() {
    const phones = [
        {
            image: './Assets/Product-1.webp',
            brand: 'Apple',
            model: 'Iphone 15 Pro Max',
            price: 525000
        },
        {
            image: './Assets/Product-2.webp',
            brand: 'Sony',
            model: 'Playstation 4 Slim',
            price: 61500
        },
        {
            image: './Assets/Product-3.webp',
            brand: 'Samsung',
            model: '43 inch LED Smart TV',
            price: 136900
        },
        {
            image: './Assets/Product-4.png',
            brand: 'Zero Lifestyle',
            model: 'Ignite Smart Watch',
            price: 7000
        },
        {
            image: './Assets/Product-5.webp',
            brand: 'Lenovo',
            model: 'Livepods XT88',
            price: 3000
        },
        {
            image: './Assets/Product-6.webp',
            brand: 'Samsung Galaxy',
            model: 'A15',
            price: 49500
        },
        {
            image: './Assets/Product-7.webp',
            brand: 'Sony',
            model: 'PS4 Controller',
            price: 3700
        },
        {
            image: './Assets/Product-8.webp',
            brand: 'HP',
            model: 'Chromebook G8',
            price: 10700
        },
        {
            image: './Assets/Product-9.webp',
            brand: 'Asus',
            model: '24" LED Monitor',
            price: 17000
        },
        {
            image: './Assets/Product-10.webp',
            brand: 'Lenovo',
            model: 'Wireless Headphone',
            price: 4400
        },
        {
            image: './Assets/Product-9.webp',
            brand: 'HP',
            model: 'RGB Keyboard',
            price: 4300
        },
        {
            image: './Assets/Product-10.webp',
            brand: 'Samsung',
            model: 'Galaxy Buds 2',
            price: 2900 
        },
    ]



  return (
    <>
         <h1 className='heading'>PRODUCTS</h1>
     <div id='products' className='mt-5 pt-5 container d-flex flex-wrap justify-content-center gap-5'>
        {phones.map((x:any , i:number)=>{
            return <>
            <div className='border shadow box'>
                    <img width={'100%'} src={x.image} alt="Product Image" />
                <p><span className="fw-bolder">Brand:</span> {x.brand}</p>
                      <p><span className="fw-bolder">Model:</span> {x.model}</p>
                      <p><span className="fw-bolder">Price:</span> Rs. {x.price} </p>
            </div>
            </>
        })}
        </div> 
    </>
  )
}
