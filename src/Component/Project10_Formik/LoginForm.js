import React from 'react'
import { useFormik } from 'formik'
import { LoginSchema } from './Schema/LoginSchema';
import { useDispatch, useSelector } from 'react-redux';
import { FetchApi } from '../Project9_Redux/Actions/LoginAction';

const initialValues = {
    name: "",
    email: "",
    password: ""
}
function LoginForm() {
    //   let data =  useSelector((state)=>state.Login_Reducer)
    let dispatch = useDispatch()
    let formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm()
            dispatch(FetchApi(values))

        },
        validationSchema: LoginSchema
    })
    // console.log(formik);
    return (

        <div>
            <form onSubmit={formik.handleSubmit}>
                <input type='text'
                    placeholder='Enter Full Name'
                    name='name' value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}></input>
                {
                    formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : null
                }




                <br />

                <input type='text'
                    placeholder='Enter Email'
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}></input>
                {
                    formik.errors.email && formik.touched.email ? <p>{formik.errors.email}</p> : null
                }

                <br></br>
                <input type='number'
                    placeholder='Enter Mobile number'
                    name='number' value={formik.values.number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}></input>
                {
                    formik.errors.number && formik.touched.number ? <p>{formik.errors.number}</p> : null
                }
                <br />
                <input type='text'
                    placeholder='Enter Password'
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}></input>
                {
                    formik.errors.password && formik.touched.password ? <p>{formik.errors.password}</p> : null
                }

                <br /><br />
                <button>Register</button>
            </form>
        </div>
    )
}

export default LoginForm