import React from 'react';
import {Link} from "react-router-dom";

const Product = ({item}) => {
  return (
    <div>
      <div className='product-card'>
        <Link to={`/${item.id}`} >
          <img 
            src={item.image}
            width={250}
            height={250}
            className='product-image'
          />
          <p className='product-name'>{item.title}</p>
          <p className='product-price'>{item.price}</p>
        </Link>
      </div>
    </div>
  )
}

export default Product