import { error } from "jquery";
import React, { useState } from "react";

export const Products = () =>{
    const [data, setData] = useState(null);
    fetch(`https://fakestoreapi.com/products`)
    .then((resp) => resp.json())
    .then((json) => {setData(json)})
    .catch((error) =>{
        console.log(error);
    });
    return (
        <React.Fragment>
            {
                data? <ul className="list-group">{
                    data.map((product, index) => <li key={index} className="list-group-item text-start">{product.title}</li>)
                    }</ul>: 'Loading....'
            }
        </React.Fragment>
    );
};