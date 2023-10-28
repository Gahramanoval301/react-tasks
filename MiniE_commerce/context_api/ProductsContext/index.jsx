import React, { createContext, useState, useEffect } from 'react'
const url = 'https://dummyjson.com/products'
export const ProductsContext = createContext([])

const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(url).then(res => res.json()).then(({products}) => setProducts(products))
    }, [])
    return (
        <ProductsContext.Provider value={[products, setProducts]}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider