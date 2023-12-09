import axios from "axios";
import { useEffect, useState } from "react";

export function ApiCall(){
    const [products, setProducts] = useState([]);
    function loadData(){
        axios.get(`data/products.json`)
        .then(resp => {
            setProducts(resp.data);
        })
        .catch(error =>{
            console.error(error);
        });
    }

    useEffect(() =>{
        loadData();
    },[]);
    return (
        <div className="container-fluid">
            {
              products.length? products.map(product => <div className="bg-info m-2 p-1 border border-dark" key={product.id}>{product.title}</div>) : 'Loading...'
            }
        </div>
    );
}