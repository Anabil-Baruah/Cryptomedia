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
