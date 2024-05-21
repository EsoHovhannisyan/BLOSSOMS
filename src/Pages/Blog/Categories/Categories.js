import './Categories.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';




const Categories = () => {
    return (
        <div className='Categories'>
            <div>
                <input placeholder='Search'></input>
                <button>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div>
                <img src='https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/autor-img-1.jpg'></img>
            </div>
            <div className='Category_Box'>
                <div>
                    <h3>
                        ABOUT AUTHOR
                    </h3>
                    <p>
                        Consec tetuer adipiscing elit. Aenean et commodo ligula eget dolor massa cum sociis natoque penatibus eget dolor.
                    </p>
                </div>
                <div>
                    <h3>
                        Categories
                    </h3>
                    <a href='#'>Accessories</a>
                    <a href='#'>Beauty</a>
                    <a href='#'>Fashion</a>
                    <a href='#'>Shopping</a>
                    <a href='#'>Style</a>
                </div>
                <div>
                    <h3>
                        TAGS
                    </h3>
                    <a href='#'>Accessories,</a>
                    <a href='#'>Beauty,</a>
                    <a href='#'>Desighn,</a>
                    <a href='#'>Fashion,</a>
                    <a href='#'>Shopping,</a>
                    <a href='#'>Style</a>
                </div>

                <div>
                    <h3>
                        RECENT POSTS
                    </h3>
                    <div>
                        <span>
                            November 13, 2020
                        </span>
                        <a href='#'>SENSE APPEALING</a>
                    </div>
                    <div>
                        <span>
                            November 13, 2020
                        </span>
                        <a href='#'>BEYOND IMAGINATION</a>
                    </div>
                    <div>
                        <span>
                            November 13, 2020
                        </span>
                        <a href='#'>ECO-FRIENDLY FABRICS</a>
                    </div>
                </div>
                <div>
                    <h3>
                        FOLLOW US
                    </h3>
                    <ul>
                        <li>
                            <a href='#'>
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <FontAwesomeIcon icon={faPinterest} />
                            </a>
                        </li>
                        <li>

                            <a href='#'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Categories