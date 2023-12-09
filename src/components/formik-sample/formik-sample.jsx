import { useFormik } from "formik";
import { useState } from "react";

export function FormikSample(){
    const formik = useFormik({
        initialValues: {
            userName:'',
            password:'',
            mobile:'',
            city:'',
            gender:''
        },
        onSubmit: (values) =>{
            console.log(values);
        }
    });


    return (
        <div className="container-fluid">
            <form className="w-25" onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>Username</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="userName" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} name="password" className="form-control"/></dd> 
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="mobile" className="form-control" /></dd>  
                    <dt>City</dt>
                    <dd>
                        <select className="form-select" onChange={formik.handleChange} name="city">
                            <option>Hyd</option>
                            <option>Ngp</option>
                            <option>Mum</option>
                        </select>
                    </dd>
                    <dt>Gender</dt>
                    <dd>
                        <input type="checkbox" onChange={formik.handleChange} name="gender" value="male"/> <label>Male</label>
                        <input type="checkbox" onChange={formik.handleChange} name="gender" value="female"/> <label>Female</label>
                    </dd>
                    <button className="btn btn-primary w-100">Register</button>                            
                </dl>
            </form>
        </div>
    );
}