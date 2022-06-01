import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem';
import './product.scss';


ProductList.propTypes = {
    productList: PropTypes.array.isRequired
};

ProductList.defaultProps = {
    productList: []
};
function ProductList({ productList }) {
    return (
        <ul className='album-list'>
            {productList.map(productItem => (
                <li key={productItem.id}>
                    <ProductItem productItem={productItem} />
                </li>
            ))}
        </ul>
    );
}

export default ProductList;