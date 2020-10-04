import React, { useState } from 'react';

function Slides({slides}) {
    const len = slides.length;
    const [current, setCurrent] = useState(0);
    const [disp, setDisp] = useState(false)
    const [disn, setDisn] = useState(false)
    const [dis, setDis] = useState(false)

    const restart = () => {
        setCurrent(0)
        setDis(true)
        setDisp(true)
        setDisn(false)
    }
    // if(current===1) setDis(false)
    const prev = () => {
        if(current<1) {
            //setCurrent(len-1)
            setDisp(true)
        }
        else {
            setCurrent(current - 1)
            setDisp(false)
            setDisn(false)
            setDis(false)
        }
    }
    const next = () => {
        if(current===len-1) {
            //setCurrent(0)
            setDisn(true)
        }
        else {
            setCurrent(current + 1)
            setDisn(false)
            setDisp(false)
            setDis(false)
        }
    }
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" disabled={dis} onClick={restart}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={prev} disabled={disp}>Prev</button>
                <button data-testid="button-next" className="small" onClick={next} disabled={disn}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[current].title}</h1>
                <p data-testid="text">{slides[current].text}</p>
            </div>
        </div>
    );

}

export default Slides;
