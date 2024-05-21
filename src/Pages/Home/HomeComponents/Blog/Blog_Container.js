import './Blog_Container.css'


const Blog = () => {
    const Blog_Data = [
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/blog-img1.jpg',
            name: 'INSPIRED BY ICONS & IDOLS',
            description: 'Lorem ipsum dolor sit amet, consec tetur Sed ut perspiciatis unde. Sed non mauris vitae erat consequat auctor eu in elit. Sed non mauris vitae'
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/blog-img2.jpg',
            name: 'A DAY IN COPENHAGEN',
            description: 'Lorem ipsum dolor sit amet, consec tetur Sed ut perspiciatis unde. Sed non mauris vitae erat consequat auctor eu in elit. Sed non mauris vitae'
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/blog-img3.jpg',
            name: 'FACE THE UNPREDICTABLE',
            description: 'Lorem ipsum dolor sit amet, consec tetur Sed ut perspiciatis unde. Sed non mauris vitae erat consequat auctor eu in elit. Sed non mauris vitae'
        },
        {
            img: 'https://qi67.qodeinteractive.com/wp-content/uploads/2020/11/blog-img4.jpg',
            name: 'ECO-FRIENDLY FABRICS',
            description: 'Lorem ipsum dolor sit amet, consec tetur Sed ut perspiciatis unde. Sed non mauris vitae erat consequat auctor eu in elit. Sed non mauris vitae'
        },
    ]
    return (
        <div className='Blog_Container'>
            {Blog_Data.map((e) => {
                return (
                <div className='Blog'>
                    <div className='Blog_Img'>
                        <img src={e.img}/>
                    </div>
                    <div className='Blog_Info'>
                        <div>
                            <h3>{e.name}</h3>
                        </div>
                        <div>
                            <p>{e.description}</p>
                        </div>
                        <div>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
                )
            }
            )}
        </div>
    )
}
export default Blog