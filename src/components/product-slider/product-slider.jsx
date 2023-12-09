import { useState } from "react";
import './product-slider.css';

export function ProductSlider(){
    const [slideImages, setSlideImages] = useState(['1.jpg','2.jpg','3.jpg']);
    const [preview, setPreview] = useState('1.jpg');
    function handleMouseOver(ev, imageName){
        setPreview(imageName);
    }
    return (
        <div className="container-fluid row">
            <div className="col-lg-2 col-md-2 col-x-12">
                {
                    slideImages.map(img => <div className="border border-primary mt-2" style={{width:'104px', display:'inline-block'}}><img src={'images/products/icons/'+img}  onMouseOver={(ev)=>{handleMouseOver(ev, img)}}/></div>)
                }
                
            </div>
            <div className="col-lg-10 col-md-10 col-xs-12 main" style={{overflow:'hidden'}}>
                <img src={`images/products/${preview}`} alt="" style={{width:'100%', height:'100vh'}} />
            </div>
        </div>
    );
}