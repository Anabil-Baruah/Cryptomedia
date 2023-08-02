// Custom validation function to compare the two passwords
export const validatePassword = (_, value, callback) => {
    const { getFieldValue } = form;
    const confirmPassword = getFieldValue('retypePassword');

    if (value !== confirmPassword) {
        callback('Passwords do not match!');
    } else {
        callback();
    }
};

export     const handleFormSubmit = (values) => {
        // setLoading(true)

        console.log(values)
        let apiUrl = isLogin ? '/api/auth/login' : '/api/auth/signUp';
        apiUrl = `http://localhost:8080${apiUrl}`
        console.log(apiUrl)
        axios.post(apiUrl, values)
            .then(response => {
                // Handle successful response
                console.log('Response:', response);
                message.success('User registered successfully!');
            })
            .catch(error => {
                // Handle error
                console.error('Error:', error);
                message.error('Error registering user.');
            })
            .finally(() => {
                setLoading(false);
            });
    }
