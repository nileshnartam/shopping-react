import { useState } from "react";

export function TwoWayBinding2(){
    const [productFormData, setProductFormData] = useState({
        name: '',
        price: 0,
        stock: false,
        shippedTo: ''
    });

    const [productNewData, setProductNewData] = useState({
        name: '',
        price: 0,
        stock: false,
        shippedTo: ''
    });




    function handleNameChange(e){
        setProductFormData({
            name: e.target.value,
            price: productFormData.price,
            stock: productFormData.stock,
            shippedTo: productFormData.shippedTo
        });
    }
    function handlePriceChange(e){
        setProductFormData({
            name: productFormData.name,
            price: Number(e.target.value),
            stock: productFormData.stock,
            shippedTo: productFormData.shippedTo
        });
    }

    function handleStockChange(e){
        setProductFormData({
            name: productFormData.name,
            price: productFormData.price,
            stock: e.target.value,
            shippedTo: productFormData.shippedTo
        });
    }
    function handleShippedToChange(e){
        setProductFormData({
            name: productFormData.name,
            price: productFormData.price,
            stock: productFormData.stock,
            shippedTo: e.target.value
        });
    }

    function handleUpdate(){
        
        setProductNewData(productFormData);
    }

    return (
        <>
            <div className="text-center h2 p-1 text-dark bg-light">Product Details</div>
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-lg-3 col-md-3 col-xs-12">
                        <dl>
                            <dt>Name</dt>
                            <dd>
                                <input type="text" name="" id="" value={productFormData.name} className="form-control" onChange={handleNameChange}/>
                            </dd>
                            <dt>Price</dt>
                            <dd>
                                <input type="text" name="" id="" value={productFormData.price} className="form-control" onChange={handlePriceChange}/>
                            </dd>
                            <dt>Stock</dt>
                            <dd>
                            <input type="checkbox" checked={productFormData.stock} onChange={handleStockChange}/>
                            </dd>
                            <dt>Shiped To</dt>
                            <dd>
                                <select name="" id="" className="form-select" onChange={handleShippedToChange} value={productFormData.shippedTo}>
                                    <option>HYD</option>
                                    <option>NGP</option>
                                    <option>PUN</option>
                                    <option>MUB</option>
                                </select>
                            </dd>
                            <dd>
                                <button type="button" className="btn btn-primary w-100" onClick={handleUpdate}>Update</button>
                            </dd>                                                                                  
                        </dl>
                    </nav>
                    <section className="col-lg-9 col-md-9 col-xs-12">
                        <dl>
                            <dt>Name</dt>
                            <dd>{productNewData.name}</dd>
                            <dt>Price</dt>
                            <dd>{productNewData.price.toLocaleString('en-in',{style:'currency', currency: 'INR'})}</dd>
                            <dt>Stock</dt>
                            <dd>{productNewData.stock? <span class="label label-default"><i class="bi bi-emoji-grin"></i> Available</span> : <span class="label label-default"><i class="bi bi-emoji-grimace"></i> Out of stock</span>}</dd>
                            <dt>Shippedd To</dt>
                            <dd>{productNewData.shippedTo}</dd>
                        </dl>                      
                    </section>
                </div>
            </div>
        </>
    );
}