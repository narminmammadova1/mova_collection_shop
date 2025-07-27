
  import React from 'react'
 import Header from '../Components/Header/Header'
import Card from '../Components/Card/Card'
 import Footer from '../Components/Footer/Footer'




 
async function getProducts() {
  const res = await fetch('http://localhost:3000/data/products.json') 
  if (!res.ok) throw new Error('data is not defined')
  return res.json()
}

export default async function ProductsPage() {
  const products = await getProducts()

  
  return (
    <div>
      <section style={{ margin: '0px' }}>
        <Header />
      </section>

      <div className='flex justify-center'>
        <h1>Products</h1>
      </div>

      <section className='px-32 gap-16 grid grid-cols-3 justify-items-center '>
        {products.map((product) => (
          <Card  prodId={product.id} key={product.id} product={product} />
        ))}
      </section>

      <section className='px-32 flex flex-col'>
        <h2 className='text-center my-6'>Trending</h2>
        <div className='gap-16 grid grid-cols-3 justify-items-center '>
          {products.slice(0, 3).map((product) => (
            <Card key={product.id} product={product} prodId={product.id} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
