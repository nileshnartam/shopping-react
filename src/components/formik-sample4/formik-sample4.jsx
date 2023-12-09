import { getIn, useFormik } from "formik";
import * as yup from "yup";

export function FormikSample4(){
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            email: '',
            gender: ''
        },
        validationSchema: yup.object({
            username: yup.string().required('Username is required'),
            password: yup.string().required('password is required').matches(/^[a-z]{6}$/, 'invalid password'),
            email: yup.string().required('Email is required').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'invalid email'),
            gender: yup.string().required('Gender is required')
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });

    function setClass(fieldName){
        return getIn(formik.errors, fieldName)? 'form-control border border-danger':'form-control';
    }
    return (
        <div className="container-fluid">
            <div className="w-25 mt-2 ms-auto me-auto border border-primary p-4">
                <form onSubmit={formik.handleSubmit}>
                    <h2 className="bg-info text-white text-center pt-2 pb-2">User Registration</h2>
                    <dl>
                        <dt>Username</dt>
                        <dd><input type="text" name="username" {...formik.getFieldProps('username')} className={setClass('username')} /></dd>
                        <dd className="text-danger">{formik.errors.username}</dd>
                        <dt>Password</dt>
                        <dd><input type="password" name="password" {...formik.getFieldProps('password')} className={setClass('password')} /></dd>
                        <dd className="text-danger">{formik.errors.password}</dd>
                        <dt>Email</dt>
                        <dd><input type="text" name="email" {...formik.getFieldProps('email')} className={setClass('email')} /></dd>
                        <dd className="text-danger">{formik.errors.email}</dd>
                        <dt>Gender</dt>
                        <dd>
                            <div className="form-check form-check-inline">
                                <input type="radio" name="gender" {...formik.getFieldProps('gender')} id="gdMale" className="form-check-input" value={'male'}/>
                                <label htmlFor="gdMale" className="form-check-label">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" name="gender" {...formik.getFieldProps('gender')} id="gdFemale" className="form-check-input" value={'female'}/>
                                <label htmlFor="gdFemale" className="form-check-label">Female</label>
                            </div>
                        </dd>
                        <dd className="text-danger">{formik.errors.gender}</dd> 
                        <dd>
                          <button type="submit" className="btn btn-primary w-100 bi bi-user" disabled={!(formik.isValid && formik.dirty)}>Register</button>
                        </dd>                                                                      
                    </dl>
                </form>
            </div>
        </div>
    );
}