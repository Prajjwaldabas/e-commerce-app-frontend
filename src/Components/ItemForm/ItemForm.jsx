import React from 'react'
import { addProduct } from '../../redux/allProductsReducer';
import { useState} from "react"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
export default function ItemFrom({ onClosePopup }) {
 
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
//  const products = useSelector(state => state.products);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [secimageUrl, setsecimageUrl] = useState('');
    const [category, setCategory] = useState('');
    const [subCategory,setSubCategory]=useState('')

    const handleSubmit= async(event)=> {
      setLoading(true);
   console.log("handlesubmit called")
   event.preventDefault()
        fetch('https://e-commerce-server-hhpk.onrender.com/items/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            price: price,
            description: description,
            imageUrl: imageUrl,
            secimageUrl:secimageUrl,
            category:category,
            subCategory:subCategory
          })
        })
          .then(response => response.json())
          .then(result => {
            console.log(result);
            onClosePopup(); // call callback function to close the popup
            dispatch(addProduct(result)); // Dispatch the addProduct action with the new product
            setLoading(false)
            console.log("item created")
            console.log("handle submit clicked")
          })
          .catch(error => console.error(error));
      };

      const cancelEdit=()=>{
        console.log("edit button clicked")
        onClosePopup(); // call callback function to close the popup
      }
    
    if(loading){
      return <Loader/>;
    }
  return (
   

     
        <div >
         <form className="popup-form" onSubmit={handleSubmit}>
         <h2>Add Product</h2>
        <label htmlFor="Name">Product Name:
          <input type="text"  value={name} name='name'   onChange={event => setName(event.target.value)}/>
        </label>
        <label htmlFor="Price">      Price:
          <input type="number" value={price} name='price' onChange={event => setPrice(event.target.value)} />
        </label>
        <label htmlFor="Description">  Description:
          <input type="text" value={description} name='description' onChange={event => setDescription(event.target.value)}/>
        </label>
        <label htmlFor="Image">    ImageUrl:
          <input type="text" value={imageUrl} name='imageUrl' onChange={event => setImageUrl(event.target.value)}/>
        </label>
        <label htmlFor="SecImageUrl">    SecImageUrl:
          <input type="text" value={secimageUrl} name='secimageUrl' onChange={event => setsecimageUrl(event.target.value)}/>
        </label>
        <label htmlFor="Category">    Category:
          <input type="text" value={category} name='category' onChange={event => setCategory(event.target.value)}/>
        </label>
        <label htmlFor="SubCategory">    SubCategory:
          <input type="text" value={subCategory} name='subCategory' onChange={event => setSubCategory(event.target.value)}/>
        </label>
        <button type='submit'>Add Product </button>
        <button className='cancel_btn' onClick={cancelEdit}>X</button>
         </form>

        </div>
    
        
   
  )
}
