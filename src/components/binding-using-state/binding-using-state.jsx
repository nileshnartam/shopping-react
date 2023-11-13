import { useState } from 'react';
import './binding-using-state.css';

export function BindingUsingState(){
    const [name, setName] = useState('komal');
    const [city, setCity] = useState('pune');
    const [edu, setEdu] = useState(['Dimploma in Engineering', 'Batchlor of Engineering']);
    return (
        <>
        <div className='h1'> {name} from {city}</div> 
        <ol>
            {edu.map(ed => <li key={ed}>{ed}</li>)}
        </ol>
        </>
    );
}