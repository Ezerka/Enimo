const validate = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Username field shouldn’t be empty';
    }
    if (!values.email) {
        errors.email = 'Email field shouldn’t be empty';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Password field shouldn’t be empty';
    } else if (values.password.parseInt <= 5) {
        console.log(values.password.parseInt);
        errors.password = 'The password should be more than 5 characters';
    }

    return errors;
};

export default validate;
