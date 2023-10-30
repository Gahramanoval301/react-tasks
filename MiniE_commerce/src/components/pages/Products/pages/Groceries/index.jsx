import React, { useContext } from 'react'
import PageContainer from '../../../../PageContainer'
import { ProductsContext } from '../../../../../../context_api/ProductsContext'
import './index.css'
import { NavigationProducts } from '../../../../Navigation'

const Groceries = () => {
  const [products, setProducts] = useContext(ProductsContext)
  return (
    <PageContainer>
      {
        products.slice(20, 25).map(({ id, brand, rating, title, description, price, thumbnail, caterogy }) => {
          return (
            <>
              <div key={id} className='productCard'>
                <img src={thumbnail} alt="thumbnail" />
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{price}, {rating}</p>
              </div>
            </>
          )

        })
      }

    </PageContainer>
  )
}

export default Groceries