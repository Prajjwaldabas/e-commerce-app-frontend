import React from "react";
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useEffect } from "react";


import Loader from "../../Components/Loader/Loader";

// import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

import { useState } from "react";
export default function Product() {

  const [Loading,setLoading] = useState(true)
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setquantity] = useState(1);

  const dispatch = useDispatch();
  // const { data, loading, error } = useFetch(`/products/${id}?populate=*`);


  // const [selsectedImg, setSelectedImg] = useState(0);
 

 
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const result= fetch(`https://e-commerce-server-hhpk.onrender.com/items/product/${id}`)

      
  .then(response => response.json())
  .then(data => {
    // handle the response data
    setProduct(data);
    console.log(data);
    setLoading(false)
    
  })
  .catch(error => {
    console.error(error);
  });
    };

    fetchProduct();
  }, [id])


  if (Loading) {
    return <Loader />;
  }

  // const images = [
  //   "https://images.pexels.com/photos/9558240/pexels-photo-9558240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   "https://images.pexels.com/photos/9558601/pexels-photo-9558601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // ];
  return (
    <div className="product">
      <div className="left">
      
        <div className="images">
          <img src={product.imageUrl} alt="" onMouseOver={(e) => setSelectedImg(0)} />
          <img src={product.secimageUrl} alt="" onMouseOver={(e) => setSelectedImg(1)} />
        </div>
       {console.log(product.secimageUrl)}

        <div className="mainImg">
        <img src={selectedImg === 0 ? product.imageUrl : product.secimageUrl} alt="" />
         
        </div>
      </div>

      <div className="right">

        <h1>{product.name}</h1>
        <span className="price">₹ {product.price}</span>
        <p>
         {product.description}
        </p>

        <div className="quantity">
            <button onClick={()=>setquantity(prev=>prev===1?1:prev-1)}>-</button>
           {quantity}
            <button onClick={()=>setquantity(prev=>prev+1)}>+</button>

        </div>
        <button className="add"   onClick={() =>
                dispatch(
                  addToCart({
                    key:product.key,
                    id: product._id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    img: product.imageUrl,
                    quantity,
                  })
                )
              }>
        <AddShoppingCartIcon/>ADD TO CART
        </button>
        <div className="links">
            <div className="item">
<FavoriteBorderIcon/> ADD TO WISH LIST
            </div>
            <div className="item">
<BalanceIcon/>  ADD TO COMPARE
            </div>
        </div>

<div className="info">
    <span>Vendor:Polo</span>
    <span>Product Type:{product.subCategory}</span>
    <span>Tag: T-Shirt,{product.category},Top</span>


</div>

 <hr/>
        <div className="info">
            <span>DESCRIPTION</span>
            <hr/>
            <span>ADDITIONAL INFORMATION</span>
            <hr/>
            <span>FAQ</span>
        </div>


      </div>
    </div>
  )
}
