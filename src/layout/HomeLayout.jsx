import React from 'react'
import Header from '../page/Home/Header'
import Footer from '../page/Home/Footer'

const HomeLayout = ({children}) => {
  return (
    <div>
        <Header/>
          {children}
        <Footer/>
    </div>
  )
}

export default HomeLayout