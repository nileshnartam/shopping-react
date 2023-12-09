import { useState } from "react";

export function PasswordStrength(){
    const [password, setPassword] = useState('');
    const [meterValue, setMeterValue] = useState(0);
    const [meterTextStyle, setMeterTextStyle] = useState({
        display: 'none'
    });
    const [meterText, setMeterText] = useState('');

    function handleKeyUp(e){
        const value = e.target.value;
        if(value.match(/(?=.*[A-Z])(?=.*[0-9])\w{4,15}/)) {
            setMeterValue(100);
            setMeterText('Strong');
        } else {
            if(value.length<4){
                setMeterValue(32);
                setMeterText('Poor');
            } else {
                setMeterValue(65);
                setMeterText('Weak');
            }
        }
        setPassword(value);
    }
    return (
        <>
            <div className="w-50 m-auto">
                <dl>
                    <dt>Password</dt>
                    <dd>
                        <input type="password" name="password" className="form-control" onKeyUp={handleKeyUp} />
                    </dd>
                    <dt></dt>
                    <dd>
                     <meter id="fuel" className="w-100" min="0" max="100" low="33" high="66" optimum="80" value={meterValue} />
                     <div style={meterTextStyle}>{meterText}</div>
                     {password}
                    </dd>
                </dl>
            </div>
        </>
    );
}