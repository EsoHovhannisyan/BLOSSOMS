import './Top_Selling.css'

function Top_Selling() {
    const Selling_Data = [
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img9-370x360.jpg',
            name: 'BLACK BACKPACK',
            price: 45
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img10-370x360.jpg',
            name: 'ORANGE HEELS',
            price: 75
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img11-370x360.jpg',
            name: 'GREY SWEATER',
            price: 50
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img12-370x360.jpg',
            name: 'FEDORA HAT',
            price: 35
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img13-370x360.jpg',
            name: 'BLUE JEANS',
            price: 125
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-img14-370x360.jpg',
            name: 'LONG SHIRT',
            price: 40
        },


    ]
    return (
        <div className='Top_Selling'>
            <div className='Title'>
                <div>
                    <h1>
                        TOP SELLING
                    </h1>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur Sed ut perspic
                    </p>
                </div>
            </div>
            <div className='Top_Selling_Product_Box'>
                {Selling_Data.map((e) => {
                    return (
                        <div className='Top_Selling_Product'>
                            <div className='Top_Selling_Product_Img'>
                                <img src={e.img} />
                            </div>
                            <div className='Top_Selling_Product_Info'>
                                <div>{e.name}</div>
                                <div>${e.price}</div>
                                <div>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Top_Selling