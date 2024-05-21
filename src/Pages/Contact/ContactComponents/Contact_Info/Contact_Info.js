import './Contact_Info.css'


const Contact_Info = () => {
    return (
        <div className='Contact_Info_Box'>
            <div className='Contact_Info'>
                <div>
                    <h3>
                        MANHATTAN
                    </h3>
                    <span>
                        Address:<a href='#'>158 E Broadway, New York</a>
                    </span>
                    <span>
                        Phone:<a href='#'> 0036 985 745 63</a>
                    </span>
                    <span>
                        Email:<a href='#'>Email: qi67@example.com</a>
                    </span>
                </div>

                <div>
                    <h3>
                    HARLEM
                    </h3>
                    <span>
                        Address:<a href='#'>158 E Broadway, New York</a>
                    </span>
                    <span>
                        Phone:<a href='#'> 0036 985 745 63</a>
                    </span>
                    <span>
                        Email:<a href='#'>Email: qi67@example.com</a>
                    </span>
                </div>

                <div>
                    <h3>
                    BROOKLYN
                    </h3>
                    <span>
                        Address:<a href='#'>158 E Broadway, New York</a>
                    </span>
                    <span>
                        Phone:<a href='#'> 0036 985 745 63</a>
                    </span>
                    <span>
                        Email:<a href='#'>Email: qi67@example.com</a>
                    </span>
                </div>


            </div>


            <div className='Message_Box'>
               <div>
               <h3>
                    SEND US A MESSAGE
                </h3>
                <textarea placeholder='Message'></textarea>
                <input placeholder='Name'></input>
                <input placeholder='Email'></input>
                <button>Submit</button>
               </div>
            </div>
        </div>
    )

}
export default Contact_Info