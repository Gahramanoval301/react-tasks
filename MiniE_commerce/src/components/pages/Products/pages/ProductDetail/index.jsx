import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router'
import PageContainer from '../../../../PageContainer'
import reducerProducts from '../../reducer'
import axios from 'axios'
import './index.css'
const url = 'https://dummyjson.com/products'


const ProductDetail = () => {
    const [products, dispatch] = useReducer(reducerProducts, [])
    const { category } = useParams()

    useEffect(() => {
        axios.get(url).then(({ data: { products } }) => {
            const data = products.filter((pr) => pr.category === category)
            dispatch({ type: 'get_category_items', payload: data })
        })
    }, [category])

    return (
        <PageContainer>
            {products.map(({ id, rating, title, description, price, thumbnail }) => {
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

export default ProductDetail