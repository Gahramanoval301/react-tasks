import React, { useContext } from 'react'
import { ProductsContext } from '../../../../../../context_api/ProductsContext'
import PageContainer from '../../../../PageContainer'

const Skincare = () => {
    const [products, setProducts] = useContext(ProductsContext)
    return (
        <PageContainer>
            {products.slice(15, 20).map(({ id, rating, title, description, price, thumbnail }) => {
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

export default Skincare