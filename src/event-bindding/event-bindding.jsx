import { useState } from "react";

export function EventBindding(){
    const [msg, setMsg] = useState('');
    function handleClick(ev){
        setMsg(ev.target.name);
    }
    return (
        <>
            <div className="btn-group m-4">
                <button type="button" name="insert" className="btn btn-primary" onClick={handleClick}>Insert</button>
                <button type="button" name="update" className="btn btn-warning" onClick={handleClick}>Update</button>
                <button type="button" name="delete" className="btn btn-success" onClick={handleClick}>Delete</button>
            </div>
            <div class="alert alert-primary w-25 m-4 text-center" role="alert">
                {msg}
            </div>
        </>
    );
}