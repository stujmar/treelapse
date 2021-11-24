import React, { useState, useEffect } from 'react';
import { getRandomId } from '../../utils/getRandomId';

import { useSelector, useDispatch } from 'react-redux';
import {
    setMouse,
    selectMouse,
    resetResource, 
    updateSeeds, 
    selectMode, 
    setMode, 
    selectResources,
    setGrassLoaded,
    toggleDebug,
    selectSandboxMode
    } from '../../redux/gameSlice';
import { addTree, addBranch, resetTrees, ageTrees, selectTrees, growTreeById} from '../../redux/treeSlice';
import { resetStars } from '../../redux/skySlice';
import { selectHour } from '../../redux/hourSlice';
import { selectDay } from '../../redux/daySlice';

import Sky from '../sky/Sky';
import Tree from './Tree';
import HUD from './HUD';
import { setSpeed } from '../../redux/clockSlice';
import Well from '../farm/Well';
import Barn from '../farm/Barn';
import DebugPanel from '../debug/DebugPanel';
import { coinFlipRatio } from '../../utils/coinFlip';
import { getNumberWithinRange, getRandomInt } from '../../utils/getRandomInt';

const Game = ( { messageChange, toggleGraph } ) => {
    const MAX_TREE_HEIGHT = 15;

    const [ drawTrees, setDrawTrees ] = useState([]);
    const [ hasLoaded, setHasLoaded ] = useState(false);

    let hour = useSelector(selectHour);
    let isSandbox = useSelector(selectSandboxMode);
    let day = useSelector(selectDay);
    let mode = useSelector(selectMode);
    let trees = useSelector(selectTrees);
    let mouse = useSelector(selectMouse);
    let resources = useSelector(selectResources);
    let seeds = resources.seeds;
    const dispatch = useDispatch();

    // const handleDelete = (id) => {
    //     dispatch(updateSeeds(1));
    //     dispatch(removeTree(id));
    // } 

    const messageCenter = {
        "welcome": <p><span  className="font-medium">Great! you are in "planting mode".</span><br/> Click below to plant a seed.</p>,
        "first_seed" : "Wow, you are planting now!",
        "first_water" : "Yum that tree was thirsty!",
        "no_seeds" : "Oops all out of seeds",
        "no_water" : "Oops all out of water",
        "no_trees" : "Oops all out of trees! Switch to planting mode",
    };

    let grass = document.getElementById('grass');

    if (!!grass && !hasLoaded) {
        dispatch(setGrassLoaded({ clientHeight: grass.clientHeight, clientWidth: grass.clientWidth}));
        setHasLoaded(true);
        console.log('grass loaded:', grass);
    }
    // grass ? dispatch(setGrassLoaded({ clientHeight: grass.clientHeight, clientWidth: grass.clientWidth})) : dispatch(setGrassLoaded(false)); 

    useEffect(() => {
        messageChange(messageCenter.welcome);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]
    )

    useEffect(() => {
        if (!!trees.length) {
            dispatch(ageTrees());
            // For each tree.
            trees.forEach((tree) => {
                if (tree.age > 10 && coinFlipRatio(0.01)) {
                    let newId = "tree_" + getRandomId();
                    dispatch(addTree({
                        id: newId,
                        birthday: tree.birthday,
                        x: getNumberWithinRange(tree.x - 5, tree.x + 5),
                        y: getNumberWithinRange(tree.y - 5, tree.y + 5),
                        age: 0,
                        growth: []
                    }))
                }
                growTree(tree);
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[hour])

    function growTree(tree) {
        if (coinFlipRatio(0.25) && tree.growth.length <= MAX_TREE_HEIGHT) {
            // updated some data on the tree.
            let updatedTree = { id: tree.id, growth: {id: "trunk_" + getRandomId(), left: 0, right: 0}};
            // and send it off to the tree.
            dispatch(growTreeById(updatedTree)); 
        } else if (tree.growth.length > 2 && tree.growth.length <= MAX_TREE_HEIGHT) {
            let growthIndex = getRandomInt(0, tree.growth.length - 3);
            let growthSide = coinFlipRatio(0.5) ? "left" : "right";
            let growthProfile = {treeId: tree.id, growthIndex: growthIndex, growthSide: growthSide};
            dispatch(addBranch(growthProfile));
        }
    }

    useEffect(() => {
        let sortedTrees = trees.slice().sort((a, b) => {
            return a.y - b.y
        }); // frozen in strict mode?
        setDrawTrees(sortedTrees.map(tree => {
            return <Tree key={tree.id} treeData={tree} onWater={handleWater} />
        }));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[trees])

    const handleMouseMove = (e) => {
        if (!!grass) { // Shot in the dark to avoid "Cannot read property 'clientWidth' of null"
            dispatch(setMouse({
                x:e.nativeEvent.offsetX > 0 ? e.nativeEvent.offsetX : 0,
                y:e.nativeEvent.offsetY > 0 ? e.nativeEvent.offsetY : 0,
                xMax: grass.clientWidth,
                yMax: grass.clientWidth
                
            }))
        }
    }

    const handleStrayClick = (e) => {
        if (trees.length === 0 && mode === "HARVEST") {
            messageChange(messageCenter.no_trees);
        }
    }

    const handleWater = (treeData) => {
        growTree(treeData);
    }

    const plant = (e) => {
        messageChange(messageCenter.first_seed);
        if (seeds > 0 || isSandbox) {
            // Set Trees in Redux state.
            let newId = "tree_" + getRandomId();
            dispatch( addTree({
                id: newId,
                birthday: day,
                x: parseInt((mouse.x/grass.clientWidth* 100).toFixed()),
                y: parseInt((mouse.y/grass.clientHeight * 100).toFixed()),
                age: 0,
                growth: []
            }) );
            if (!isSandbox) {
                dispatch(updateSeeds(-1));
            }
        }
    }

    const handleToggleDebug = () => {
        dispatch(toggleDebug());
    }

    const reset = () => {
        dispatch(resetTrees());
        dispatch(resetStars());
        dispatch(resetResource('seeds'));
        dispatch(resetResource('water'));
        dispatch(resetResource('stars'));
        dispatch(setSpeed(1000));
        dispatch(setMode("NO_MODE"));
    }

    return (
        <div className="overflow-hidden">
            <div className="w-full relative overflow-hidden" style={{height: "100px"}}> {/* SKY FIELD */}
                <Barn />
                <Well />
                <Sky />
            </div>
                <div 
                    className="mx-auto lg:mr-auto w-full z-10 relative"
                    onClick={() => handleStrayClick()}
                    > {/* Gameboard Wrapper */}
                        <div 
                            id="grass"
                            aria-label="Grass field"
                            className={`absolute top-0 opacity-0 bg-black z-10 w-full ${seeds ? "seed-cursor" : "no-seed-cursor"} ${mode === "PLANTING" ? "" : "hidden" }`} 
                            style={{height: "calc(100vh - 324px)"}}
                            onMouseMove={(e) => handleMouseMove(e)}
                            onClick={(e) => plant(e)} 
                            ></div> {/* Grass Mouse Sensor */}
                            {drawTrees} 
                            <div 
                                className="mx-auto bg-green-500 w-full h-72 overflow-hidden"
                                style={{height: "calc(100vh - 324px)"}}
                                ></div>
                        <HUD toggleGraph={toggleGraph} toggleDebug={toggleDebug} reset={reset} />
                        
                </div> 
            {grass ? <DebugPanel handleClose={handleToggleDebug} /> : <></>}
        </div>
    )
}

export default Game;