import './Banner.css'

function Banner_Box() {

  const Banner_Data = [
    {
      name: 'MARCHINGS SETS',
      description: 'Lorem ipsum dolor sit amet consec, tetur Sed ut perspiciatis'
    },
    {
      name: `MEN'S JACKETS`,
      description: 'Lorem ipsum dolor sit amet consec, tetur Sed ut perspiciatis'
    },
    {
      name: 'ACCESSEORIES',
      description: 'Lorem ipsum dolor sit amet consec, tetur Sed ut perspiciatis'
    },

  ]

  return (
    <div className="Banner_Box_Container">
      <div className="Banner_Box">
        {Banner_Data.map((e) => {
          return (
            <div className='Banner'>
              <div className='Banner_Info'>
                <div>
                  <h3>{e.name}</h3>
                </div>
                <div>
                  <p>{e.description}</p>
                </div>
                <div>
                  <button>Shop now</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Banner_Box