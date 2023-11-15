import { useState } from "react";

export function StyleBinding(){
    const [name, setName] = useState('');
    const [nameStyle, setNameStyle] = useState({
        border:'',
        shadow:''
    });

    function handleName(ev){
        setNameStyle(ev.target.value.length < 4? {
            border:'2px solid red',
            shadow:'2 2 2 red' 
        } : {
            border:'2px solid green',
            shadow:'2 2 2 green'
        });
    }

    return (
        <>
            <div className="w-12">
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name="" id="" placeholder="Name have atleast 4 char" onChange={handleName} style={nameStyle}/></dd>
                </dl>
            </div>
        </>
    );
}