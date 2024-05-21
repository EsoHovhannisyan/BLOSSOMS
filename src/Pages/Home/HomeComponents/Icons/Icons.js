import './Icons.css'


const Icons = () => {

    const Services = [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="30px" viewBox="0 0 32 30" xml:space="preserve">
            <path fill="none" stroke="#232323" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.9256" d="  M20.333,11.344l4.646-0.064c0.704-0.01,1.919,0.722,2.328,1.295l2.381,3.354c0.718,1.01,1.13,2.309,1.13,3.553v3.781  c0,0.712-0.576,1.296-1.278,1.296h-0.724c-0.605-2.161-2.564-3.744-4.891-3.744c-2.323,0-4.284,1.583-4.887,3.744h-6.076  c-0.603-2.161-2.564-3.744-4.888-3.744c-2.325,0-4.286,1.583-4.889,3.744H2.459c-0.7,0-1.276-0.583-1.276-1.296v-7.402  c0,0.713,0.578,1.296,1.276,1.296h16.597c0.699,0,1.277-0.586,1.277-1.296V11.344L20.333,11.344z"></path>
            <path fill="none" stroke="#232323" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.9256" d="  M23.925,23.572c1.45,0,2.625,1.19,2.625,2.659s-1.175,2.66-2.625,2.66c-1.446,0-2.621-1.191-2.621-2.66S22.479,23.572,23.925,23.572  L23.925,23.572z"></path>
            <path fill="none" stroke="#232323" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.9256" d="  M8.075,23.572c1.447,0,2.622,1.19,2.622,2.659s-1.174,2.66-2.622,2.66c-1.45,0-2.623-1.191-2.623-2.66S6.625,23.572,8.075,23.572  L8.075,23.572z"></path>
            <path fill="none" stroke="#232323" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.9256" d="  M2.459,1.109h16.597c0.703,0,1.277,0.585,1.277,1.295v13.311c0,0.71-0.578,1.295-1.277,1.295H2.459  c-0.699,0-1.276-0.583-1.276-1.295V2.404C1.183,1.691,1.757,1.109,2.459,1.109L2.459,1.109z"></path>
        </svg>`,
            name: 'Free delivery'
        },
        {
            icon: ` <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="31px" viewBox="0 0 28 31" xml:space="preserve">
            <path fill="none" stroke="#232323" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.9256" d="  M14.113,30.053C6.334,26.727,1.082,20.419,1.082,13.18c0-3.709,0.044-7.425,0.044-11.137c1.167,1.355,3.515,2.282,6.222,2.282  c3.238,0,5.962-1.325,6.765-3.126c0.802,1.801,3.525,3.126,6.766,3.126c2.707,0,5.054-0.926,6.221-2.282  c0,3.712,0.044,7.428,0.044,11.137C27.144,20.419,21.893,26.727,14.113,30.053L14.113,30.053z"></path>
            <polyline fill="none" stroke="#232323" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.9256" points="  8.635,14.834 13.681,20.606 20.814,9.839 "></polyline>
        </svg>`,
            name: 'secure payment'
        },
        {
            icon: ` <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="36px" height="35px" viewBox="0 0 36 35" xml:space="preserve">
            <path fill="none" stroke="#232323" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.9256" d="  M24.592,14.345c2.182,1.791,3.535,4.264,3.535,6.997c0,3.041-1.676,5.761-4.309,7.574l0.846,4.227  c0.076,0.378-0.215,0.688-0.637,0.685l-3.711-0.021c-0.42-0.001-0.813-0.314-0.893-0.692l-0.461-2.169  c-0.932,0.187-2.203,0.288-3.203,0.288c-1,0-2.273-0.102-3.202-0.288l-0.462,2.169c-0.08,0.377-0.474,0.691-0.894,0.692l-3.71,0.021  c-0.421,0.003-0.717-0.307-0.636-0.685l0.845-3.927c-1.675-0.519-2.963-1.779-3.678-3.518H2.213c-0.517,0-1.125,0-1.125-0.749V20.75  c0-0.743,0.423-1.199,1.095-1.199h1.408c0.326-1.467,1.049-2.82,2.071-3.984c-0.156-1.983-1.095-2.906-1.979-4.583  c3.124-0.366,5.263,0.314,6.593,1.421c0.819-0.32,1.772-0.567,2.758-0.729 M34.75,18.854c-2.314,0.968-5.432-1.74-4.742-3.62  c0.588-1.602,2.154-1.217,2.729-0.25c0.805,1.359,0.172,2.756-0.598,4.12c-0.34,0.604-1.699,2.352-3.98,0.682"></path>
            <path fill="none" stroke="#232323" stroke-width="1.44" stroke-miterlimit="22.9256" d="M20.439,1.125  c3.107,0,5.627,2.514,5.627,5.616c0,3.101-2.52,5.615-5.627,5.615c-3.109,0-5.629-2.515-5.629-5.615  C14.811,3.639,17.33,1.125,20.439,1.125L20.439,1.125z"></path>
            <path fill="none" stroke="#232323" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.9256" d="  M18.959,9.131c0.465,0.233,0.986,0.303,1.514,0.283c1.857-0.062,1.947-2.578-0.174-2.59c-2.223-0.012-2.146-2.521-0.139-2.588  c0.504-0.018,0.969,0.057,1.42,0.288 M7.709,18.624c-0.318,0.319-0.56,0.637-0.757,0.988"></path>
        </svg>`,
            name: 'Cost efficient'
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="30px" viewBox="0 0 32 30" xml:space="preserve">
            <path fill="none" stroke="#232323" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.9256" d="  M20.333,11.344l4.646-0.064c0.704-0.01,1.919,0.722,2.328,1.295l2.381,3.354c0.718,1.01,1.13,2.309,1.13,3.553v3.781  c0,0.712-0.576,1.296-1.278,1.296h-0.724c-0.605-2.161-2.564-3.744-4.891-3.744c-2.323,0-4.284,1.583-4.887,3.744h-6.076  c-0.603-2.161-2.564-3.744-4.888-3.744c-2.325,0-4.286,1.583-4.889,3.744H2.459c-0.7,0-1.276-0.583-1.276-1.296v-7.402  c0,0.713,0.578,1.296,1.276,1.296h16.597c0.699,0,1.277-0.586,1.277-1.296V11.344L20.333,11.344z"></path>
            <path fill="none" stroke="#232323" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.9256" d="  M23.925,23.572c1.45,0,2.625,1.19,2.625,2.659s-1.175,2.66-2.625,2.66c-1.446,0-2.621-1.191-2.621-2.66S22.479,23.572,23.925,23.572  L23.925,23.572z"></path>
            <path fill="none" stroke="#232323" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.9256" d="  M8.075,23.572c1.447,0,2.622,1.19,2.622,2.659s-1.174,2.66-2.622,2.66c-1.45,0-2.623-1.191-2.623-2.66S6.625,23.572,8.075,23.572  L8.075,23.572z"></path>
            <path fill="none" stroke="#232323" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.9256" d="  M2.459,1.109h16.597c0.703,0,1.277,0.585,1.277,1.295v13.311c0,0.71-0.578,1.295-1.277,1.295H2.459  c-0.699,0-1.276-0.583-1.276-1.295V2.404C1.183,1.691,1.757,1.109,2.459,1.109L2.459,1.109z"></path>
        </svg>`,
            name: 'Next day delivery'
        }
    ]

    return (
            <div className='Services'>
                {Services.map((e) => {
                    return (
                        <div className='Service'>
                            <div dangerouslySetInnerHTML={{ __html: e.icon }} />
                            <h3>{e.name}</h3>
                        </div>
                    )
                })}
            </div>
    )
}
export default Icons