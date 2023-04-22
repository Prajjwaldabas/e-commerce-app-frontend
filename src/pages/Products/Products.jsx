import React from 'react'
import "./Products.scss"
import { useState} from "react"
import { useParams } from "react-router-dom"
import List from "../../Components/List/List"
import ItemForm from '../../Components/ItemForm/ItemForm'
import { useEffect } from 'react'



export default function Products() {
  
  const { category } = useParams();
if (typeof category !== 'undefined') {
  console.log(category);
}


  const data = [
    "https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/669669/21_11_23-teens-with-shopping-bags-walking-on-a-street-_gettyimages-1092636334.jpg&w=2000&op=resize",
    "https://www.kindpng.com/picc/m/331-3313607_happy-kids-children-activity-centers-my-maitland-children.png",
    "https://wallpapers.com/images/featured-full/mens-fashion-pictures-adasabzf66m607uj.jpg",
    'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ]

     
      
      

   useEffect(()=>{
    if(category==='women'){
      setImage(data[0])
      }
      else if(category==='men'){
        setImage(data[2])
      }
      else if(category==='kids'){
        setImage(data[1])
      } 
      else{
        setImage(data[3])
      }
   })

      const [Image,setImage]= useState(data[0])

  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [selectedPriceRange, setSelectedPriceRange] = useState({ min: 0, max: 20000 });

  const [sort,setSort]=useState(null)
  
  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  }

  const handleCheckboxChange = (event) => {
    const subcategory = event.target.value;
    const updatedSubcategories = [...selectedSubcategories];
    if (event.target.checked) {
      updatedSubcategories.push(subcategory);
    } else {
      const index = updatedSubcategories.indexOf(subcategory);
      updatedSubcategories.splice(index, 1);
    }
    setSelectedSubcategories(updatedSubcategories);
  };

  const handlePriceRangeChange = (event) => {
    const min = event.target.min;
    const max = event.target.value;
    setSelectedPriceRange({ min, max });
  };


  return (
    <div className='products'>
<div className="left">
  <div className="filterItem">
    <h2>Product Categories</h2>
    <div className="inputItem">
    <input type="checkbox" value="footwear" onChange={handleCheckboxChange} />
      <label>Footwear</label>
    </div>
    <div className="inputItem">
    <input type="checkbox" value="tshirt" onChange={handleCheckboxChange} />
      <label>Tshirt</label>
    </div>
    <div className="inputItem">
    <input type="checkbox" value="tops" onChange={handleCheckboxChange} />
      <label>Tops</label>
    </div>
    <div className="inputItem">
    <input type="checkbox" value="coats" onChange={handleCheckboxChange} />
      <label>Coats</label>
    </div>
    <div className="inputItem">
    <input type="checkbox" value="jeans" onChange={handleCheckboxChange} />
      <label>Jeans</label>
    </div>
    <div className="inputItem">
    <input type="checkbox" value="shorts" onChange={handleCheckboxChange} />
      <label>Shorts</label>
    </div>
    <div className="inputItem">
    <input type="checkbox" value="jackets" onChange={handleCheckboxChange} />
      <label>jackets</label>
    </div>
   
    
    <div className="inputItem">
    <input type="checkbox" value="Wallet" onChange={handleCheckboxChange} />
      <label>Wallet</label>
    </div>
    <div className="inputItem">
    <input type="checkbox" value="handbags" onChange={handleCheckboxChange} />
      <label>Handbags</label>
    </div>
    <div className="inputItem">
    <input type="checkbox" value="cap" onChange={handleCheckboxChange} />
      <label>Caps</label>
    </div>
    <div className="inputItem">
    <input type="checkbox" value="shirt" onChange={handleCheckboxChange} />
      <label>Shirt</label>
    </div>
    <div className="inputItem">
    <input type="checkbox" value="dress" onChange={handleCheckboxChange} />
      <label>Dress</label>
    </div>
  
    <div className="inputItem">
    <input type="checkbox" value="sunglasses" onChange={handleCheckboxChange} />
      <label>Sunglasses</label>
    </div>
  
    <div className="inputItem">
    <input type="checkbox" value="perfumes" onChange={handleCheckboxChange} />
      <label>Perfumes</label>
    </div>
  
  </div>





  <div className="filterItem">
    <h2>Filter by price </h2>
    <div className="inputItem">
      <span>0</span>
      <input type="range" min={0} max={20000} onChange={handlePriceRangeChange} />
      <span> {selectedPriceRange.max}</span>
    </div>
  </div>
  <div className="filterItem">
   <h2>Sort by</h2>

   <div className="inputItem">
    <input type="radio" id="asc" name="price" onChange={(e)=>setSort("asc")}/>
    <label htmlFor="asc"> Price(Lowest first)</label>
   </div>

   <div className="inputItem">
    <input type="radio" id="desc" name="price" onChange={(e)=>setSort("desc")}/>
    <label htmlFor="desc"> Price(Highest first)</label>
   </div>

  </div>
</div>
<div className="right">
<button onClick={handleTogglePopup} className="addNew">Add New Product +</button>


{isPopupOpen ? < ItemForm onClosePopup={handleTogglePopup}/> : null}


<div className='CategoryImg'>

<img className="catImg" src={Image} alt="" />
</div>
 
  <List selectedSubcategories={selectedSubcategories}  selectedPriceRange={selectedPriceRange} sort={sort} />
</div>

    </div>
  )
}


