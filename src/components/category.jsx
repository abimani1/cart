import React, { Fragment } from 'react'
import category1 from '../asset/image/category/sofa.jpg'
import category2 from '../asset/image/category/tv.jpg'
import category3 from '../asset/image/category/dining.jpg'
import category4 from '../asset/image/category/wordrobe.jpg'
import category5 from '../asset/image/category/bed.jpg'
import category6 from '../asset/image/category/dresssing table.jpg'
import category7 from '../asset/image/category/door.jpg'
import category8 from '../asset/image/category/divan.jpg'
import category9 from '../asset/image/category/office.jpg'
import category10 from '../asset/image/category/kitchen.jpg'
import category11 from '../asset/image/category/lamp.jpg'
import category12 from '../asset/image/category/reading.jpg'
import category13 from '../asset/image/category/mattress.jpg'
import category14 from '../asset/image/category/chest.jpg'
import category15 from '../asset/image/category/widows.jpg'
import category16 from '../asset/image/category/miscellaneous.jpg'

const Category = () => {
    return (
        <div className='container'>
            <div className='category-icon'>
            <div className='category-heading'>
                    <h3>My Market Category</h3>
                    <span>View More</span>
                </div>
                <ul className='category-list'>
                    <li className='category-text'>
                        <a>
                            <span>
                                <img src={category1}></img>
                            </span>
                        </a>
                        <p>Sofa</p>
                    </li>

                    <li className='category-text'>
                        <a>
                            <span>
                                <img src={category2}></img></span>
                        </a>
                        <p>TV Cabinet</p>
                    </li>
                    <li className='category-text'>
                        <a>
                            <span>
                                <img src={category3}></img>   </span>
                        </a>
                        <p>Dining</p>
                    </li>
                    <li className='category-text'>
                        <a>
                            <span>
                                <img src={category4}></img>  </span>
                        </a>
                        <p>Wordrobe</p>
                    </li>
                    <li className='category-text'>
                        <a>
                            <span>
                                <img src={category5}></img></span>
                        </a>
                        <p>Bed</p>
                    </li>
                    <li className='category-text'>
                        <a>
                            <span>
                                <img src={category6}></img>  </span>
                        </a>
                        <p>Dressing Table

                        </p>
                    </li>
                    <li className='category-text'>
                        <a>
                            <span>
                                <img src={category7}></img> </span>
                        </a>
                        <p>Door</p>
                    </li>
                    <li className='category-text'>
                        <a>
                            <span>
                                <img src={category8}></img>        </span>
                        </a>
                        <p>Divan</p>
                    </li>
                    <li className='category-text'>
                        <a>
                            <span>
                                <img src={category9}></img>   </span>
                        </a>
                        <p>Office</p>
                    </li>
                    <li className='category-text'>
                        <a>
                            <span>
                                <img src={category10}></img>        </span>
                        </a>
                        <p>Kitchen</p>
                    </li>
                    <li className='category-text'>
                        <a>
                            <span>
                                <img src={category11}></img>    </span>
                        </a>
                        <p>Lamp</p>
                    </li>
                    <li className='category-text'>
                        <a>
                            <span>
                                <img src={category12}></img>  </span>
                        </a>
                        <p>Reading Table

                        </p>
                    </li>
                    <li className='category-text'>
                        <a>
                            <span>
                                <img src={category13}></img>  </span>
                        </a>
                        <p>Mattress</p>
                    </li>
                    <li className='category-text'>
                        <a>
                            <span>
                                <img src={category14}></img>  </span>
                        </a>
                        <p>Chest Drawers</p>
                    </li>
                    <li className='category-text'>
                        <a>
                            <span>
                                <img src={category15}></img> </span>
                        </a>
                        <p>Windows</p>
                    </li>
                    <li className='category-text'>
                        <a>
                            <span>
                                <img src={category16}></img> </span>
                        </a>
                        <p>Miscellaneous</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Category