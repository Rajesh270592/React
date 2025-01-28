import React, { useState } from 'react';
import "./RegistrationForm.css"
// import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const RegisterForm=()=>{
const formik = useFormik({
  initialValues: {
    name: '',
    email: '',
    password: '',
  },
  validationSchema: Yup.object({
    name: Yup.string().min(2).max(12).required('Required,enter valid name'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
  }),
  onSubmit: (values,action) => {
    console.log('Form data:', values);
    action.resetForm()
  },
});

return (
  <div className='form'>
  <form onSubmit={formik.handleSubmit}>
    <div>
      <label>Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div style={{ color: 'red' }}>{formik.errors.name}</div>
      ) : null}
    </div>

    <div>
      <label>Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: 'red' }}>{formik.errors.email}</div>
      ) : null}
    </div>

    <div>
      <label>Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div style={{ color: 'red' }}>{formik.errors.password}</div>
      ) : null}
    </div>

    <button type="submit">Submit</button>
  </form>
  </div>
);
}