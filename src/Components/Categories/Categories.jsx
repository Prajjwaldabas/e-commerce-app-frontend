import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'

export default function Categories() {
  return (
    <div className='categories'>

{/* left col */}
<div className="col">

<div className="row">
   <img src="https://images.pexels.com/photos/5868272/pexels-photo-5868272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
   <Link to="/products/sale" className='link'>
    <button> Sale</button>
   </Link>
</div>

<div className="row">
   <img src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
   <Link to="/products/women" className='link'>
    <button> Women</button>
   </Link>
</div>

</div>

{/* center col */}
<div className="col">
<div className="row">
    <img src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    <Link to="/products/newSeason" className='link'>
    <button> New Season</button>
   </Link>
</div>
</div>

{/* right col */}
<div className="col col-l">
<div className="row">
    <div className="col">
        <div className="row">
            <img src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <Link to="/products/men" className='link'>
    <button> Men</button>
   </Link>
        </div>
    </div>
    <div className="col">
        <div className="row">
            <img src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            <Link to="/products/accessories" className='link'>
    <button> Accessories</button>
   </Link>

        </div>
    </div>
</div>

<div className="row">
    <img src="https://images.pexels.com/photos/2351858/pexels-photo-2351858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    <Link to="/products/shoes" className='link'>
    <button> Shoes</button>
   </Link>
    </div>
</div>


    </div>
  )
}
