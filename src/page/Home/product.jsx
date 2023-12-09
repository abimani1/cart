import star from '../../asset/image/star.svg'
import product1 from '../../asset/image/product/product-img-1.jpg'
import product2 from '../../asset/image/product/product-img-2.jpg'
import product3 from '../../asset/image/product/product-img-3.jpg'
import product4 from '../../asset/image/product/product-img-4.jpg'
import product5 from '../../asset/image/product/product-img-5.jpg'
import product6 from '../../asset/image/product/product-img-6.jpg'
import product7 from '../../asset/image/product/product-img-7.jpg'
import product8 from '../../asset/image/product/product-img-8.jpg'
import product9 from '../../asset/image/product/product-img-9.jpg'
import product10 from '../../asset/image/product/product-img-10.jpg'
import product11 from '../../asset/image/product/product-img-11.jpg'
import product12 from '../../asset/image/product/product-img-12.jpg'
import champian from '../../asset/image/campaign.jpg'
import covers from '../../asset/image/app-covers.png'
import headphone from '../../asset/image/ads-1.png'
import watch from '../../asset/image/ads-2.png'
import add from '../../asset/image/ads-3.png'
import gplay from '../../asset/image/play-store.png'
import appstore from '../../asset/image/apple-store.png'

const Product = () => {

    return (

        <div>

            <div className='container'>
                <div className='arrival-heading'>
                    <h3>New Arrivals</h3>
                    <span>View More</span>
                </div>
                <div className='products'>
                    <ul className='arrival-product'>
                        <li data-aos="fade-up" className='item aos-init aos-animate'>
                            <div className='product-val'>  <img src={product1}></img></div>
                            <div className='arrival-text'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                            <div className='product-cart'>
                                <div className='product-saver'>
                                    <a>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.339844 3.18947V5.71272H0.991007H1.64217V4.31815V2.91815L4.6538 5.92978L7.66543 8.94141L8.13752 
                                    8.46389L8.61504 7.99179L5.60341 4.98017L2.59178 1.96854H3.99178H5.38636V1.31737V0.66621H2.8631H0.339844V3.18947Z"
                                                fill="black"></path><path d="M13.9592 1.31737V1.96854H15.3537H16.7537L13.7421 4.98017L10.7305 7.99179L11.208 8.46389L11.6801 
                                    8.94141L14.6917 5.92978L17.7033 2.91815V4.31815V5.71272H18.3545H19.0057V3.18947V0.66621H16.4824H13.9592V1.31737Z" fill="black">
                                            </path>
                                            <path d="M4.63752 14.0803L1.64217 17.0811V15.6811V14.2865H0.991007H0.339844V16.8098V19.333H2.8631H5.38636V18.6818V18.0307H3.99178H2.59178L5.60341
                                         15.0191L8.61504 12.0074L8.1538 11.5462C7.90419 11.2911 7.68171 11.0849 7.66543 11.0849C7.64915 11.0849 6.28713 12.4361 4.63752 14.0803Z"
                                                fill="black"></path>
                                            <path d="M11.1917 11.5462L10.7305 12.0074L13.7421 15.0191L16.7537
                                          18.0307H15.3537H13.9592V18.6818V19.333H16.4824H19.0057V16.8098V14.2865H18.3545H17.7033V15.6811V17.0811L14.7026 14.0803C13.0584 12.4361 
                                          11.6964 11.0849 11.6801 11.0849C11.6638 11.0849 11.4413 11.2911 11.1917 11.5462Z" fill="black"></path>
                                        </svg>
                                    </a>
                                    <a>
                                        <span><svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.97214 0.0251923C3.71435 0.183434 2.6616 0.701674 1.7705 1.60365C0.970091 2.41068 0.489057 3.26519 0.213053 4.37683C-0.275867 6.30342 0.0789948 8.20232 1.25398 9.98649C2.00708 11.1298 2.98097 12.1781 4.76711 13.7764C5.90266 14.7931 9.36848 17.7601 9.53802 17.859C9.69574 17.954 9.75488 17.9658 10.09 17.9658C10.4252 17.9658 10.4843 17.954 10.642 17.859C10.8116 17.7601 14.2853 14.7891 15.413 13.7764C17.207 12.1702 18.173 11.1258 18.9261 9.98649C20.1011 8.20232 20.4559 6.30342 19.967 4.37683C19.691 3.26519 19.21 2.41068 18.4096 1.60365C17.6131 0.800575 16.7614 0.337719 15.6456 0.100357C15.0857 -0.0183239 14.0526 -0.0301933 13.5637 0.0805759C12.1995 0.377279 11.1546 1.06167 10.2004 2.28013L10.09 2.41859L9.98357 2.28013C9.04122 1.08541 8.01212 0.401016 6.69913 0.100357C6.30878 0.00936699 5.4098 -0.0301933 4.97214 0.0251923ZM6.28907 1.23178C7.40885 1.42958 8.37487 2.07837 9.13979 3.15046C9.26991 3.3364 9.43156 3.55793 9.49465 3.64892C9.78643 4.06035 10.3936 4.06035 10.6854 3.64892C10.7485 3.55793 10.9102 3.3364 11.0403 3.15046C12.0851 1.68673 13.5401 0.998377 15.1251 1.21596C16.8837 1.45728 18.2558 2.69156 18.7802 4.50738C19.1942 5.94342 19.0128 7.45067 18.2597 8.80759C17.6289 9.94298 16.5761 11.1337 14.7427 12.7834C13.8555 13.5786 10.1255 16.7988 10.09 16.7988C10.0506 16.7988 6.33638 13.5904 5.4374 12.7834C2.61823 10.2476 1.50633 8.66518 1.23821 6.8098C1.06472 5.61112 1.31312 4.32145 1.91639 3.30475C2.82326 1.77376 4.58968 0.935081 6.28907 1.23178Z" fill="black"></path></svg></span>
                                    </a>
                                    <a>
                                        <span>
                                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.33556 0.70842C8.33556 1.09592 8.32306 1.41675 8.31056 1.41675C8.29806 1.41675
                                         8.09389 1.45425 7.86473 1.50425C3.90639 2.30425 0.952225 5.43342 0.402225 9.40843C0.273058 
                                         10.3168 0.327225 11.7001 0.523058 12.6251C1.01889 14.9918 2.55639 17.2126 4.58973 18.5126L4.82722 
                                         18.6626L5.41472 18.2209C5.73556 17.9793 6.00222 17.7709 6.00222 17.7543C6.00222 17.7418 5.89806 
                                         17.6751 5.77306 17.6084C5.13556 17.2751 4.30639 16.6084 3.74389 15.9793C2.67722 14.7834 1.99389
                                          13.3251 1.77306 11.7918C1.69389 11.2251 1.69389 10.1001 1.77306 9.56259C1.94389 8.42509 2.34389
                                           7.35009 2.94389 6.40842C3.69389 5.23759 4.83556 4.21259 6.08556 3.58342C6.71889 3.26676 7.59806
                                            2.96675 8.20223 2.85842L8.33556 2.83342V3.41675C8.33556 3.73759 8.34389 4.00009 8.35639 
                                            4.00009C8.39806 4.00009 11.0022 2.02925 11.0022 2.00009C11.0022 1.97092 8.39806 8.58307e-05 
                                            8.35639 8.58307e-05C8.34389 8.58307e-05 8.33556 0.316753 8.33556 0.70842Z" fill="black"></path>
                                                <path d="M13.9234 3.11266C13.6026 3.35432 13.3443 3.56682 13.3568 3.58349C13.3693 3.60432 13.4943
                                             3.68349 13.6401 3.76266C14.8609 4.45432 15.9984 5.62099 16.7026 6.91683C17.1276 7.69599 17.4859 
                                             8.82933 17.5859 9.71266C17.6693 10.4085 17.6193 11.6043 17.4859 12.2377C16.9109 14.9627 15.0151 
                                             17.1585 12.3984 18.1335C12.0693 18.2543 11.1776 18.5002 11.0609 18.5002C11.0151 18.5002 11.0026 
                                             18.396 11.0026 17.9168C11.0026 17.596 10.9943 17.3335 10.9818 17.3335C10.9401 17.3335 8.33594 
                                             19.3043 8.33594 19.3335C8.33594 19.3627 10.9401 21.3335 10.9818 21.3335C10.9943 21.3335 11.0026
                                              21.0168 11.0026 20.6252V19.921L11.1609 19.896C11.5484 19.8335 12.6443 19.5377 13.0026 19.396C16.2526
                                               18.1252 18.4776 15.3085 18.9401 11.8752C19.0609 10.9918 19.0068 9.60849 18.8151 8.70849C18.3193 6.34183 
                                               16.7818 4.12099 14.7484 2.82099L14.5109 2.67099L13.9234 3.11266Z" fill="black"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                                <div className='cart-btn'>
                                    <a><span>
                                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current"><path d="M12.5664 4.14176C12.4665 3.87701 12.2378 3.85413 11.1135 3.85413H10.1792V3.43576C10.1792 2.78532 10.089 2.33099 9.86993 1.86359C9.47367 1.01704 8.81003 0.425438 7.94986 0.150881C7.53106 0.0201398 6.90607 -0.0354253 6.52592 0.0234083C5.47246 0.193372 4.57364 0.876496 4.11617 1.85052C3.89389 2.32772 3.80368 2.78532 3.80368 3.43576V3.8574H2.8662C1.74187 3.8574 1.51313 3.88028 1.41326 4.15483C1.36172 4.32807 0.878481 8.05093 0.6723 9.65578C0.491891 11.0547 0.324369 12.3752 0.201948 13.3688C-0.0106763 15.0815 -0.00423318 15.1077 0.00220999 15.1371V15.1404C0.0312043 15.2515 0.317925 15.5424 0.404908 15.6274L0.781834 16H13.1785L13.4588 15.7483C13.5844 15.6339 14 15.245 14 15.0521C14 14.9214 12.5922 4.21694 12.5664 4.14176ZM12.982 14.8037C12.9788 14.8266 12.953 14.8952 12.9079 14.9443L12.8435 15.0162H1.13943L0.971907 14.8331L1.63233 9.82901C1.86429 8.04766 2.07047 6.4951 2.19289 5.56684C2.24766 5.16154 2.27343 4.95563 2.28631 4.8543C2.72123 4.85103 4.62196 4.84776 6.98661 4.84776H11.6901L11.6966 4.88372C11.7481 5.1452 12.9594 14.5128 12.982 14.8037ZM4.77338 3.8574V3.48479C4.77338 3.23311 4.80559 2.88664 4.84103 2.72649C5.03111 1.90935 5.67864 1.24584 6.48726 1.03339C6.82553 0.948403 7.37964 0.97782 7.71791 1.10202H7.72113C8.0755 1.22296 8.36545 1.41907 8.63284 1.71978C9.06453 2.19698 9.2095 2.62516 9.2095 3.41615V3.8574H4.77338Z"></path></svg>
                                    </span></a>
                                    <div className='cart-add'>
                                        <button className='cart-btn'>Add To Cart</button>
                                    </div>
                                </div>
                            </div>

                        </li>
                        <li data-aos="fade-up" className='item aos-init aos-animate'>
                            <div className='product-val'>  <img src={product2}></img></div>
                            <div className='arrival-text'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                        <li data-aos="fade-up" className='item aos-init aos-animate'>
                            <div className='product-val'>  <img src={product3}></img></div>
                            <div className='arrival-text'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                        <li data-aos="fade-up" className='item aos-init aos-animate'>
                            <div className='product-val'>  <img src={product4}></img></div>
                            <div className='arrival-text'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                        <li data-aos="fade-up" className='item aos-init aos-animate'>
                            <div className='product-val'>  <img src={product5}></img></div>
                            <div className='arrival-text'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                        <li data-aos="fade-up" className='item aos-init aos-animate'>
                            <div className='product-val'>  <img src={product6}></img></div>
                            <div className='arrival-text'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                        <li data-aos="fade-up" className='item aos-init aos-animate'>
                            <div className='product-val'>  <img src={product7}></img></div>
                            <div className='arrival-text'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                        <li data-aos="fade-up" className='item aos-init aos-animate'>
                            <div className='product-val'>  <img src={product8}></img></div>
                            <div className='arrival-text'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                        <li data-aos="fade-up" className='item aos-init aos-animate'>
                            <div className='product-val'>  <img src={product9}></img></div>
                            <div className='arrival-text'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                        <li data-aos="fade-up" className='item aos-init aos-animate'>
                            <div className='product-val'>  <img src={product10}></img></div>
                            <div className='arrival-text'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                        <li data-aos="fade-up" className='item aos-init aos-animate'>
                            <div className='product-val'>  <img src={product11}></img></div>
                            <div className='arrival-text'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                        <li data-aos="fade-up" className='item aos-init aos-animate'>
                            <div className='product-val'>  <img src={product12}></img></div>
                            <div className='arrival-text'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='popular-sales adds'>
                    <img src={add}></img>
                </div>
            </div>
            <div className='container'>
                <div className='arrival-heading Gamer'>
                    <h3>Gamer World</h3>
                    <span>View More</span>
                </div>
                <div className='products'>
                    <ul className='arrival-product'>
                        <li>
                            <div className='product-val'>  <img src={product1}></img></div>
                            <div className='arrival-text'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='product-val'>  <img src={product2}></img></div>
                            <div className='arrival-text'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='product-val'>  <img src={product3}></img></div>
                            <div className='arrival-text'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='product-val'>  <img src={product4}></img></div>
                            <div className='arrival-text'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='container'>
                <div className='arrival-heading'>
                    <h3>Top Selling Products</h3>
                    <span>View More</span>
                </div>
                <div className='products'>
                    <ul className='arrival-product Selling'>
                        <li className='Selling-product'>
                            <img className='Selling' src={product4}></img>
                            <div className='arrival-text Selling'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                        <li className='Selling-product'>
                            <img className='Selling' src={product5}></img>
                            <div className='arrival-text Selling'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                        <li className='Selling-product'>
                            <img className='Selling' src={product6}></img>
                            <div className='arrival-text Selling'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                        <li className='Selling-product'>
                            <img className='Selling' src={product7}></img>
                            <div className='arrival-text Selling'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className='popular-sales'>
                        <img src={headphone}></img>
                        <img src={watch}></img>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='arrival-heading'>
                    <h3>Popular Sales</h3>
                    <span>View More</span>
                </div>
                <div className='products'>
                    <ul className='arrival-product'>
                        <li>
                            <div className='product-val'>  <img src={product5}></img></div>
                            <div className='arrival-text'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='product-val'>  <img src={product6}></img></div>
                            <div className='arrival-text'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='product-val'>  <img src={product7}></img></div>
                            <div className='arrival-text'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='product-val'>  <img src={product8}></img></div>
                            <div className='arrival-text'>
                                <span>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                </span>
                                <p>Xoggle aute et pariatur adipisicing nostrud et excepteur</p>
                                <div className='price'>
                                    <label>$27.27</label>
                                    <span>$18.73</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className='popular-sales'>
                        <div className='champions'>
                            <img src={champian}></img>
                            <div className='sales-champion'>
                                <ul className='champion'>
                                    <li>
                                        <label className='champion1'>0</label>
                                        <span>Days</span>
                                    </li>
                                    <li>
                                        <label className='champion2'>0</label>
                                        <span>Hours</span>
                                    </li>
                                    <li>
                                        <label className='champion3'>0</label>
                                        <span>Minutes</span>
                                    </li>
                                    <li>
                                        <label className='champion4'>0</label>
                                        <span>Seconds</span>
                                    </li>
                                </ul>
                                <h1>WOO! Flash Sale</h1>
                                <div className='shop'>
                                    <span>Shop Now</span>
                                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2.08984" y="0.636719" width="6.94219" height="1.54271" transform="rotate(45 2.08984 0.636719)"
                                            fill="#1D1D1D"></rect><rect x="7" y="5.54492" width="6.94219" height="1.54271" transform="rotate(135 7 5.54492)"
                                                fill="#1D1D1D"></rect></svg>
                                </div>
                            </div>
                        </div>
                        <div className='all-cover-camps'>
                            <img src={covers}></img>
                            <div className='covers-champion'>
                                <h4>MOBILE APP VERSION</h4>
                                <h1>Get Our <span>Mobile App</span><br></br>
                                    It’s Make easy for you life !</h1>
                                <div className='shop'>
                                    <img src={gplay}></img>
                                    <img src={appstore}></img>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}


export default Product