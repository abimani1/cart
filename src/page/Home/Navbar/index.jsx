import React, { useEffect, useState, useContext } from "react";
import menubar from "../../../asset/image/menu-bar.svg";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getProductCategories } from "../../../helper/queries";

const NavBar = () => {

  const [getProductCat, setGetProductCat] = useState()
  const navigate = useNavigate();
  /// get all product categories
  const {
    error: productError,
    loading: productLoading,
    data: productCategories,
    refetch: refetchProductCategories,
  } = useQuery(getProductCategories);

  ///  useEffect to store product categories in useStaet
  useEffect(() => {
    setGetProductCat(productCategories?.product_categories)
  }, [productCategories])



  const moveCategories = (p) => {
    navigate(`/categories/${p}`);  /// navigate with product categories ID
  }
  return (
    <div className="menu-header">
      <div className="menu-bar">
        <div className="category">
          <img src={menubar} alt="menu"></img>
          <select className="category-list" id="categoryall " onChange={(e) => { moveCategories(e.target.value) }}>
            <option value="All Categories">All Categories</option>
            {(getProductCat ?? []).map((x) => (
              <option key={x.id} value={x.id}>
                {x.name}
              </option>
            ))}
          </select>
        </div>
        <ul className="main-menu">
          <li className="menu-list">
            <select className="dropdown" id="selectOption menu">
              <option value="option1"><Link to={'/'} className="Link">Homepage</Link></option>
              <option value="option2">CategoriesU 2</option>
              <option value="option3">Categories 3</option>
            </select>
          </li>
          <li className="menu-list">
            <select className="dropdown" id="selectOption">
              <option value="option1">Shop</option>
              <option value="option2">Categories 2</option>
              <option value="option3">Categories 3</option>
            </select>
          </li>
          <li className="menu-list">
            <select className="dropdown" id="selectOption">
              <option value="option1">Pages</option>
              <option value="option2">Categories 2</option>
              <option value="option3">Categories 3</option>
            </select>
          </li>
          <li>
            <Link to={"/aboutUs"} className="Link">
              About
            </Link>
          </li>
          <li>Blog</li>
          <li>
            <Link to={"/contactUs"} className="Link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
