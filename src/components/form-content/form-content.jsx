import { useEffect } from "react";
import { useState } from "react";

export function FormContent(){
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                setProducts(json);
            });
    }, []);
    function submitHandler(ev){
        ev.preventDefault();
        console.log(ev.target.elements);
        for(let key in ev.target.elements){
            console.log("------");
            console.log(key);
            console.log(ev.target.elements[key]);
        }

    }
    return (
        <div className="container-fluid">
        <div className="col-lg-8 col-md-8 col-xs-12 offset-md-2 offset-lg-2">
            <form action="" onSubmit={submitHandler}>
                <dl>
                    <dt>First Name</dt>
                    <dd>
                        <input type="text" name="firstName" className="form-control" />
                    </dd>
                    <dt>Last Name</dt>
                    <dd><input type="text" name="lastName" className="form-control" /></dd>
                    <dd>
                        <button className="btn btn-primary me-1" name="add">Add</button>
                        <button className="btn btn-primary me-1" name="update">Update</button>
                        <button className="btn btn-primary me-1" name="delete">Delete</button>
                    </dd>
                </dl>
            </form>

            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length? products.map((product, index) => <tr key={'p'+index}><td>{product.title}</td><td>{product.price.toLocaleString('en-IN',{style:'currency', currency:'INR'})}</td></tr>) : <tr><td colSpan={2}> No Record Found</td></tr>
                    }
                </tbody>
            </table>
        </div>
        </div>
    );
}