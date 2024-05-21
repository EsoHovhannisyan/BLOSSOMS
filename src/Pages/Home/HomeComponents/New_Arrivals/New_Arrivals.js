import './New_Arrivals.css'

function New_Arrivals() {
    const Product_Data = [
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img1.jpg',
            name: 'COTTON SHIRT',
            price: 50,
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img2.jpg',
            name: 'BLACK DRESS',
            price: 50,
            oldPrice: 65
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img3.jpg',
            name: 'WHITE SHIRT',
            price: 50,
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img4.jpg',
            name: 'WOOL SWEATER',
            price: 100,
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img5.jpg',
            name: 'GREEN COAT',
            price: 100,
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img6.jpg',
            name: 'WHITE T-SHIRT',
            price: 35,
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img7.jpg',
            name: 'BLACK COAT',
            price: 130,
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img8.jpg',
            name: 'GRAY JACKET',
            price: 90,
        }
    ]
    return (
        <div className='New_Arrivals'>
            <div className='Title'>
                <div>
                    <h1>
                        New Arrivals
                    </h1>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur Sed ut perspic
                    </p>
                </div>
            </div>
            <div className='Product_Box'>
                {Product_Data.map((e) => {
                    return (
                        <div className='Product'>
                            <div className='Product_Img_Box'>
                                <img src={e.img} />
                                <button>Add to Cart</button>
                            </div>
                            <div className='Product_Info'>
                                <h3>{e.name}</h3>
                                {e.oldPrice ? <span className='OldPrice'>${e.oldPrice}</span> : ''}
                                <span> ${e.price}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default New_Arrivals