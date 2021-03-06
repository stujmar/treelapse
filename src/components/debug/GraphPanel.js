import React, { useEffect, useState } from 'react';
import Graph from './Graph';

import {useDispatch, useSelector} from 'react-redux';
import {resetGame, setSandbox } from '../../redux/gameSlice';
import { selectSandboxMode } from '../../redux/gameSlice';
import { selectItems } from '../../redux/itemSlice';
import { resetTrees} from '../../redux/itemSlice';
import { resetStars } from '../../redux/skySlice';
import { setSpeed } from '../../redux/clockSlice';

import ToggleButton from './ToggleButton';


const GraphPanel = ({toggleGraph}) => {

    const dispatch = useDispatch();
    const [saveText, setSaveText] = useState(window.btoa(localStorage.reduxState));
    const [saveVisible, setSaveVisible] = useState(false);
    const [graph, setGraph] = useState("");
    let isSandbox = useSelector(selectSandboxMode);
    let trees = useSelector(selectItems);

    const toggleSandbox = () => {
        dispatch(setSandbox());
    }

    const toggleSaveVisible = () => {
        setSaveVisible(!saveVisible);
    }

    useEffect(() => {
        setGraph(<Graph key="graph" resetGame={reset} trees={trees} />);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trees]);
    

    const reset = () => {
        dispatch(resetGame());
        dispatch(setSpeed(1000));
        dispatch(resetStars());
        dispatch(resetTrees());
        localStorage.clear();
        // force a browser refresh
        window.location.reload();
    }

    const handleTextChange = (event) => {
        setSaveText(event.target.value);
    }

    const loadGame = (e) => {
        e.preventDefault();
        let decodedSave = window.atob(e.target.save.value);
        localStorage.setItem('reduxState', decodedSave);
        window.location.reload();
    }

    return (
        <div className="fixed inset-0 z-50 w-full h-full bg-green-400">
                <div className="relative h-full w-full overflow-y-auto">
                <div className="p-3 bg-green-200 text-green-700 font-bold text-center text-xl comfortaa">GAME IS PAUSED</div>
                    <div className="mx-auto my-2 mt-4 w-80 sm:w-96 flex justify-between items-baseline">
                    <div className="comfortaa font-bold text-green-900">
                    Trees: {trees.length}
                    </div>
                    <div className="flex justify-start items-center">
                        <div className="font-bold text-green-800 comfortaa mr-4">Toggle Sandbox Mode</div>
                        <ToggleButton value={isSandbox} onClick={toggleSandbox} />
                    </div>
                    </div>
                    <div className="flex justify-start items-center mx-auto w-max mt-4">
                        <div className="font-bold text-green-800 comfortaa mr-4">Toggle Experimental Save Feature</div>
                        <ToggleButton value={saveVisible} onClick={toggleSaveVisible} />
                    </div>
                    <button
                        className="fixed hover:bg-green-500 focus:outline-none left-2 top-2 rounded-full z-50 opacity-100"
                        onClick={toggleGraph}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill bg-green-500 text-white rounded-full" fill="none"  viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button> 
                    {graph}
                <form onSubmit={(e) => loadGame(e)} className={`flex flex-col px-2 max-w-4xl mx-auto my-6 ${saveVisible ? "flex" : "hidden"}`}>
                    <div className="comfortaa text-green-900 font-medium">Saved Game: paste saved game data and submit to load a previous game.</div>
                    <textarea className="bg-green-100 comfortaa text-sm" cols="30" rows="3" name="save" value={saveText} onChange={(e) => handleTextChange(e)}></textarea>
                    <div className="w-max mx-auto">
                        <button type="button" onClick={() => {navigator.clipboard.writeText(saveText)}} className="focus:outline-none bg-green-600 px-1 rounded mt-2 text-white">copy data</button>
                        <button type="submit" className="bg-green-600 px-1 ml-2 rounded mt-2 text-white">submit</button>
                    </div>
                </form>
                </div>
        </div>
    )
}

export default GraphPanel;