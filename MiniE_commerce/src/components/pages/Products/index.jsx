import React, { useContext, useEffect, useReducer } from 'react'
import PageContainer from '../../PageContainer'
import { ProductsContext } from '../../../../context_api/ProductsContext'
import { NavigationProducts } from '../../Navigation'
import reducerProducts, { acitions } from './reducer'
import axios from 'axios'
const url = 'https://dummyjson.com/products'


const Products = () => {
  const [state, dispatch] = useReducer(reducerProducts, [])

  useEffect(() => {
    axios.get(url).then(({ data }) => dispatch({
      type: acitions.get_products,
      payload: data.products
    }))
  }, [])
  return (
    <PageContainer>
      <div className='caterogies'>
      </div>
      {state.map(({ id, rating, title, description, price, thumbnail }) => {
        return (
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
        )
      })}
    </PageContainer>
  )
}

export default Products