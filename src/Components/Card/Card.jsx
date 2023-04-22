import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from 'react';
import {deleteProduct} from '../../redux/allProductsReducer'
import { updateProduct } from '../../redux/allProductsReducer';
import { useDispatch } from "react-redux";
// import setProductsLoading from '../../redux/allProductsReducer'
import {updateProductAsync} from '../../redux/allProductsReducer'
import Loader from '../Loader/Loader'




export default function Card({item}) {


  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

 




  const deleteItem = async (id,event) => {
    setLoading(true)
  //  event.preventDefault()
    try {
      const response = await fetch(`https://e-commerce-server-hhpk.onrender.com/items/delete/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);

      dispatch(deleteProduct(id));
      setLoading(false)
      
      // window.location.reload();
      // code to update state or UI after deleting the item
    } catch (error) {
      console.error(error);
    }
  };


  const handleEdit = async (id, event) => {
    // event.preventDefault();
    
    setSelectedItem(null);
    
    setLoading(true)
    try {
      const resultAction = await dispatch(updateProductAsync({
        id,
        product: selectedItem
      }));
  
      // you can access the updated product from the action result
      console.log("updatedItem", resultAction.payload);
      dispatch(updateProduct(resultAction.payload))

      setLoading(false)
      // setProductsLoading(false)
    } catch (error) {
      console.error("Failed to update product", error);
    }
  };
  

  const cancelEdit=()=>{
    setSelectedItem(null);
  }

  
  if (loading) {
   return <Loader />
 }
  return (
    <div className='CardWrap'>
     
{selectedItem && (
  
  <form onSubmit={(e) => {  handleEdit(selectedItem._id, e); }}>
    <h2>Edit Product</h2>
     <label htmlFor="Name">Product Name:
    <input type="text" value={selectedItem.name} onChange={(e) => setSelectedItem({ ...selectedItem, name: e.target.value })} />
    </label>

    <label htmlFor="Price">Price:
    <input type="text" value={selectedItem.price} onChange={(e) => setSelectedItem({ ...selectedItem, price: e.target.value })} />
    </label>

    <label htmlFor="Description">Description:
    <input type="text" value={selectedItem.description} onChange={(e) => setSelectedItem({ ...selectedItem, description: e.target.value })} />
    </label>

    <label htmlFor="imageUrl">Image URL:
    <input type="text" value={selectedItem.imageUrl} onChange={(e) => setSelectedItem({ ...selectedItem, imageUrl: e.target.value })} />
    </label>
    <label htmlFor="secimageUrl">SecImage URL:
    <input type="text" value={selectedItem.secimageUrl} onChange={(e) => setSelectedItem({ ...selectedItem, secimageUrl: e.target.value })} />
    </label>

    <label htmlFor="Category">Category:
    <input type="text" value={selectedItem.category} onChange={(e) => setSelectedItem({ ...selectedItem, category: e.target.value })} />
    </label>
    <label htmlFor="SubCategory">SubCategory:
    <input type="text" value={selectedItem.subCategory} onChange={(e) => setSelectedItem({ ...selectedItem, subCategory: e.target.value })} />
    </label>
  
    <button type="submit" >Save</button>
    <button className='cancel_btn' onClick={cancelEdit}>X</button>
  </form>
)}

<div className="additems">

   <button className="addcart"  >
<AddShoppingCartIcon/>
       </button>

       <button className="edititem" onClick={(event) => setSelectedItem(item,event)}
> 
<EditIcon/>
       </button>

     <button className="deleteitem" onClick={(event) => deleteItem(item._id,event)}> 
<DeleteIcon/>
       </button> 
       

     </div>

<Link className="link" to={`/product/${item._id}`} >
<div className='card'>
    <div className="image">
    { <span className='newSeason'>New Season</span>}
        <img src={item.imageUrl} alt="" className="mainImg" />
        { <img src={item.secimageUrl} alt="" className="secondImg" /> }
    </div>

    <h3>₹ {item.price}</h3>
    {/* <div className='desc'>
    <h4>{item.description.split(' ').slice(0,4).join(' ')}</h4>
    </div> */}
    <div className="prices">
    <h2>{item.name.toUpperCase()}</h2>

       
    </div>
</div>
    </Link>
    </div>
    
  )
}