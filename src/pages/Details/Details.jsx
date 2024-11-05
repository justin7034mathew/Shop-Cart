import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Details.css'

const Details = () => {
    
    const {id} = useParams()

    const [product, setProduct] = useState({})

    useEffect(() =>{
        fetch(`https://fakestoreapi.com/products/${id}`).then((res) => {
            res.json().then((data) => {
                setProduct(data)
            })
        })
    },[])

  return (
    <div className='details'>
        
        <h1>{product.title}</h1>
        <img src={product.image} alt="" />
        {/* <h2>{product.rating ? product.rating.rate : ''}</h2> */}
        {/* <h2>{product.rating && product.rating.rate}</h2> */}
        <h2>{product.rating?.rate}</h2>
        <p>{product.description}</p>
    </div>
  )
}

export default Details