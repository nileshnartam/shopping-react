import { useState } from "react";

export function TextBinding(){
    const [appliedFont, setAppliedFont] = useState({
        fontFamily: 'Arial',
        color: '#000000',
        fontSize: 5
    });

    const [appliedChangeFont, setAppliedChangeFont] = useState({
        fontFamily: 'Arial',
        color: '#000000',
        fontSize: '5px'
    });


    function handleFontFamilyChange(ev){
        console.log(ev.target.value);
        setAppliedFont({
            fontFamily: ev.target.value,
            color: appliedFont.fontColor,
            fontSize: appliedFont.fontSize
        })
    }
    function handleFontColorChange(ev){
        console.log(ev.target.value);
        setAppliedFont({
            fontFamily: appliedFont.fontFamily,
            color: ev.target.value,
            fontSize: appliedFont.fontSize
        })
    }
    function handleFontSizeChange(ev){
        console.log(ev.target.value);
        setAppliedFont({
            fontFamily: appliedFont.fontFamily,
            fontColor: appliedFont.color,
            fontSize: ev.target.value
        })
    }

    function handleApply(ev){
           
        setAppliedChangeFont({
            fontFamily:appliedFont.fontFamily, 
            color: appliedFont.color, 
            fontSize: appliedFont.fontSize+'px'
        });
    }
    return (
        <div className="container-fluid">
           <div className="row">
           <div className="col-lg-3 col-md-3 col-xs-12">
             <fieldset>
                <legend>Text Formatting</legend>
                <dl>
                    <dt>Font Family</dt>
                    <dd>
                        <select className="form-select" value={appliedFont.fontFamily} onChange={handleFontFamilyChange}>
                            <option>Arial</option>
                            <option>Verdana</option>
                            <option>Brush Script MT</option>
                        </select>
                    </dd>

                    <dt>Font Color</dt>
                    <dd>
                        <input type="color"  value={appliedFont.color} onChange={handleFontColorChange}/>
                    </dd> 
                    <dt>Font Size</dt>
                    <dd>
                     5 <input type="range" className="form-range" min="5" max="100" step="5" id="customRange2" value={appliedFont.fontSize} onChange={handleFontSizeChange} /> 100
                    </dd> 
                    <dt></dt> 
                    <dd>
                        <button type="button" className="btn btn-primary w-100" onClick={handleApply}>Apply</button>    
                    </dd>                                     
                </dl>
             </fieldset>
            </div> 
            <div className="col-lg-9 col-md-9 col-xs-12 d-flex justify-content-center align-items-center" style={{height:'50vh'}}>
                <div style={appliedChangeFont}>sample text</div>
            </div>
           </div>
        </div>
    );
}