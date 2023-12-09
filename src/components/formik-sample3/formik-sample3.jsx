import { useFormik } from "formik";
import { useState } from "react";

export function FormikSample3(){
    const [formData, setFormData] = useState({});
    const formik = useFormik({
        initialValues: {
            productName: '',
            productPrice: 0,
            deliverTo: -1
        },
        onSubmit: (values) =>{
            console.log(values);
            setFormData(values);
        },
        validate: (values) =>{
            const error =  {};
            if(!values.productName){
                error.productName = 'Product name is required';
            }
            if(!values.productPrice){
                error.productPrice = 'Product price is required';
            }
            if(values.deliverTo === -1){
                error.deliverTo = 'Delivered to is required';
            }
            
           return error;
        }
    });
    return (
        <div className="container-fluid">
            <form className="w-25 mt-2 ms-auto me-auto border border-success" onSubmit={formik.handleSubmit}>
                <h2 className="bg-info text-white text-center border border-success">Product Details</h2>
                <dl className="p-2">
                    <dt>
                        Product Name:
                    </dt>
                    <dd>
                        <input type="text" onChange={formik.handleChange} name="productName" className="form-control" />
                    </dd>
                    <dd className="text-danger">{formik.errors.productName}</dd>
                    <dt>
                        Product Price:
                    </dt>
                    <dd>
                        <input type="number" onChange={formik.handleChange} name="productPrice" className="form-control" />
                    </dd> 
                    <dd className="text-danger">{formik.errors.productPrice}</dd>
                    <dt>
                        Deliver To:
                    </dt>
                    <dd>
                        <select name="deliverTo" onChange={formik.handleChange} className="form-select">
                            <option value="-1">Select</option>
                            <option>Pune</option>
                            <option>Mumbai</option>
                            <option>Nagpur</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.deliverTo}</dd>
                    <dd>
                        <button type="submit" className="btn btn-primary w-100">Save</button>
                    </dd>                                        
                </dl>
                <code>
                    {JSON.stringify(formData)}
                </code>
            </form>

        </div>
    );
}