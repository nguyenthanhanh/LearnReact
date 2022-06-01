import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
ProductItem.propTypes = {

};

function ProductItem({ productItem }) {
    return (
        <div className='product'>
            <div className='product_image'>
                <img src={productItem.linkImage} alt={productItem.name} />
            </div>
            <p className='product_name'>{productItem.name}</p>
        </div>
    );
}

export default ProductItem;