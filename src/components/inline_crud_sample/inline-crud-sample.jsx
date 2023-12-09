import { useState } from "react";

export function InlineCrudSample(){
    const [products, setProducts] = useState([
        {
            name: 'samsung tv',
            price: 13000
        },
        {
            name: 'lava mobile',
            price: 16000
        }
    ]);
    return (
        <div className="container-fluid">
            <div className="w-15 mt-3">
                <table className="table table-hover table-striped">
                    <thead>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {
                            products.map((product => <tr><td>{product.name}</td><td>{product.price}</td><td><button type="button" className="btn btn-success bi bi-save me-2"></button><button type="button" className="btn btn-danger bi bi-trash"></button></td></tr>))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}