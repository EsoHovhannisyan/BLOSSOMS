import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './Layout.css'
import { useState } from "react";


const Layout = () => {
    const [open, setOpen] = useState(true)
    const isOpen = () => {
        setOpen(!open)
    }
    return (
        <>
            <header>
                <div className="Contact_Box">

                    <div>
                        <p>Contact us 24/7</p>
                        <a href="#"> +44 330 022 5700</a>
                    </div>
                    <div>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Help & FAQ's</a>
                    </div>
                </div>
                <div>
                    <div className="Logo"></div>
                    <button onClick={isOpen}> <FontAwesomeIcon className="btn_open" icon={open ? faBars : faClose} /></button>
                    <nav className={open ? 'Close' : 'isOpen'}>
                        <ul>
                            <li>
                                <Link onClick={isOpen} to='/'>HOME</Link>
                            </li>
                            <li>
                                <Link onClick={isOpen} to='/About'>ABOUT US</Link>
                            </li>
                            <li>
                                <Link onClick={isOpen} to='/Contact'> CONTACT US</Link>
                            </li>
                            <li>
                                <Link onClick={isOpen} to='/Shop'>SHOP</Link>
                            </li>
                            <li>
                                <Link onClick={isOpen} to='/Blog'>BLOG</Link>
                            </li>
                        </ul>
                        <ul className="Last_ul">
                            <li>
                                <Link to='/Sign'>SIGN IN</Link>
                            </li>
                            <li>
                                <Link to='/Cart'>CART</Link>
                                <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />

            <footer>
                <div className="Links">
                    <div>
                        <h2>
                            BLOSSOMS
                        </h2>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit sed do eiusmod tempor i <br /> ncididunt ut labore et</p>
                    </div>
                    <div>
                        <span>© 2021<a href="#">Qode Interactive,</a>All Rights Reserved</span>
                    </div>
                    <div className="Social_Links">
                        <ul>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faPinterest} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="Links">
                    <div>
                        <h3>
                            CATEGORIES
                        </h3>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <a href="#">
                                    Accessories
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Coats
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Dresses
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Fashion
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Knitwear
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="Links">
                    <div>
                        <h3>
                            USEFUL LINKS
                        </h3>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Browse for products</a>
                            </li>
                            <li>
                                <a href="#">Size guides</a>
                            </li>
                            <li>
                                <a href="#">Terms & conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="Links">
                    <div>
                        <h3>OUR STORE</h3>
                    </div>
                    <div>
                        <span>Address: <a href="#">158 E Broadway, New York</a></span>
                    </div>
                    <div>
                        <span>Phone:<a href="#"> 0036 985 745 63</a></span>
                    </div>
                    <div>
                        <span>Email:<a href="#">qi67@example.com</a></span>
                    </div>
                    <div>
                        <a href="#"><img src="https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/footer-img1.png"></img></a>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Layout