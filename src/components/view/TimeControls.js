import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTime, getDate } from '../../utils/dateTimeConverters';
import { selectDay } from '../../redux/daySlice';
import { selectHour } from '../../redux/hourSlice';
import { selectSeason, setSeason } from '../../redux/seasonSlice';

const TimeControls = () => {
    let [speed, setSpeed] = useState(1000);
    const day = useSelector(selectDay);
    const hour = useSelector(selectHour);
    const season = useSelector(selectSeason);
    let stop = 123456789;

    const dispatch = useDispatch();

    const changeSeason = (_season) => {
        dispatch(setSeason(_season));
        console.log(season);
    }

    const changeSpeed = (_speed) => {
        setSpeed(_speed);
    }

    return (    
        <div className="flex w-screen justify-between px-4 py-2">
            <div className="flex md:flex-col w-max items-start"> {/* LEFT SECTION */}
                <div>{getDate(day)}</div>
                <div className="ml-2 md:ml-0">{getTime(hour)}</div>
            </div>
            <div className="flex flex-col items-end"> {/*RIGHT SECTION*/}
                    <div className="flex items-start"> {/*SPEED CONTROLS*/}
                        <button className="focus:outline-none" type="button" onClick={() => changeSpeed(stop)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={speed === stop ? 3 : 1} d="M6 18L18 6M6 6l12 12" /> */}
                            <line strokeLinecap="round" strokeLinejoin="round" strokeWidth={speed === stop ? 3 : 1} x1="9" y1="5" x2="9" y2="18" />
                            <line strokeLinecap="round" strokeLinejoin="round" strokeWidth={speed === stop ? 3 : 1} x1="17" y1="5" x2="17" y2="18" />
                        </svg>
                        </button>
                        <button className="focus:outline-none" type="button" onClick={() => changeSpeed(1000)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={speed === 1000 ? 3 : 1} d="M9 5l7 7-7 7" />
                        </svg>
                        </button>
                        <button className={`${speed === 500 ? "font-bold": "font-normal"} focus:outline-none`} type="button" onClick={() => changeSpeed(500)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={speed === 500 ? 3 : 1} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                <div className="mt-3 flex gap-2"> {/* SEASON CONTROLS */}
                    <button className="focus:outline-none select-none" type="button" onClick={() => changeSeason("SPRING")}>
                    <svg className="hover:opacity-75" width="23" height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                        <path d="M11.0552 8.22599C9.59069 8.6584 8.6501 9.59992 8.21768 11.081C7.80005 10.9489 7.38057 10.8306 6.97125 10.6847C5.76363 10.255 4.65857 9.64427 3.71612 8.76281C3.17375 8.25555 2.72655 7.68362 2.52143 6.95553C2.22484 5.89667 2.45676 4.9302 3.07674 4.05059C3.6727 3.20701 4.4747 2.64986 5.5003 2.45582C6.48709 2.26918 7.36763 2.53344 8.14469 3.14972C8.86908 3.72443 9.42253 4.44789 9.88544 5.24158C10.4204 6.15908 10.7872 7.14402 11.0496 8.17055C11.0543 8.1881 11.0533 8.20566 11.0552 8.22599Z" fill="white"/>
                        <path d="M8.2223 12.9355C8.65194 14.4037 9.59254 15.3443 11.0644 15.7777C11.0108 15.9708 10.9609 16.1639 10.9036 16.3551C10.523 17.6311 9.97137 18.8221 9.12594 19.8616C8.71293 20.3698 8.26111 20.8392 7.68363 21.1644C6.69221 21.7225 5.66846 21.7567 4.64933 21.2688C3.48513 20.7117 2.72933 19.7997 2.45953 18.5246C2.27104 17.6348 2.47801 16.8125 2.98988 16.0687C3.4491 15.4007 4.05984 14.887 4.72509 14.4361C5.79135 13.7135 6.97033 13.2515 8.2223 12.9355Z" fill="white"/>
                        <path d="M12.9364 15.7674C13.6331 15.5845 14.2346 15.2482 14.74 14.7428C15.2454 14.2374 15.5817 13.6368 15.7665 12.9281C16.0409 13.0076 16.3107 13.0796 16.5777 13.1637C17.8233 13.5582 18.9791 14.1237 19.9816 14.9738C20.4917 15.4062 20.9564 15.8792 21.2539 16.49C21.7963 17.6024 21.6965 18.689 21.0645 19.7229C20.4612 20.7097 19.5899 21.35 18.4368 21.5533C17.4832 21.7215 16.6267 21.4591 15.8737 20.8668C15.0911 20.2524 14.5071 19.4698 14.0239 18.6077C13.5342 17.7336 13.1942 16.8004 12.9456 15.8321C12.9429 15.8164 12.9419 15.7998 12.9364 15.7674Z" fill="white"/>
                        <path d="M12.9244 8.2316C13.0113 7.93409 13.0871 7.64673 13.1785 7.364C13.5703 6.15361 14.1219 5.02822 14.9451 4.04789C15.3859 3.52308 15.87 3.04446 16.4946 2.73863C17.4168 2.28774 18.3546 2.28312 19.2832 2.70167C20.2958 3.15811 21.0156 3.91299 21.3935 4.95984C21.8259 6.15915 21.5848 7.25497 20.7818 8.22699C20.124 9.02344 19.2979 9.61201 18.3897 10.0897C17.5831 10.5138 16.7312 10.8215 15.8488 11.0451C15.8248 11.0515 15.8007 11.0562 15.7656 11.0645C15.5845 10.3669 15.2464 9.76077 14.7382 9.25443C14.2337 8.75087 13.6322 8.41455 12.9244 8.2316Z" fill="white"/>
                        <path d="M14.9285 11.9995C14.9285 13.6285 13.6165 14.9313 11.9774 14.9313C10.3798 14.9313 9.06224 13.6035 9.06409 11.9958C9.06594 10.3844 10.3844 9.07056 12.0005 9.07056C13.6165 9.07056 14.9276 10.3817 14.9285 11.9995Z" fill="white"/>
                        <path d="M2.29696 8.62146C3.78917 10.4481 5.77754 11.4137 8.03294 11.9995C7.79363 12.066 7.58944 12.1205 7.38709 12.1806C5.99744 12.5936 4.70205 13.196 3.56649 14.1126C3.12391 14.4702 2.70998 14.8582 2.36534 15.3128C2.30805 15.3877 2.26 15.3683 2.19533 15.3442C1.16603 14.958 0.495231 14.2225 0.191246 13.1812C-0.201439 11.8396 -0.000938496 10.5914 0.925799 9.50662C1.28984 9.07975 1.76014 8.79609 2.29696 8.62146Z" fill="white"/>
                        <path d="M12.0051 8.01446C11.8628 7.5608 11.7362 7.11175 11.581 6.67287C11.1181 5.35899 10.4593 4.15598 9.50391 3.13131C9.25536 2.86428 8.97725 2.62497 8.70283 2.3829C8.63169 2.32007 8.62245 2.27387 8.65294 2.19256C9.01236 1.23995 9.67762 0.586707 10.6293 0.255003C11.933 -0.199588 13.1739 -0.0591452 14.3011 0.769652C14.7982 1.13462 15.1364 1.62802 15.3443 2.20919C15.3646 2.26555 15.3831 2.30898 15.3175 2.36072C14.3446 3.13131 13.6229 4.10424 13.051 5.19545C12.602 6.05104 12.2795 6.9556 12.0374 7.88973C12.0291 7.93038 12.0171 7.97011 12.0051 8.01446Z" fill="white"/>
                        <path d="M11.9995 15.9568C12.1797 16.6738 12.394 17.34 12.6675 17.9867C13.196 19.235 13.913 20.3567 14.9054 21.2908C15.0273 21.4063 15.1539 21.519 15.2897 21.6161C15.3766 21.678 15.3701 21.7334 15.3387 21.8156C14.9636 22.7923 14.2724 23.4501 13.2856 23.7726C11.9875 24.1967 10.7623 24.0368 9.65815 23.2044C9.17769 22.8422 8.84968 22.3562 8.64641 21.787C8.62424 21.7251 8.61777 21.6844 8.67875 21.6364C9.53249 20.9628 10.1904 20.1239 10.7318 19.1879C11.2927 18.2177 11.6789 17.1773 11.9598 16.0954C11.9699 16.0603 11.9801 16.0242 11.9995 15.9568Z" fill="white"/>
                        <path d="M21.7003 8.61963C22.6399 8.94209 23.3172 9.5593 23.6831 10.4805C24.1996 11.7833 24.0952 13.0427 23.2978 14.2133C22.9254 14.7612 22.4034 15.129 21.7797 15.3535C21.7261 15.3729 21.6873 15.3868 21.6402 15.3267C20.9251 14.4157 20.0242 13.7282 19.018 13.1711C18.0903 12.6574 17.1017 12.2989 16.077 12.0328C16.0502 12.0263 16.0253 12.0161 15.9698 11.9976C18.216 11.4146 20.2034 10.4491 21.7003 8.61963Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    </button>
                    <button className="focus:outline-none select-none" type="button" onClick={() => changeSeason("SUMMER")}>
                    <svg className="hover:opacity-75" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8021 6.41649C15.5165 5.36816 13.8827 4.73283 12.1057 4.70952C7.84315 4.65456 4.47156 8.07266 4.39328 12.1669C4.34998 14.4034 5.28843 16.4651 6.83309 17.899C7.49008 18.5177 8.27199 19.0314 9.16797 19.3994C13.1175 21.0207 17.5208 19.0872 19.0929 15.2561C20.4102 12.0462 19.3727 8.46735 16.8021 6.41649Z" fill="white"/>
                    <path d="M24 11.9896C23.2331 11.286 22.4137 10.6765 21.5052 10.2077C22.2255 9.38667 22.7868 8.45242 23.2564 7.43823C22.1597 7.04437 21.0556 6.78125 19.9223 6.73129C20.2762 5.69878 20.4411 4.62214 20.4902 3.50553C19.4343 3.553 18.4143 3.70204 17.4367 4.01513C17.3368 2.86022 17.0653 1.59289 16.7222 0.967561C15.6972 1.45051 14.7487 2.03171 13.9219 2.77861C13.3881 1.68116 12.5854 0.482115 11.99 0C11.2606 0.797696 10.6285 1.65118 10.1539 2.60126C9.377 1.95011 8.50267 1.43302 7.56422 0.997537C7.24447 1.52628 6.95885 2.93599 6.85643 4.11505C5.79224 3.73285 4.67726 3.55716 3.52814 3.50637C3.42905 4.14336 3.72715 5.64965 4.1027 6.8004C3.07099 6.88617 2.06925 7.14096 1.07918 7.50484C1.32149 8.18763 2.02679 9.27926 2.69794 10.1044C1.70869 10.5849 0.825203 11.2335 0 11.9888C0.542919 12.5949 1.82527 13.4576 2.82534 13.9564C2.11339 14.7757 1.55631 15.6975 1.10083 16.6983C2.06592 17.0489 3.03685 17.2904 4.03692 17.3786C3.70883 18.3812 3.55145 19.417 3.51065 20.4853C4.68142 20.437 5.80556 20.2547 6.88974 19.8633C6.95219 21.0016 7.21615 22.0965 7.61835 23.1732C8.56679 22.731 9.44279 22.2023 10.228 21.5345C10.6985 22.4346 11.3005 23.2448 11.9992 24C12.7636 23.1707 13.4131 22.2805 13.8994 21.2763C14.787 22.0516 16.2509 23.0166 16.813 23.1299C17.1835 22.1073 17.435 21.0665 17.5041 19.9907C18.5933 20.3121 19.9922 20.5636 20.4885 20.4678C20.4435 19.4037 20.287 18.3662 19.9573 17.3645C21.0389 17.2779 22.4978 16.9739 23.2797 16.6192C22.7959 15.5892 22.2122 14.64 21.4603 13.8081C22.3821 13.3094 23.4621 12.5616 24 11.9896ZM19.8632 15.5734C18.1187 19.8225 13.2349 21.9675 8.8549 20.1689C7.86149 19.7609 6.99382 19.1913 6.26521 18.5044C4.55236 16.914 3.51232 14.6275 3.55978 12.147C3.64721 7.60643 7.38686 3.81529 12.1141 3.8769C14.0851 3.90272 15.8962 4.60799 17.3226 5.77039C20.1746 8.04441 21.3245 12.0137 19.8632 15.5734Z" fill="white"/>
                    </svg>
                    </button>
                    <button className="focus:outline-none select-none" type="button" onClick={() => changeSeason("FALL")}>
                    <svg className="hover:opacity-75" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                        <path d="M10.9403 23.8805C7.29051 21.3732 4.3942 23.1392 1.98723 21.1116C1.96643 21.0944 1.94743 21.0745 1.93115 21.0528C1.67155 20.7007 1.27808 19.8137 2.71176 19.6797C2.95689 19.6571 3.14594 19.5439 3.17579 19.2679C3.20564 18.9954 3.02654 18.8687 2.8194 18.751C1.97999 18.2767 1.25999 17.6685 0.645807 16.9425C0.0623825 16.2528 0.336456 15.5993 1.23285 15.4871C1.28622 15.4807 1.33958 15.4735 1.39295 15.4644C1.91215 15.383 2.04603 15.0417 1.69597 14.6416C0.696461 13.4994 0.215249 12.1434 0.0198694 10.6644C-0.0714885 9.97109 0.151027 9.77014 0.837568 9.95389C2.13648 10.3024 3.34494 10.8862 4.5742 11.4148C4.71078 11.4736 4.85641 11.5451 4.99933 11.5469C5.30597 11.5515 5.44979 11.2591 5.29602 10.9106C4.60676 9.34925 4.73068 7.76524 5.14677 6.17308C5.28788 5.63271 5.59632 5.54672 6.03321 5.91602C6.43573 6.25636 6.81925 6.61932 7.2272 6.95423C7.68127 7.32715 8.00238 7.20586 8.1064 6.62475C8.39133 5.02445 8.86531 3.49475 9.75899 2.11893C10.2646 1.33959 10.8951 0.681551 11.654 0.142083C11.9317 -0.0552394 12.1614 -0.0443776 12.4328 0.147514C13.8023 1.11421 14.6462 2.45926 15.2341 3.99349C15.5589 4.84071 15.7714 5.71779 15.9225 6.61027C15.9596 6.83113 15.9731 7.06737 16.2409 7.1606C16.5186 7.25745 16.6995 7.09453 16.8831 6.93522C17.2693 6.5985 17.651 6.25636 18.0418 5.92507C18.4136 5.61008 18.7591 5.71055 18.883 6.18847C19.2973 7.78153 19.4158 9.36916 18.7247 10.926C18.6415 11.1125 18.5773 11.2935 18.7392 11.4709C18.9165 11.6655 19.1173 11.6139 19.319 11.5234C20.4596 11.0147 21.603 10.5124 22.7951 10.1367C23.9367 9.77738 24.1357 9.95479 23.9303 11.1215C23.6924 12.4675 23.2058 13.6985 22.2705 14.7213C22.1276 14.8779 22.0453 15.0372 22.1276 15.2508C22.2108 15.4653 22.3899 15.5242 22.5943 15.5468C22.8639 15.5776 23.1334 15.6038 23.4012 15.6455C23.9348 15.7287 24.0651 16.0274 23.753 16.4637C23.0783 17.4087 22.237 18.1726 21.2339 18.7574C21.0141 18.885 20.7545 18.9882 20.7735 19.3077C20.7934 19.6317 21.0322 19.7584 21.3008 19.7675C22.702 19.8128 22.1167 20.8953 21.8834 21.2257C21.8671 21.2492 21.8481 21.271 21.8264 21.29C19.9178 22.9835 16.8605 21.5869 12.9936 23.9466C12.7657 24.086 12.4726 23.9258 12.4699 23.6587C12.4608 22.7183 12.4464 20.936 12.4364 19.9051C12.4346 19.7014 12.5739 19.6652 12.7286 19.6308C13.0081 19.5693 13.2912 19.5168 13.5635 19.4317C16.259 18.5854 18.2616 16.8013 19.9956 14.6579C20.1837 14.4253 20.2353 14.1502 19.9549 13.942C19.689 13.7446 19.471 13.8904 19.2937 14.1049C18.6795 14.8498 18.0346 15.5676 17.3091 16.2057C16.0039 17.3544 14.5521 18.2423 12.848 18.6795C12.5251 18.7628 12.4274 18.6877 12.4328 18.3491C12.4527 17.0231 12.4545 15.6961 12.4491 14.3692C12.4482 14.1112 12.516 13.9601 12.772 13.8569C13.5454 13.5446 14.2382 13.0911 14.885 12.567C15.7859 11.8375 16.4932 10.945 17.0848 9.95389C17.2395 9.69502 17.2395 9.45334 16.9772 9.28317C16.7121 9.11119 16.4887 9.21981 16.3241 9.46511C16.2318 9.60269 16.1477 9.7457 16.0582 9.8851C15.2685 11.1152 14.2256 12.0737 12.9429 12.7698C12.4807 13.0205 12.4599 13.006 12.4617 12.4865C12.4708 9.77286 12.4816 7.06013 12.4907 4.3465C12.4916 4.19624 12.497 4.04418 12.478 3.89483C12.4482 3.65768 12.3143 3.50199 12.0646 3.49747C11.7996 3.49294 11.6422 3.64591 11.6006 3.89935C11.5762 4.04689 11.5861 4.19986 11.5852 4.35012C11.5744 7.07823 11.5599 9.80725 11.5599 12.5354C11.5599 12.8992 11.4903 12.9988 11.1357 12.8069C10.0285 12.2086 9.11858 11.3895 8.36148 10.3947C8.1064 10.0598 7.89293 9.69411 7.64328 9.35468C7.48951 9.14559 7.26609 9.0949 7.04448 9.24335C6.84277 9.37821 6.81021 9.58368 6.89976 9.80454C6.93322 9.88781 6.98207 9.96565 7.0282 10.0426C8.03675 11.7307 9.40893 13.0214 11.2035 13.8442C11.4116 13.9393 11.5554 14.0325 11.5518 14.2986C11.5364 15.6699 11.5328 17.0421 11.5355 18.4134C11.5364 18.694 11.4279 18.7483 11.1773 18.6831C10.6952 18.5564 10.2221 18.4107 9.76713 18.2052C7.72469 17.2883 6.11462 15.8437 4.76415 14.085C4.56244 13.8216 4.32274 13.6786 4.036 13.8895C3.76012 14.0913 3.83519 14.3565 4.02515 14.6018C5.90929 17.0303 8.15434 18.9411 11.2488 19.6236C11.4441 19.667 11.531 19.7385 11.5283 19.9476C11.5138 21.1623 11.5047 22.3761 11.4957 23.5908C11.4939 23.8751 11.1746 24.0416 10.9403 23.8805Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    </button>
                    <button className="focus:outline-none select-none" type="button" onClick={() => changeSeason("WINTER")}>
                    <svg className="hover:opacity-75" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 16.962L20.7918 15.396L23.9043 13.9306L23.08 12.4677L18.8608 14.4537L13.7699 11.9688L18.7196 9.23277L23.0487 11.0109L23.7868 9.50992L20.5928 8.19776L23.7053 6.47766L22.7739 5.06936L19.7173 6.75915L19.9229 3.66886L18.1265 3.56839L17.8441 7.79329L12.866 10.5449L12.8347 5.32486L16.7242 2.83912L15.6924 1.49058L12.8234 3.32501L12.8035 0L11.0032 0.00866113L11.0222 3.27391L8.22613 1.52782L7.21042 2.88676L11.0345 5.27463L11.0667 10.6497L5.98721 8.17005L5.44524 3.86027L3.65732 4.04821L4.05622 7.22858L0.848006 5.66178L0 7.11425L3.15136 8.65161L0.140229 10.0694L0.964548 11.5323L5.08141 9.59394L10.1296 12.058L5.24343 14.7577L1.0195 13.0229L0.281405 14.5239L3.37118 15.7927L0.314568 17.4825L1.24595 18.8908L4.35847 17.1698L4.14528 20.3649L5.94173 20.4654L6.23071 16.1348L11.0838 13.4533L11.115 18.7349L7.32033 21.16L8.35215 22.5086L11.1274 20.7348L11.1473 24L12.9475 23.9913L12.9276 20.6663L15.8184 22.4713L16.8341 21.1124L12.9153 18.6656L12.8831 13.4022L18.0706 15.9339L18.5993 20.1389L20.3872 19.9509L20.0016 16.8754L23.152 18.4136L24 16.962Z" fill="white"/>
                    </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TimeControls;
