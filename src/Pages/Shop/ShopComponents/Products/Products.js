import './Products.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'



const Products = () => {
    const [open, setOpen] = useState(false)
    const isOpen = () => {
        setOpen(!open)
    }

    const Product_Data = [
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img1-300x426.jpg',
            name: 'COTTON SHIRT',
            price: 50.00
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img2-300x426.jpg',
            name: 'BLACK DRESS',
            price: 65.00,
            oldprice: 70.00
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img3.jpg',
            name: 'WHITE SHIRT',
            price: 50.00
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img4.jpg',
            name: 'WOOL SWEATER',
            price: 100.00
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img5.jpg',
            name: 'GREEN COAT',
            price: 100.00
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img6.jpg',
            name: 'WHITE T-SHIRT',
            price: 35.00
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img7-300x426.jpg',
            name: 'BLACK COAT',
            price: 130.00
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img8-300x426.jpg',
            name: 'GREY JACKET',
            price: 90.00
        },

        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img15-300x426.jpg',
            name: 'SUMMER SWEATER',
            price: 55.00
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img10-300x426.jpg',
            name: 'ORANGE HEELS',
            price: 75.00
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img11-300x426.jpg',
            name: 'GREY SWEATER',
            price: 50.00
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img12-300x426.jpg',
            name: 'FEDORA HAT',
            price: 35.00
        },
    ]

    return (
        <div className='Product_Container'>
            <div className='Select_Container'>
                <span>Showing 1–12 of 15 results</span>
                <div className='Select_Box'>
                    <div onClick={isOpen}><h3>Default sorting</h3><FontAwesomeIcon className={open ? 'showrotate' : 'hiderotate'} icon={faChevronDown} /></div>
                    <div className={open ? 'Select' : 'close'}>

                        <ul>
                            <li>
                                <a href='#'>Default sorting</a>
                            </li>
                            <li>
                                <a href='#'>Sort by popularity</a>
                            </li>
                            <li>
                                <a href='#'>Sort by average rating</a>
                            </li>
                            <li>
                                <a href='#'>Sort by latest</a>
                            </li>
                            <li>
                                <a href='#'>Sort by price: low to high</a>
                            </li>
                            <li>
                                <a href='#'>Sort by price: high to low</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='Product_Box'>
                {
                    Product_Data.map((e) => (
                        <div className='Product'>
                            <div className='Product_Img'>
                                <img src={e.img} />
                                <div>
                                    <button>Buy Now</button>
                                </div>
                            </div>
                            <div className='Product_Info'>
                                <div><h4>{e.name}</h4></div>
                                <div>
                                    {e.oldprice ? <span className='Oldprice'>${e.oldprice}</span> : ''}
                                    <span>$ {e.price}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )

}

export default Products