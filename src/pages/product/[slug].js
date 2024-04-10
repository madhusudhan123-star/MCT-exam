import React from 'react'
import {AiOutlineStar, AiOutlinePlus, AiFillStar} from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import img from './img.jpg';
const ProductDetails = () => {
  return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img src= {img}  alt= 'image' />
                </div>
            </div>
            <div className='product-detail-desc'>
                <h1>Name</h1>
                <div className='reviews'>
                    <div>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                    <p>(20)</p>
                </div>
                <h4>Details:</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                <p className='price'>Price: $100</p>
                <div className='quantity'>
                    <h3>Quantity:</h3>
                    <p className='quantity-desc'>
                        <span className='minus'>
                            <AiOutlineMinus />
                        </span>
                        <span className='num'>0</span>
                        <span className='plus'>
                            <AiOutlinePlus />
                        </span>
                    </p>
                </div>
                <div className="buttons">
                    <button type="button" className="add-to-cart" onClick="">Add to Cart</button>
                    <button type="button" className="buy-now" onClick="">Buy Now</button>
                </div>
            </div>
        </div>
        <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {/* {products.map((item) => (
                <Product key={item._id} product={item} />
              ))} */}
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProductDetails