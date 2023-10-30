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
        products.slice(20, 25).map(({ id, rating, title, description, price, thumbnail }) => {
          return (
            <>
              <div key={id} className='productCard'>
                <img className='productPhoto' src={thumbnail} alt="thumbnail" />
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='productDetails'>
                  <p>
                    <img src="../../../../../../public/money.png" alt="money" />
                    <span>{price}</span>
                  </p>
                  <p>
                    <img src="../../../../../../public/star.png" alt="star" />
                    <span>{rating}</span>
                  </p>
                </div>
              </div>
            </>
          )

        })
      }

    </PageContainer>
  )
}

export default Groceries