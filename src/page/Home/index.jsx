import React, { Fragment, useState } from 'react'
import '../../asset/Style/header.css';
import '../../asset/Style/product.css';
import '../../asset/Style/footer.css';
import '../../asset/Style/slider.css';
import '../../asset/Style/category.css';
// import Header from './header';
import Product from './product';
import Slider from './../../components/slider';
import Category from '../../components/category';

export const manageProduct = React.createContext()
const Home = () => {
 
  const [getListProducted , setgetListProduct] = useState([])
  return (
    <Fragment>
      <manageProduct.Provider value={{setgetListProduct , getListProducted}}>
        <Slider />
        <Category />
        <Product />
      </manageProduct.Provider>
    </Fragment>
  )
}

export default Home