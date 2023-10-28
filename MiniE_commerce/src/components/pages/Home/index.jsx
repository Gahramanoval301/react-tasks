import React, { useContext } from 'react'
import PageContainer from '../../PageContainer'
import { ProductsContext } from '../../../../context_api/ProductsContext'

const Home = () => {
  const [products , setProducts] = useContext(ProductsContext)
  // console.log(products);
  return (
    <PageContainer>
      <div>Home</div>
     
    </PageContainer>
  )
}

export default Home