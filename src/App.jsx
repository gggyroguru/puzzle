import './App.css'

import React, {useEffect, useState} from 'react';
import SplashScreen from "./components/SplashScreen.jsx";
import Modal from "./components/Modal.jsx";

const App = () => {

    const [box, setBox] = useState([])
    const [steps, setSteps] = useState(0)

    const click = (e, i) => {

        const arr = [...box]

        if (arr[i + 1] === 0) {
            arr[i + 1] = e
            arr[i] = 0
        }
        if (arr[i - 1] === 0) {
            arr[i - 1] = e
            arr[i] = 0
        }

        if (arr[i + 3] === 0) {
            arr[i + 3] = e
            arr[i] = 0
        }
        if (arr[i - 3] === 0) {
            arr[i - 3] = e
            arr[i] = 0
        }

        setBox(arr)
        setSteps(steps => steps + 1)
    }

    useEffect(() => {

        const arr = []

        while (arr.length < 9) {
            const random = Math.floor(Math.random() * 9)
            if (arr.indexOf(random) === -1) {
                arr.push(random)
            }
        }

        setBox(arr)


    }, []);

    return (
        <>
            <SplashScreen/>
            <Modal box={box} steps={steps}/>
            <div className={'w-dvw h-dvh grid place-items-center'}>
                <div className={'fixed left-0 top-6 right-0 text-center text-3xl'}>Puzzle</div>
                <div className={'w-[90%] max-w-[15rem] grid grid-cols-3 gap-1.5 border-2 border-indigo-600 p-1.5'}>
                    {
                        box.map((e, i) => (
                                <button className={`h-16 grid ${e === 0 ? 'opacity-0 transition-none' : 'opacity-100 transition-all'} place-items-center bg-indigo-600`}
                                        key={i} onClick={() => click(e, i)} disabled={e === 0}>{e}</button>
                            )
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default App;
