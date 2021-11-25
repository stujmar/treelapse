import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectMilestones, selectResources } from '../../redux/gameSlice';

const Barn = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [woodPile, setWoodPile] = useState([]);
    let wood = useSelector(selectResources).wood;
    let isBarnUnlocked = useSelector(selectMilestones).barn;
    let barnStyle = {
        transform: isBarnUnlocked ? "translateY(0px)" : "translateY(75px)",
        "WebKitTransform": isBarnUnlocked ? "translateY(0px)" : "translateY(75px)",
        width: "150px",
        height: "72px"
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        wood = wood <= 50 ? wood : 50;
        let woodArray = Array.from({length: wood}, (v, k) => k);
        setWoodPile(woodArray.map(_pile => <div key={_pile} className="w-3 h-1 bg-orange-500 border-t border-l-2 border-orange-700 relative">
            <div className="h-1 w-1 rounded-full bg-orange-500 border border-orange-600 absolute right-0"></div>
        </div>))
    },[wood]);

    const handleBarnClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="absolute bottom-0 left-0 z-10">
            <button 
                type="button"
                aria-label="Barn"
                onClick={handleBarnClick}
                className={`block relative focus:outline-none transition duration-2000`}
                style={barnStyle}>  
                <svg className={`absolute z-30 bottom-0 ${isOpen ? " hidden": " block"}`} width="150" height="72" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M126.648 71.9848H121.559C121.559 71.9848 121.741 66.1687 125.286 65.3953C127.9 64.8261 130.124 65.6755 130.373 65.8776C130.373 65.8776 130.373 60.181 135.734 59.7943C141.095 59.4076 142.019 63.5812 142.019 63.5812C142.019 63.5812 144.226 62.2298 146.314 64.3546C148.402 66.4794 147.395 68.602 147.395 68.602C148.038 68.9533 148.601 69.4356 149.048 70.0181C149.494 70.6006 149.815 71.2705 149.989 71.9848H126.648Z" fill="#498E1C"/>
                    <path d="M83.5738 26.7838H11.8014V71.9435H83.5738V26.7838Z" fill="#C62626"/>
                    <path d="M139.494 71.9435H82.521V26.7838L92.3184 12.7988L111.007 2.06396L128.797 12.7988L139.494 26.7838V71.9435Z" fill="#C93535"/>
                    <path d="M131.052 39.5305H128.797V71.8892H131.052V39.5305Z" fill="white"/>
                    <path d="M96.0388 39.5305H93.7841V71.8892H96.0388V39.5305Z" fill="white"/>
                    <path d="M131.052 41.7965V39.5305H93.7841V41.7965H131.052Z" fill="white"/>
                    <path d="M96.0388 71.8892V68.9844L128.445 40.6624L129.923 42.3744L96.0388 71.8892Z" fill="white"/>
                    <path d="M128.732 71.3222V68.4174L96.3285 40.0975L94.8476 41.8074L128.732 71.3222Z" fill="white"/>
                    <path d="M74.6628 39.5305H72.408V53.0028H74.6628V39.5305Z" fill="white"/>
                    <path d="M74.6649 41.7943V39.5283H57.8243V41.7943H74.6649Z" fill="white"/>
                    <path d="M60.0791 39.5305H57.8243V53.0028H60.0791V39.5305Z" fill="white"/>
                    <path d="M74.6649 53.0006V50.7346H57.8243V53.0006H74.6649Z" fill="white"/>
                    <path d="M39.3408 39.3002H37.086V52.7725H39.3408V39.3002Z" fill="white"/>
                    <path d="M39.3429 41.5662V39.3002H22.5024V41.5662H39.3429Z" fill="white"/>
                    <path d="M24.755 39.3002H22.5002V52.7725H24.755V39.3002Z" fill="white"/>
                    <path d="M39.3408 52.7703V50.5043H22.5002V52.7703H39.3408Z" fill="white"/>
                    <path d="M86.9376 71.9978H92.3162C92.3162 71.9978 92.126 66.1796 88.3774 65.4083C84.6288 64.6371 82.9966 65.8907 82.9966 65.8907C82.9966 65.8907 82.9966 60.1941 77.3283 59.8074C71.66 59.4206 71.6838 64.7327 71.6838 64.7327C71.6838 64.7327 69.3512 63.3791 67.144 65.5039C64.9367 67.6287 65.9917 69.7535 65.9917 69.7535C65.9917 69.7535 62.8203 69.608 62.2431 71.9978H86.9376Z" fill="#498E1C"/>
                    <path d="M142.046 30.0799L143.802 28.6582L129.528 10.8541L127.772 12.2758L142.046 30.0799Z" fill="#4C3109"/>
                    <path d="M108.69 1.36657L111.053 0L129.521 10.8369L128.393 12.7988L108.69 1.36657Z" fill="#4C3109"/>
                    <path d="M111.053 0H42.3695L23.7476 9.82667L23.7433 9.8245L9.47093 27.6311L11.1528 29.6365L79.9095 30.0688L92.3529 11.4214L111.053 0Z" fill="#664922"/>
                    <path d="M94.173 12.2678L92.4173 10.8461L78.1428 28.6502L79.8986 30.072L94.173 12.2678Z" fill="#4C3109"/>
                    <path d="M113.253 1.37743L111.053 0L92.4221 10.8456L93.5506 12.8097L113.253 1.37743Z" fill="#4C3109"/>
                    <path d="M78.1519 28.6457L9.47093 27.6311L11.1528 29.6364L79.9095 30.0688L78.1519 28.6457Z" fill="#4C3109"/>
                    <path d="M121.401 16.5965H119.147V30.0688H121.401V16.5965Z" fill="white"/>
                    <path d="M121.403 18.8604V16.5943H104.563V18.8604H121.403Z" fill="white"/>
                    <path d="M106.816 16.5965H104.561V30.0688H106.816V16.5965Z" fill="white"/>
                    <path d="M121.401 30.0666V27.8006H104.561V30.0666H121.401Z" fill="white"/>
                    <path d="M24.6923 71.9978H30.0731C30.0731 71.9978 29.8807 66.1796 26.1342 65.4083C22.3878 64.6371 20.7535 65.8907 20.7535 65.8907C20.7535 65.8907 20.7535 60.1941 15.0852 59.8074C9.41689 59.4207 8.43758 63.5942 8.43758 63.5942C8.43758 63.5942 6.10714 62.2429 3.89776 64.3677C1.68838 66.4925 2.74551 68.6151 2.74551 68.6151C2.74551 68.6151 0.583694 69.608 0.00216484 71.9978H24.6923Z" fill="#498E1C"/>
                    <path d="M142.038 30.0688H139.494V26.7838L142.038 30.0688Z" fill="#664922"/>
                </svg>
                <div className="left-6 z-20 absolute bottom-0">
                    <div className="grid grid-cols-5 row-end-auto transform rotate-180">
                        {woodPile}
                    </div>
                </div>
                <svg className="absolute z-10 bottom-0" width="150" height="72" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.10438 72C3.10438 72 3.16705 71.2548 4.03178 70.5139C4.58776 70.0578 5.24842 69.7486 5.95364 69.6145L4.69547 67.6722C4.61981 67.431 4.52685 66.7684 5.39157 65.9341C5.55607 65.755 5.75422 65.6103 5.97462 65.5085C6.19502 65.4067 6.43328 65.3498 6.67568 65.341C6.91879 65.3421 7.1592 65.3924 7.3826 65.4887L10.0589 67.2268L10.541 64.1026C10.6145 63.8723 11.0382 62.7469 12.5148 62.2298L13.9654 61.7214V27.9201H12.0197L25.1463 11.5452L42.9078 2.17261H110.473L128.088 12.5077L140.423 27.894H137.336L137.444 71.987L3.10438 72Z" fill="#B27F2D"/>
                    <path d="M147.406 68.602C147.406 68.602 148.407 66.4772 146.325 64.3546C144.243 62.232 142.029 63.5811 142.029 63.5811C141.839 62.9157 141.516 62.296 141.08 61.7597C140.644 61.2235 140.104 60.7817 139.494 60.4613V30.0666H142.04L143.796 28.6457L129.528 10.8304L111.059 -0.00436401H42.3781L23.7541 9.82231L9.48605 27.6376L11.168 29.6408H11.8165V60.1875C9.02775 61.1652 8.45488 63.5964 8.45488 63.5964C8.45488 63.5964 6.12228 62.245 3.91506 64.3676C1.70784 66.4903 2.76063 68.6172 2.76063 68.6172C2.76063 68.6172 0.598825 69.6101 0.0172958 72H30.0904C30.0904 72 30.0904 71.9782 30.0904 71.9435H62.2799C62.2799 71.9609 62.2798 71.9782 62.2647 71.9978H92.3183C92.3183 71.9978 92.3183 71.9761 92.3183 71.9435H121.566C121.566 71.9674 121.566 71.9848 121.566 71.9848H150.004C149.83 71.2701 149.508 70.6 149.061 70.0175C148.613 69.4349 148.05 68.9528 147.406 68.602Z" fill="#664922"/>
                    <path d="M3.10438 72C3.10438 72 3.16705 71.2548 4.03178 70.5139C4.58776 70.0578 5.24842 69.7486 5.95364 69.6145L4.69547 67.6722C4.61981 67.431 4.52685 66.7684 5.39157 65.9341C5.55607 65.755 5.75422 65.6103 5.97462 65.5085C6.19502 65.4067 6.43328 65.3498 6.67568 65.341C6.91879 65.3421 7.1592 65.3924 7.3826 65.4887L10.0589 67.2268L10.541 64.1026C10.6145 63.8723 11.0382 62.7469 12.5148 62.2298L13.9654 61.7214V27.9201H12.0197L25.1463 11.5452L42.9078 2.17261H110.473L128.088 12.5077L140.423 27.894H137.336L137.444 71.987L3.10438 72Z" fill="#B27F2D"/>
                    <path d="M13.8724 71.9978L13.8724 36.0739H11.7992L11.7992 71.9978H13.8724Z" fill="#664922"/>
                    <path d="M8.43974 63.5964C8.43974 63.5964 6.10713 62.245 3.89992 64.3676C1.6927 66.4903 2.74551 68.6173 2.74551 68.6173C2.74551 68.6173 0.583681 69.6101 0.00215149 72H11.8035V60.1876C9.01263 61.1652 8.43974 63.5964 8.43974 63.5964Z" fill="#498E1C"/>
                    <path d="M13.8746 72L13.9632 61.7301V27.9201H12.0132L25.1398 11.5474L42.9035 2.17261H110.469L92.4999 12.3078L79.0123 29.1607L82.0865 29.0933V71.9935L13.8746 72Z" fill="#99682E"/>
                    <path d="M139.494 72L150 71.9848C149.826 71.2705 149.505 70.6006 149.058 70.0181C148.612 69.4356 148.049 68.9533 147.406 68.602C147.406 68.602 148.407 66.4772 146.325 64.3546C144.243 62.232 142.029 63.5812 142.029 63.5812C141.839 62.9157 141.516 62.296 141.08 61.7597C140.644 61.2235 140.104 60.7817 139.494 60.4613V72Z" fill="#498E1C"/>
                    <path d="M130.92 27.9201L117.651 12.3056H128.083V10.75H115.934L106.619 4.35606L111.083 1.63813L110.186 0.152069L92.7745 10.75H85.0935L100.226 1.54471L99.4415 0.241153L82.1816 10.7457H73.1668L88.2995 1.54036L87.5148 0.236804L70.2462 10.75H61.2314L76.3641 1.54471L75.5794 0.241153L58.3194 10.7457H49.2765L64.4092 1.54036L63.6245 0.236804L46.3645 10.7413H37.3497L52.4825 1.53603L51.6977 0.232468L34.4399 10.737H23.5509V12.2926H32.5981L19.3288 27.907H12.6942V29.4648H138.689V27.907L130.92 27.9201ZM115.861 12.5381L128.935 27.9201H117.953L104.684 12.3056H115.523L115.861 12.5381ZM83.9391 23.3098L87.8563 27.9179H80.0219L83.9391 23.3098ZM84.9335 22.1388L91.5055 14.4065L102.989 27.9179H89.8452L84.9335 22.1388ZM92.4999 13.2311L93.0101 12.6315L93.5549 12.2991H102.689L115.96 27.9136H104.978L92.4999 13.2311ZM113.253 10.7435H103.188L99.4783 8.69691L105.198 5.22075L113.253 10.7435ZM97.9823 9.62244L100.043 10.7609H96.1123L97.9823 9.62244ZM91.0169 12.3165L77.7477 27.931H69.0701L82.1362 12.5533L82.5448 12.3056L91.0169 12.3165ZM80.3505 12.3165L67.0813 27.931H57.1369L70.1964 12.5641L70.605 12.3165H80.3505ZM68.4129 12.3165L55.1437 27.931H45.1993L58.2589 12.5641L58.6674 12.3165H68.4129ZM56.4754 12.3165L43.2061 27.931H33.2618L46.3213 12.5641L46.7299 12.3165H56.4754ZM34.3794 12.5641L34.788 12.3165H44.5378L31.2685 27.931H21.3242L34.3794 12.5641Z" fill="#664922"/>
                    <path d="M83.1241 72V29.4778H81.0509V72H83.1241Z" fill="#664922"/>
                    <path d="M81.0574 71.9978V29.4756L13.8746 29.4756V71.9978H81.0574Z" fill="#99682E"/>
                </svg>
            </button>
        </div>
    )
}

export default Barn;