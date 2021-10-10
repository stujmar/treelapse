import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectMode } from '../../redux/gameSlice';
import { selectHour } from '../../redux/hourSlice';

const Star = ({starData}) => {

    const [opacity, setOpacity] = useState(1);

    let mode = useSelector(selectMode);
    let hour = useSelector(selectHour);

    useEffect(() => {
        setOpacity(hour <= 6 || hour >= 20 ?  1.0 : 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
     },[hour])

    const handleStarClick = () => {
        console.log(starData, mode);
    }

    return (
        <div 
            key={`${starData.x} + ${starData.y}`} 
            className="absolute w-1 h-1 focus:outline-none bg-white border transition duration-slow rounded-full"
            onClick={() => {handleStarClick()}}
            style={{
                left: `${starData.x}%`, 
                top: `${starData.y}%`, 
                opacity: opacity,
                zIndex: 90
            }}
            ></div>
    );
}

export default Star;
