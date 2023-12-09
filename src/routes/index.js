import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import SignIn from '../page/authPage/signIn/signIn'
import SignUp from '../page/authPage/signUp/signUp'
import AboutUs from '../page/Home/aboutUs'
import HomeLayout from '../layout/HomeLayout'
import ContactUS from '../page/Home/contactUS'
import Categories from '../page/Categories/Categories'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/aboutUs' element = {<HomeLayout><AboutUs/></HomeLayout>}/>
      <Route path='/contactUs' element = {<HomeLayout><ContactUS/></HomeLayout>}/>
      <Route path="/" element={<HomeLayout><Home/></HomeLayout>} />
      <Route path="/categories/:productId" element={<HomeLayout><Categories/></HomeLayout>} />
      <Route path="/SignIn" element={<SignIn/>} />
      <Route path="/SignUp" element={<SignUp/>} />
    </Routes>
  )
}

export default AppRoutes