export const ValidateFormField = (formData) => {
    let error = {}
    if (!formData.name) {
        error.name = 'Name is required';
    }

    if (!formData.email) {
        error.email = 'Email is required';
    } 
    

    if (!formData.password) {
        error.password = 'Password is required';
    } else if (formData.password.length < 6) {
        error.password = 'Password must be at least 6 characters';
    }

    return error;
}