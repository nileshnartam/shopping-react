import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

export function FormikSample5(){
    return (
        <div className="container-fluid">
            <Formik
                initialValues={{productName:'',productPrice:0}}
                validationSchema={
                    yup.object({
                        productName: yup.string().required("Product name is required"),
                        productPrice: yup.number().required("Price is required")
                    })
                }
                onSubmit={(values) =>{ console.log(values);}}
            >
                <Form>
                    <div className="h2">Register Product</div>
                    <dl>
                        <dt>Product Name</dt>
                        <dd><Field type="text" name="productName"/></dd>
                        <dd className="text-danger"><ErrorMessage name="productName" /></dd>
                        <dt>Product Price</dt>
                        <dd><Field type="number" name="productPrice"/></dd>
                        <dd className="text-danger"><ErrorMessage name="productPrice" /></dd> 
                        <dd><button>Submit</button></dd>                       
                    </dl>
                </Form>
            </Formik>
        </div>
    );
}