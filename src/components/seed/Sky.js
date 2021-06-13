import React, { useEffect, useState } from 'react';
import Sunset from './Sunset'
import { useSelector } from 'react-redux'
import { selectHour } from '../../redux/hourSlice'
const Sky = () => {
    const [sun, setSun] = useState({transform: "translateY(-150px)"})
    const [sky, setSky] = useState({opacity: 0})
    const [sunSet, setSunSet] = useState(0);
    let hour = useSelector(selectHour);

    useEffect(() => {
        console.log("checking hour", hour);
       setSun(hour <= 6 || hour >= 18 ?  {transform: "translateY(150px)"} : {transform: "translateY(-150px)"});
       setSky(hour <= 6 || hour >= 20 ?  {opacity: 1.0} : {opacity: 0});
       setSunSet(hour <= 7 || hour >= 19 ? 1.0 : 0);
    },[hour])

    const clickSky = () => {
        console.log("Sky");
    }

    return (
        <button 
            onClick={clickSky}
            className="z-0 mx-auto lg:mr-auto h-full bg-blue-400 relative absolute w-full overflow-hidden focus:outline-none">
            {/* <div className="absolute w-screen transition" style={ hour <== 6 && hour >== 16 ? {transform: "translateY(200px)"} : {transform: "translateY(0px)"}}> */}
            <div className="absolute w-screen transition duration-slow" style={sun}>
                <div className="w-20 h-20 bg-yellow-200 shadow-glow rounded-full mx-auto">

                </div>
            </div>
            <div className="bg-blue-900 w-full h-full absolute transition top-0 duration-5000 z-20" style={sky}></div>
            <Sunset sunSet={sunSet} />
        </button> 
    )   
}

export default Sky;
