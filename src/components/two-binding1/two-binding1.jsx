import { useState } from "react";

export function TwoWayBinding1(){
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        stock: false,
        shippedTo: ''

    });
    function handleNameChange(e){
        setProduct({
            name: e.target.value,
            price: product.price,
            stock: product.stock,
            shippedTo: product.shippedTo
        });
    }
    function handlePriceChange(e){
        setProduct({
            name: product.name,
            price: Number(e.target.value),
            stock: product.stock,
            shippedTo: product.shippedTo
        });
    }

    function handleStockChange(e){
        setProduct({
            name: product.name,
            price: product.price,
            stock: e.target.value,
            shippedTo: product.shippedTo
        });
    }
    function handleShippedToChange(e){
        setProduct({
            name: product.name,
            price: product.price,
            stock: product.stock,
            shippedTo: e.target.value
        });
    }
    return (
        <>
            <div className="h1 text-center bg-light p-2">Products Details.</div>
            <div className="row">
                <nav className="col-lg-3 col-md-3 col-xs-12">
                    <dl>
                        <dt>Product Name</dt>
                        <dd>
                            <input type="text" className="form-control" value={product.name} onChange={handleNameChange}/>
                        </dd>
                    </dl>
                    <dl>
                        <dt>Product Price</dt>
                        <dd>
                            <input type="number" className="form-control" value={product.price} onChange={handlePriceChange}/>
                        </dd>
                    </dl>
                    <dl>
                        <dt>Product Stock</dt>
                        <dd>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={product.stock} onChange={handleStockChange}/>
                                <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                            </div>                       
                        </dd>
                    </dl>                    
                    <dl>
                        <dt>Shiped to</dt>
                        <dd>
                            <select name="" id="" value={product.shippedTo} className="form-select" onChange={handleShippedToChange}>
                                <option>HYD</option>
                                <option>NGP</option>
                                <option>PUN</option>
                            </select>
                        </dd>
                    </dl>                                      
                </nav>
                <section className="col-lg-9 col-md-9 col-xs-12">
                    <dl>
                        <dt>Product Name</dt>
                        <dd>{product.name}</dd>
                    </dl>
                    <dl>
                        <dt>Product Price</dt>
                        <dd>{product.price.toLocaleString('en-in',{style:'currency', currency:'INR'})}</dd>
                    </dl>
                    <dl>
                        <dt>Product Stock</dt>
                        <dd>{product.stock? 'Available': 'out of stock'}</dd>
                    </dl>
                    <dl>
                        <dt>Delivered To</dt>
                        <dd>{product.shippedTo}</dd>
                    </dl>                                                         
                </section>
            </div>
        </>
    );
}