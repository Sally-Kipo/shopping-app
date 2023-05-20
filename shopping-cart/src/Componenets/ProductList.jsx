import React from 'react';
import Bag from '../Images/bag.png';
import HM from '../Images/HM.png';
import Ketasi from '../Images/Ketasi.png';
import ProductCard  from './ProductCard';

function ProductList() {
  return (
    <div className='container'>
    
      <ProductCard
        image={Bag}
        title='Product 1'
        size='M'
        cost='$10'
      />
    
    </div>
  );
}

export default ProductList;
