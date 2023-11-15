import { useState } from "react";

export function ClassBinding(){
    const [buttonClass, setButtonClass] = useState('btn btn-primary bi bi-align-bottom m-3');
    function handleClick(){
        setButtonClass(buttonClass.includes('bi-align-bottom')? 
            'btn btn-primary bi bi-align-top m-3' : 
            'btn btn-primary bi bi-align-bottom m-3');
    }
    return (
        <>
            <button type="button" className={buttonClass} onClick={handleClick}></button>
        </>
    );
}