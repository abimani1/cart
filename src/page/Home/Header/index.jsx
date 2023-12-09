import React, { useState } from 'react';
import logo from '../../../asset/image/logo.png'
import refresh from '../../../asset/image/refresh-70.svg'
import bag from '../../../asset/image/bag-68.svg'
import heart from '../../../asset/image/heart-59.svg'
import person from '../../../asset/image/person-8.svg'
import NavBar from '../Navbar';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import AuthComponent from '../../authPage';
import { useAuth } from '../../../auth-providers/auth';
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow:'hidden',
    overFlow:'hidden',
    borderRadius: '10px'
  },
};

Modal.setAppElement('#root');

const Header = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const {token, logout} = useAuth()

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div>
      <div className='container'>
        <div className='logo-header'>
          <div className='logo'>
            <Link to={'/'}>
              <img src={logo} alt='logo'></img>
            </Link>
          </div>
          <div className='search-area'>
            <div className='text-area'>
              <input className='search-product' type='text' placeholder='Search Product..'></input>
              <select id="selectOption">
                <option value="option1">All Categories</option>
                <option value="option2">Categories 2</option>
                <option value="option3">Categories 3</option>
              </select></div>
            <button className='search-btn'>Search</button>
          </div>
          <div className='icon'>
            <button className='btn'><img src={refresh} alt='refresh'/></button>
            <button className='btn'><img src={heart} alt='wishlist'/></button>
            <button className='btn'><img src={bag} alt='cart'/></button>
            <button className='btn' onClick={openModal}><img src={person} alt='user'></img></button>
            {/* {token ? <button className='btn' onClick={() => logout()}><IoIosLogOut style={{fontSize:'25px'}}/></button>  :<button className='btn' onClick={openModal}><img src={person} alt='user'></img></button>} */}
          </div>

        </div>

      </div>
      <NavBar/>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          shouldCloseOnOverlayClick={true}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end',position:'absolute',left:'85%' }}>
            <button onClick={closeModal} style={{ background: 'none', border: 'none' }}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          <AuthComponent closeModal = {closeModal}/>
        </Modal>
    </div>

  )
}


export default Header