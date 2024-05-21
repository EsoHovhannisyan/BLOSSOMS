import Shops from "./ShopComponents/Shops/Shops"
import Filter from "./ShopComponents/Shops/Filter/Filter"
import Products from "./ShopComponents/Products/Products"
import './Shop.css'



const Shop = () => {
    return (
        <div className="Container">
            <div className="title">
                <Shops />
            </div>
            <div className="Filter_Product">
                <Filter />
                <Products/>
            </div>
        </div>
    )
}
export default Shop