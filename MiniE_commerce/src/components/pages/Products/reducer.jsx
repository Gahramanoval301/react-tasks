import React from 'react'
import axios from 'axios'

export const acitions = {
    'get_products': 0
}

const reducerProducts = (state = [], action) => {
    switch (action.type) {
        case acitions.get_products:
            return action.payload
        case 'get_category_items':
            return action.payload
        default:
            return state;
    }
}
// export async function getProducts() {
//     const { data } = await axios.get(url)
//     return data
// }
export default reducerProducts