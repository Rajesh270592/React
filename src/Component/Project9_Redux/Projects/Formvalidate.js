import { useDispatch, useSelector } from "react-redux"
import { updateFormField, validateForm } from "../Actions/FormAction"
import { ValidateFormField } from "./ValidateFormFields"
import { useState } from "react"

export const Formvalidate = () => {
    const dispatch = useDispatch()
    const { formData, error } = useSelector((state) => state.FormReducer)
    const [form, setForm] = useState(formData)
    const handleChange = (e) => {
        const { name, value } = e.target
        // dispatch(updateFormField(name, value))
        setForm({...form,[name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const validationError = ValidateFormField(formData)
        dispatch(validateForm(validationError))
        dispatch(updateFormField(form))
        console.log('Form submitted:', form);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Enter Name" type="name" value={form.name} onChange={handleChange} />
                {error.name && <p>{error.name}</p>}
                <input name="email" placeholder="Enter Email" type="email" value={form.email} onChange={handleChange} />
                {error.email && <p>{error.email}</p>}
                <input name="password" placeholder="Enter Password" type="password" value={form.password} onChange={handleChange} />
                {error.password && <p>{error.password}</p>}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}