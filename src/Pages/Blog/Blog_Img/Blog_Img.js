import './Blog_Img.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Blog_Img = () => {
    const Img_Data = [
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/blog-img1.jpg',
            name: 'Fashion',
            title: 'INSPIRED BY ICONS & IDOLS',
            paragraph: `Lorem ipsum dolor sit amet, consec tetur Sed  ut perspiciatis unde. Sed non mauris vitae erat consequat auctor eu in elit. Sed non mauris vitae erat consequat auctor eu in elit. Lorem ipsum dolor sit amet, consec tetur Sed ut perspiciatis unde. Sed non mauris vitae erat consequat auctor eu in elit. Sed non mauris`
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/blog-img2.jpg',
            name: 'Accessories',
            title: 'A DAY IN COPENHAGEN',
            paragraph: 'Lorem ipsum dolor sit amet, consec tetur Sed ut perspiciatis unde. Sed non mauris vitae erat consequat auctor eu in elit. Sed non mauris vitae erat consequat auctor eu in elit. Lorem ipsum dolor sit amet, consec tetur Sed ut perspiciatis unde. Sed non mauris vitae erat consequat auctor eu in elit. Sed non mauris'
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/blog-img3.jpg',
            name: 'Beauty',
            title: 'FACE THE UNPREDICTABLE',
            paragraph: 'Lorem ipsum dolor sit amet, consec tetur Sed ut perspiciatis unde. Sed non mauris vitae erat consequat auctor eu in elit. Sed non mauris vitae erat consequat auctor eu in elit. Lorem ipsum dolor sit amet, consec tetur Sed ut perspiciatis unde. Sed non mauris vitae erat consequat auctor eu in elit. Sed non mauris'
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/blog-img4.jpg',
            name: 'Shopping, Style',
            title: 'ECO-FRIENDLY FABRICS',
            paragraph: 'Lorem ipsum dolor sit amet, consec tetur Sed ut perspiciatis unde. Sed non mauris vitae erat consequat auctor eu in elit. Sed non mauris vitae erat consequat auctor eu in elit. Lorem ipsum dolor sit amet, consec tetur Sed ut perspiciatis unde. Sed non mauris vitae erat consequat auctor eu in elit. Sed non mauris'
        },
    ]
    return (
        <div className='Blog_Img_Box_Container'>
            {Img_Data.map((e) => {
                return (
                    <>
                        <div className='Blog_Img_Box'>
                            <div className='Blog_Img'>
                                <img src={e.img} />
                            </div>
                            <div className='Blog_Info'>
                                <a href='#'>{e.name}</a>
                                <h1><a href='#'>{e.title}</a></h1>
                                <p>{e.paragraph}</p>
                                <div>
                                    <button> Read More</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}
export default Blog_Img