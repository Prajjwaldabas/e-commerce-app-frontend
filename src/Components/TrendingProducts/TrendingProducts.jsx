import React, { useState, useEffect } from 'react';
import getAllProducts  from '../../api';
import Card from "../Card/Card"
import Loader from '../Loader/Loader';
import './TrendingProducts.scss'


export default function TrendingProducts({ type }) {

  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const products = await getAllProducts();
      // console.log(products)
      setProducts(products);
      setLoading(false);
    }
    fetchProducts();
  },[]);

  if (loading) {
    return <Loader />;
  }

  return (
    
    <div className="featuredProducts">
    
      <div className="top">
        <div className='featureHeading'>
        <h1>Trending Products</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          repellendus optio, ipsa, corporis eligendi ratione dolore ducimus
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          repellendus optio, ipsa, corporis eligendi ratione dolore ducimus
          
        </p>
      </div>
      <div className="bottom">

        

{products.slice(60,64).map(item=>(
 
  <Card item={item} key={item._id}/>
 
))}
      </div>
    </div>
  );
}
