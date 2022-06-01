import React from 'react';
import PropTypes from 'prop-types';
import ProductList from './components/ProductList';

FeatureProduct.propTypes = {

};

function FeatureProduct(props) {
    const productList = [
        {
            id: 1,
            name: 'Jack',
            linkImage: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/jack.jpg',
        },
        {
            id: 2,
            name: 'IU',
            linkImage: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/iu.jpg',
        },
        {
            id: 3,
            name: 'Ji Chang Wook',
            linkImage: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/ji-chang-wook.jpg',
        },
        {
            id: 4,
            name: 'Lisa',
            linkImage: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/lisa.jpg',
        },
        {
            id: 5,
            name: 'Jennie',
            linkImage: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/jennie.jpg',
        },
        {
            id: 6,
            name: 'Jisso',
            linkImage: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/jisoo.jpg',
        },
    ]
    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <ProductList productList={productList} />

        </div>
    );
}

export default FeatureProduct;