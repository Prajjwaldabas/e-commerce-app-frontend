
import React from 'react'
import Categories from '../../Components/Categories/Categories'
import Contact from '../../Components/Contact/Contact'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import Slider from "../../Components/Slider/Slider"
import TrendingProducts from '../../Components/TrendingProducts/TrendingProducts'

export default function Home() {
  return (
    <div className='home'>
<Slider/>
<FeaturedProducts type="Featured"/>
<Categories/>
<TrendingProducts />
<Contact/>
    </div>
  )
}
