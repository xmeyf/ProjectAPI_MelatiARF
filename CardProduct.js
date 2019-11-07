import React from 'react'

function CardProduct({product}){
    return(
        <tr>
            <th scope="row">{product.id}</th>
            <th scope="row">{product.nama}</th>
            <th scope="row">{product.harga}</th>
        </tr>
    )
}

export default CardProduct
