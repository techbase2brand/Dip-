import React from 'react';
import './ProductReview.css'

// Images
import product_large_image_1 from '../../../../Images/Dip-product_large_image.svg'
import product_large_image_2 from '../../../../Images/product_large_image.svg'


const ProductReview = () => {
  return (
    <section className="product_review_section">
        <div className="product_large_image">
            <img className='product_large_image_1 product_large_image_3' src={product_large_image_1} alt="" />
            <img className='product_large_image_2 product_large_image_3' src={product_large_image_2} alt="" />
        </div>
    </section>

  )
}

export default ProductReview