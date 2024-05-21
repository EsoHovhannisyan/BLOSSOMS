import './Filter.css'
import MultiRangeSlider from './dubleRange/DubleRange'

const Filter = () => {
    return (
        <div className='FilterContainer'>
            <div className='Filter'>
                <div className='Filter_Price'>
                    <div>
                        <MultiRangeSlider
                            min={30}
                            max={130}
                            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                        />
                    </div>
                    <div>
                        <button>Filter</button>
                    </div>
                </div>
                <div className='Product_Categories'>
                    <div>
                        <h3>PRODUCT CATEGORIES</h3>
                    </div>
                    <div>
                        <a href='#'>Accessories</a>
                    </div>
                    <div>
                        <a href='#'>Coats</a>
                    </div>
                    <div>
                        <a href='#'>Dresses</a>
                    </div>
                    <div>
                        <a href='#'>Fashion</a>
                    </div>
                    <div>
                        <a href='#'>Knitwear</a>
                    </div>
                    <div>
                        <a href='#'>Men</a>
                    </div>
                    <div>
                        <a href='#'>Uncategorized</a>
                    </div>
                    <div>
                        <a href='#'>Women</a>
                    </div>
                </div>

                <div className='Color'>
                    <div>
                        <h3>
                            COLOR
                        </h3>
                    </div>
                    <div>
                        <a href='#'>Beige (4)</a>
                    </div>
                    <div>
                        <a href='#'>Black (3)</a>
                    </div>
                    <div>
                        <a href='#'>Blue (1)</a>
                    </div>
                    <div>
                        <a href='#'>Brown (1)</a>
                    </div>
                    <div>
                        <a href='#'>Gold (1)</a>
                    </div>
                    <div>
                        <a href='#'>Green (1)</a>
                    </div>
                    <div>
                        <a href='#'>Grey (2)</a>
                    </div>
                    <div>
                        <a href='#'>Orange (2)</a>
                    </div>
                </div>

                <div className='Filter_By'>
                    <div>
                        <h3>FILTER BY</h3>
                    </div>
                    <div>
                        <a href='#'>Extra Large (8)</a>
                    </div>
                    <div>
                        <a href='#'>Extra Small (8)</a>
                    </div>
                    <div>
                        <a href='#'>Large (8)</a>
                    </div>
                    <div>
                        <a href='#'>Medium (8)</a>
                    </div>
                    <div>
                        <a href='#'>Small (8)</a>
                    </div>
                </div>
            </div>
            <div className='Img'>
                <img src='https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/shop-banner-img.jpg'></img>
            </div>
        </div>
    )
}
export default Filter