import React from 'react';
import { useSelector } from 'react-redux';
import { selectMilestones, selectSandboxMode } from '../../redux/gameSlice';
// import { starsColorSVG } from '../gameBoard/store/storeSvgs';

const Observatory = () => {
    let isSandbox = useSelector(selectSandboxMode);
    let isStarsUnlocked = useSelector(selectMilestones).stars;

    return (
        <div className={`z-10 absolute bottom-0 right-4 focus:outline-none no-select transition duration-2000`}>
            { isSandbox || isStarsUnlocked ?
                <svg width="99" height="100" viewBox="0 0 99 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.4285 99.781H34.6234C34.6234 99.781 34.4019 93.1157 30.0886 92.2321C25.7753 91.3485 23.8937 92.7846 23.8937 92.7846C23.8937 92.7846 23.8937 86.2587 17.3677 85.8156C10.8418 85.3726 9.71429 90.1538 9.71429 90.1538C9.71429 90.1538 7.03123 88.6057 4.48755 91.0374C1.94387 93.4691 3.16093 95.9057 3.16093 95.9057C3.16093 95.9057 0.672023 97.0432 0.00250244 99.781H28.4285Z" fill="#498E1C"/>
<path d="M16.1432 99.7088H55.2367L55.2367 53.9922L16.1432 53.9922L16.1432 99.7088Z" fill="#B9B6CC"/>
<path d="M52.128 99.7088H88.103V53.9922L52.128 53.9922L52.128 99.7088Z" fill="#9F97C6"/>
<path d="M52.123 20.6954C71.9946 20.6954 88.103 35.609 88.103 54.0046H16.1407C16.1407 35.5966 32.2515 20.6954 52.123 20.6954Z" fill="#938F93"/>
<path d="M34.1381 25.1506C39.6766 22.2051 45.8575 20.6746 52.1305 20.6954C72.0021 20.6954 88.1104 35.609 88.1104 54.0047H52.1305C52.1305 41.6646 44.8902 30.9 34.1381 25.1506Z" fill="#828282"/>
<path d="M68.0596 99.7088H72.0594V53.9922H68.0596V99.7088Z" fill="#938F93"/>
<path d="M72.1091 99.7088H76.1088V53.9922H72.1091V99.7088Z" fill="#828282"/>
<path d="M24.3243 47.1278H37.0825C37.0825 47.1278 41.5078 22.7911 65.18 23.0873C65.18 23.0873 59.7043 19.9885 51.0951 20.6431C51.0951 20.6431 30.2703 24.0729 24.3243 47.1278Z" fill="#605858"/>
<path d="M59.321 21.126C59.321 21.126 56.1004 20.2847 50.7342 20.6431C45.3706 21.696 28.9338 28.0353 24.3243 47.1278H26.4598C26.4598 47.1278 28.6998 37.1099 36.7141 29.5759C41.804 24.7972 50.1344 21.0115 59.321 21.126Z" fill="#828282"/>
<path d="M24.3367 37.2318L28.8168 41.7119C29.8497 42.7074 34.1953 39.987 38.5435 35.6389C42.8916 31.2907 45.6021 26.9426 44.619 25.9221L40.1389 21.4421L24.3367 37.2318Z" fill="#9F97C6"/>
<path d="M34.4169 39.2877C35.0192 38.8247 35.6464 38.312 36.286 37.7495L30.0637 31.5272L28.3588 33.2321L34.4169 39.2877Z" fill="#ADA7D6"/>
<path d="M36.3084 37.7296C36.8925 37.2202 37.4832 36.6751 38.0806 36.0944L31.7786 29.7924L30.0737 31.4948L36.3084 37.7296Z" fill="#B9B6CC"/>
<path d="M20.6656 33.5606L25.1456 38.0407C26.1785 39.0363 30.5217 36.3159 34.8723 31.9652C39.223 27.6146 41.9309 23.2714 40.9453 22.2385L36.4652 17.7585L20.6656 33.5606Z" fill="#938F93"/>
<path d="M13.6144 31.7437L19.8367 37.966C21.2728 39.3374 27.3035 35.5692 33.3516 29.5286C39.3997 23.488 43.1605 17.4473 41.7891 16.0137L35.5667 9.79141L13.6144 31.7437Z" fill="#9F97C6"/>
<path d="M27.6171 34.5985C28.4559 33.9564 29.327 33.2421 30.218 32.463L21.5566 23.8016L19.1871 26.1686L27.6171 34.5985Z" fill="#ADA7D6"/>
<path d="M30.2479 32.4357C31.0568 31.7263 31.8806 30.9647 32.7095 30.1608L23.9485 21.4048L21.5815 23.7717L30.2479 32.4357Z" fill="#B9B6CC"/>
<path d="M9.49028 27.6171L15.7126 33.8394C17.1462 35.2083 23.1793 31.4426 29.2249 25.3995C35.2705 19.3564 39.0363 13.3207 37.6649 11.8846L31.4426 5.66231L9.49028 27.6171Z" fill="#938F93"/>
<path d="M3.82797 26.2183L11.2549 33.6502C12.9698 35.2855 20.1777 30.788 27.3931 23.5726C34.6085 16.3572 39.106 9.13682 37.4707 7.4344L30.0388 0.00495911L3.82797 26.2183Z" fill="#9F97C6"/>
<path d="M20.5486 29.6282C21.5441 28.8616 22.5895 28.0079 23.6523 27.077L13.3108 16.7355L10.4834 19.5629L20.5486 29.6282Z" fill="#ADA7D6"/>
<path d="M23.6995 27.0447C24.6652 26.1984 25.6484 25.29 26.6365 24.3292L16.183 13.8757L13.3456 16.7131L23.6995 27.0447Z" fill="#B9B6CC"/>
<path d="M20.3579 16.5294C27.5982 9.28904 32.1037 2.05566 30.4212 0.373158C28.7387 -1.30935 21.5054 3.19615 14.265 10.4365C7.02472 17.6768 2.51923 24.9102 4.20173 26.5927C5.88424 28.2752 13.1176 23.7697 20.3579 16.5294Z" fill="#B9B6CC"/>
<path d="M27.4802 1.98366C28.9064 3.40981 25.2103 9.41559 19.227 15.399C13.2436 21.3823 7.23781 25.0759 5.81414 23.6522C4.39048 22.2286 6.62552 14.5428 12.6089 8.5594C18.5923 2.57602 26.0541 0.559996 27.4802 1.98366Z" fill="#605858"/>
<path d="M21.8486 5.36195C22.9498 4.7262 23.677 3.92421 23.4728 3.57065C23.2687 3.21709 22.2106 3.44585 21.1094 4.0816C20.0083 4.71735 19.2811 5.51934 19.4852 5.8729C19.6893 6.22646 20.7475 5.9977 21.8486 5.36195Z" fill="#B9B6CC"/>
<path d="M19.3647 8.89841C20.3549 8.10082 20.95 7.1965 20.6939 6.87855C20.4378 6.56061 19.4275 6.94944 18.4373 7.74703C17.447 8.54462 16.8519 9.44894 17.108 9.76688C17.3641 10.0848 18.3744 9.696 19.3647 8.89841Z" fill="#B9B6CC"/>
<path d="M17.5245 6.92814C18.0384 6.51425 18.3473 6.04508 18.2145 5.88022C18.0817 5.71536 17.5575 5.91724 17.0437 6.33113C16.5298 6.74501 16.2209 7.21417 16.3537 7.37903C16.4865 7.54389 17.0107 7.34202 17.5245 6.92814Z" fill="#B9B6CC"/>
<path d="M38.7725 78.2493H27.6992V99.7088H38.7725V78.2493Z" fill="#938F93"/>
<path d="M27.6967 78.2493H24.3367V99.7088H27.6967V78.2493Z" fill="#828282"/>
<path d="M79.9119 94.3228C80.2623 93.7162 80.7726 93.2177 81.3871 92.8814C82.0016 92.5452 82.6967 92.3843 83.3964 92.4162C83.3964 92.4162 84.8897 88.1851 88.5211 88.205C92.2694 87.8391 92.9165 91.8015 92.9165 91.8015C92.9165 91.8015 94.4597 90.5172 95.9207 92.5357C96.3463 93.1059 96.6362 93.7657 96.7682 94.4649C96.9002 95.1641 96.8708 95.8841 96.6823 96.5702C96.6823 96.5702 98.1159 97.5111 98.4967 99.781H79.2374C79.2374 99.781 78.6724 96.4906 79.9119 94.3228Z" fill="#498E1C"/>
</svg> : null}
        </div>
    )
}

export default Observatory;