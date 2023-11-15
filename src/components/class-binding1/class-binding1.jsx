import { useState } from 'react';
import './class-binding1.css';
import { type } from '@testing-library/user-event/dist/type';
export function ClassBinding1(){
    const [darkTheme, setDarkTheme] = useState(true);
    const [outerTheme, setOuterTheme] = useState('container-fluid d-flex justify-content-center align-items-center ch-100 bg-dark');
    const [innerTheme, setInnerTheme] = useState('w-25 bg-light text-dark p-4');
    function handleThemeChange(ev){
        console.log(ev.target.checked);
        setOuterTheme(ev.target.checked? 'container-fluid d-flex justify-content-center align-items-center ch-100 bg-light': 'container-fluid d-flex justify-content-center align-items-center ch-100 bg-dark');
        setInnerTheme(ev.target.checked? 'w-25 bg-dark text-white p-4':'w-25 bg-light text-dark p-4');
    }
    return (
        <div className={outerTheme}>
            <div className={innerTheme}>
                <dl>
                    <dt></dt>
                    <dd>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" value={darkTheme} onChange={handleThemeChange}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Theme</label>
                    </div>                        
                    </dd>
                    <dt>
                        Username
                    </dt>
                    <dd>
                        <input type="text" name="" id="" className="form-control" />
                    </dd>
                    <dt>
                        Password
                    </dt>
                    <dd>
                        <input type="password" name="" id="" className="form-control" />
                    </dd>  
                    <dt>Terms</dt>
                    <dd>
                        <textarea name="" id="" cols="30" rows="5" className='form-control' disabled={true} value={`Default term and condition as below
                        1) Mutual fund subbject to market risk`} />
                       
                    </dd> 
                    <dt></dt> 
                    <dd>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Agree
                    </label>
                    </div>                        
                    </dd> 
                    <dt></dt>
                    <dd><button type="button" className="btn btn-primary w-100">Submit</button></dd>              
                </dl>
            </div>
        </div>
    );
}