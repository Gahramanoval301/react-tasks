import React, { useContext } from 'react'
import PageContainer from '../../PageContainer'
import { ProductsContext } from '../../../../context_api/ProductsContext'


const Smartphones = () => {
    return(
        <>
        {
            products
        }
        </>
    )

}
const Products = () => {
    const [products, setProducts] = useContext(ProductsContext)

    
    return (
        <PageContainer>
            <div className='caterogies'>
                <h3>Our products</h3>
                <ul className='caterogyList'>
                    <li>smarthpones</li>
                    <li>laptops</li>
                    <li>fragrances</li>
                    <li>skincare</li>
                    <li>groceries</li>
                    <li>home-decoration</li>
                </ul>
                <ul>

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