import React from 'react';

const Barn = () => {

    let barnStyle = {
        transform: "translateY(75px)"
    }


    return (
        <div className="absolute bottom-0 left-0 z-50">
        <div className="transition" style={barnStyle}>  
            <svg width="150" height="75" viewBox="0 0 150 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M126.648 74.9844H121.559C121.559 74.9844 121.741 69.0072 125.286 68.2123C127.9 67.6273 130.124 68.5003 130.373 68.708C130.373 68.708 130.373 62.8535 135.734 62.4561C141.095 62.0587 142.019 66.3479 142.019 66.3479C142.019 66.3479 144.226 64.9591 146.314 67.1428C148.402 69.3265 147.395 71.5079 147.395 71.5079C148.038 71.8689 148.601 72.3646 149.048 72.9632C149.494 73.5619 149.815 74.2503 149.989 74.9844H126.648Z" fill="#498E1C"/>
                <path d="M83.5738 28.5308H11.8014V74.942H83.5738V28.5308Z" fill="#C62626"/>
                <path d="M139.494 74.942H82.521V28.5308L92.3184 14.1582L111.007 3.12593L128.797 14.1582L139.494 28.5308V74.942Z" fill="#C93535"/>
                <path d="M131.052 41.6307H128.797V74.8861H131.052V41.6307Z" fill="white"/>
                <path d="M96.0388 41.6307H93.7841V74.8861H96.0388V41.6307Z" fill="white"/>
                <path d="M131.052 43.9595V41.6307H93.7841V43.9595H131.052Z" fill="white"/>
                <path d="M96.0388 74.8861V71.9009L128.444 42.794L129.923 44.5535L96.0388 74.8861Z" fill="white"/>
                <path d="M128.732 74.3034V71.3181L96.3285 42.2135L94.8476 43.9707L128.732 74.3034Z" fill="white"/>
                <path d="M74.6628 41.6307H72.408V55.4763H74.6628V41.6307Z" fill="white"/>
                <path d="M74.6649 43.9595V41.6307H57.8244V43.9595H74.6649Z" fill="white"/>
                <path d="M60.0791 41.6307H57.8243V55.4763H60.0791V41.6307Z" fill="white"/>
                <path d="M74.6649 55.4741V53.1453H57.8244V55.4741H74.6649Z" fill="white"/>
                <path d="M39.3408 41.394H37.086V55.2397H39.3408V41.394Z" fill="white"/>
                <path d="M39.343 43.7228V41.394H22.5024V43.7228H39.343Z" fill="white"/>
                <path d="M24.755 41.394H22.5002V55.2397H24.755V41.394Z" fill="white"/>
                <path d="M39.3408 55.2396V52.9108H22.5002V55.2396H39.3408Z" fill="white"/>
                <path d="M86.9376 74.9978H92.3162C92.3162 74.9978 92.1259 69.0183 88.3774 68.2257C84.6288 67.433 82.9966 68.7213 82.9966 68.7213C82.9966 68.7213 82.9966 62.8669 77.3283 62.4695C71.66 62.072 71.6838 67.5313 71.6838 67.5313C71.6838 67.5313 69.3512 66.1402 67.1439 68.3239C64.9367 70.5076 65.9917 72.6913 65.9917 72.6913C65.9917 72.6913 62.8203 72.5417 62.2431 74.9978H86.9376Z" fill="#498E1C"/>
                <path d="M142.046 31.9183L143.802 30.4571L129.528 12.1596L127.772 13.6208L142.046 31.9183Z" fill="#4C3109"/>
                <path d="M108.69 2.4092L111.053 1.04272L129.521 12.142L128.393 14.1582L108.69 2.4092Z" fill="#4C3109"/>
                <path d="M111.053 1.04272L42.3695 0L23.7476 11.106L23.7433 11.1038L9.47095 29.4016L11.1528 31.4625L79.9095 31.9068L92.353 12.7449L111.053 1.04272Z" fill="#664922"/>
                <path d="M94.173 13.6126L92.4173 12.1514L78.1428 30.4489L79.8986 31.9101L94.173 13.6126Z" fill="#4C3109"/>
                <path d="M113.253 2.42037L111.053 1.04272L92.4221 12.1532L93.5506 14.1694L113.253 2.42037Z" fill="#4C3109"/>
                <path d="M78.152 30.4443L9.47095 29.4016L11.1528 31.4625L79.9095 31.9068L78.152 30.4443Z" fill="#4C3109"/>
                <path d="M121.401 18.0612H119.147V31.9068H121.401V18.0612Z" fill="white"/>
                <path d="M121.403 20.39V18.0612H104.563V20.39H121.403Z" fill="white"/>
                <path d="M106.816 18.0612H104.561V31.9068H106.816V18.0612Z" fill="white"/>
                <path d="M121.401 31.9046V29.5758H104.561V31.9046H121.401Z" fill="white"/>
                <path d="M24.6923 74.9978H30.073C30.073 74.9978 29.8806 69.0183 26.1342 68.2257C22.3878 67.433 20.7534 68.7213 20.7534 68.7213C20.7534 68.7213 20.7534 62.8669 15.0851 62.4695C9.41686 62.072 8.43755 66.3613 8.43755 66.3613C8.43755 66.3613 6.10711 64.9725 3.89773 67.1561C1.68835 69.3398 2.74548 71.5213 2.74548 71.5213C2.74548 71.5213 0.583666 72.5417 0.00213623 74.9978H24.6923Z" fill="#498E1C"/>
                <path d="M142.038 31.9068H139.494V28.5308L142.038 31.9068Z" fill="#664922"/>
            </svg>
        </div>
        </div>
    )
}

export default Barn;