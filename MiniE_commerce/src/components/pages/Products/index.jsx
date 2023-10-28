import React, { useContext } from 'react'
import PageContainer from '../../PageContainer'
import { ProductsContext } from '../../../../context_api/ProductsContext'
import { NavigationProducts } from '../../Navigation'



const Products = () => {
    const [products, setProducts] = useContext(ProductsContext)

    
    return (
        <PageContainer>
            <div className='caterogies'>
                <h3>Our products</h3>
                
                <ul>
                <NavigationProducts/>
                </ul>
            </div>
            {
                products.slice(0, 5).map(({ id, title, description, price, thumbnail, caterogy }) => {
                    return (
                        <>
                            <div key={id} className='product'>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <em>{price}</em>
                                <img src={thumbnail} alt={`${title} photo`} />
                            </div>
                        </>
                    )
                })
            }
        </PageContainer>
    )
}

export default Products