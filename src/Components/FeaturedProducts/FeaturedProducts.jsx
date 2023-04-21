import React, { useState, useEffect } from 'react';
import getAllProducts  from '../../api';
import "./FeaturedProducts.scss";
import Card from "../Card/Card"
import Loader from '../Loader/Loader';


export default function FeaturedProducts({ type }) {

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
        <h1>{type} Products</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          repellendus optio, ipsa, corporis eligendi ratione dolore ducimus
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          repellendus optio, ipsa, corporis eligendi ratione dolore ducimus
          
        </p>
      </div>
      <div className="bottom">

        

{products.slice(4,8).map(item=>(
 
  <Card item={item} key={item._id}/>
 
))}
      </div>
    </div>
  );
}
