import React from 'react';
import Bag from '../Images/bag.png';
import HM from '../Images/HM.png';
import Ketasi from '../Images/Ketasi.png';
import ProductCard  from './ProductCard';

function ProductList() {
  return (
    <div className='container'>
    <div className='product-list'>
      <ProductCard
        image={Bag}
        title='Product 1'
        size='M'
        cost='$10'
      />
      <ProductCard
        image={HM}
        title='Product 2'
        size='L'
        cost='$15'
      />
      <ProductCard
        image={Ketasi}
        title='Product 3'
        size='S'
        cost='$8'
      />
    </div>
    </div>
  );
}

export default ProductList;
