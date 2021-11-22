import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMode, setMode, setMessage, selectSandboxMode, selectMilestones } from '../../redux/gameSlice';
import { getMessages } from '../../utils/getMessages';

const HUD = ({onMessageChange}) => {
    const dispatch = useDispatch();
    let mode = useSelector(selectMode);
    let isSandbox = useSelector(selectSandboxMode);
    let isWaterUnlocked = useSelector(selectMilestones).water;
    let showWater = isSandbox || isWaterUnlocked
    const toggleMode = (_mode) => {
        dispatch(setMessage(getMessages[_mode]));
        dispatch(setMode(_mode));
    }

    return (
        <div className="fixed bottom-0 left-0 z-10 flex gap-1 p-3" style={{ zIndex: 49 }}>
            <button 
                className={`focus:outline-none bg-black p-1 rounded-lg ${mode === "PLANTING" ? "bg-opacity-25" : "bg-opacity-0"}`}
                onClick={() => toggleMode("PLANTING")}
                >
                <svg width="22" height="22" viewBox="0 0 24 24" className={`text-white fill-current`} xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.53662 18.2047C10.8348 15.2841 16.8138 10.5154 20.4126 5.98596C20.9286 6.70242 22.9897 8.63844 23.8473 13.596C24.3424 16.4589 23.5967 19.1028 22.1486 21.5995C21.983 21.885 21.892 22.2569 21.9025 22.5841C21.9338 23.5053 21.4715 23.8498 20.5468 23.6105C20.1963 23.5197 19.7772 23.5284 19.4253 23.6192C17.4596 24.1208 15.488 24.105 13.5178 23.6999C10.0294 22.9834 7.06156 21.3876 4.73647 18.7424C4.51425 18.4872 4.75287 18.4872 4.53662 18.2047Z" />
                    <path d="M3.51051 3.42429C2.68577 2.67468 2.77376 2.49737 1.58661 2.55215C1.33158 2.56368 1.11533 2.36907 1.09743 2.12256C1.07655 1.82127 1.17498 1.02409 1.26148 0.731451C1.47326 0.0178771 1.96691 -0.074383 2.25774 0.0423837C3.59851 0.578646 4.12795 0.708387 5.04069 1.70162C5.49109 2.19176 5.57312 2.27248 6.15924 1.94669C9.59244 0.0409421 13.1718 -0.367021 16.8078 1.33547C17.7966 1.79821 18.4901 2.26239 19.3029 3.00912C19.8592 3.52232 19.8488 4.41032 19.6087 4.76783C19.1076 5.51312 18.7332 5.79278 18.1218 6.44581C14.3261 10.5024 9.93695 13.8454 4.94375 16.4272C4.22937 16.7962 3.66562 17.184 2.89456 17.4464C2.41583 17.6093 1.84611 17.2619 1.57617 16.8308C-0.699708 13.2082 -0.399936 9.61149 1.76259 6.08686C2.30844 5.19742 2.85728 4.81973 3.54332 4.04417C3.70589 3.86253 3.69097 3.58863 3.51051 3.42429Z" />
                </svg>
            </button>
            {showWater ? <button
                className={`focus:outline-none bg-black py-1 px-1.5 rounded-lg ${mode === "WATERING" ? "bg-opacity-25" : "bg-opacity-0"}`}
                onClick={() => toggleMode("WATERING")}
                >
                <svg width="18" height="24" className={`text-white fill-current`} viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g >
                    <path d="M18 16.1163C18 20.3909 14.1251 24.0208 8.96003 24C4.00662 23.9792 0 20.6517 0 16.5483C0 9.64411 9.00392 0 9.00392 0C9.00392 0 18 8.32865 18 16.1163Z" fill="white"/>
                    </g>
                </svg>
            </button> : null}
            <button
                className={`focus:outline-none bg-black py-1 px-1 rounded-lg ${mode === "HARVEST" ? "bg-opacity-25" : "bg-opacity-0"}`}
                onClick={() => toggleMode("HARVEST")}
                >
                <svg width="26" height="24" viewBox="0 0 28 24" className={`text-white fill-current`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M13.366 4.25085C13.366 4.25085 2.2988 17.4682 0.181642 20.1375C-0.512116 21.0111 1.01445 22.5033 1.01445 22.5033C1.60355 23.2245 2.52906 23.4811 3.57119 23.7859C3.57119 23.7859 6.25352 24.5482 5.8573 23.1879L5.67937 22.5048C5.45958 21.662 5.49696 20.2709 6.0128 19.5629C6.0128 19.5629 9.21993 13.7348 11.3386 11.5595C13.4572 9.38418 16.2009 7.67943 16.2009 7.67943L13.366 4.25085Z" />
                        <path d="M26.9998 7.4054L21.0953 14.2347C21.3136 14.9529 21.4347 15.4469 21.4347 15.4469L28.0015 8.1471L26.9998 7.4054Z" />
                        <path d="M20.8292 13.4084L26.4032 6.9632L17.2348 0.167628C16.858 -0.112345 16.3197 -0.0317243 16.0431 0.344993L13.8079 3.39685C13.8079 3.39685 18.3577 8.47007 19.5209 10.4196C20.0562 11.3138 20.5017 12.4454 20.8292 13.4084Z" />
                    </g>
                </svg>
            </button>
        </div>
    )
}

export default HUD;