import React from 'react'
import "./List.scss";
import Card from "../Card/Card"
import Loader from '../Loader/Loader';
import { useState } from 'react';
import { useEffect } from 'react';

import { getAllProducts } from '../../api';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../redux/allProductsReducer";



export default function List({sort,selectedSubcategories,selectedPriceRange}) {
  // console.log(selectedSubcategories)
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const { category } = useParams();

  // console.log(category); 
  // console.log(products); 

  // const allProducts = useSelector((state) => state.allProducts);

  useEffect(() => {
   
    dispatch(fetchProducts());
    setLoading(false);
  }, [dispatch]);

const filteredProducts = products.filter((product) => product.category === category);
  // filter the products based on the selected category
  // console.log(filteredProducts); 
  const filterAndSortProducts = () => {
    let SubCategoryfilteredProducts = filteredProducts.filter((product) => {
     
      if (selectedSubcategories.length === 0) {
        return true; // Show all products if no subcategory is selected
      } else {
        return selectedSubcategories.includes(product.subCategory);
      }
    }) .filter((product) => product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max);
    
    if (sort === "asc") {
      SubCategoryfilteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      SubCategoryfilteredProducts.sort((a, b) => b.price - a.price);
    }
    

    return SubCategoryfilteredProducts;
  };

  const filteredAndSortedProducts = filterAndSortProducts();


  
  
 
if (loading) {
  return <Loader />;
}
  return (
    <div className='list'>{filteredAndSortedProducts?.map(item=>{
       return  <Card item={item}   key={item._id}/>
    })}</div>
  )
}
