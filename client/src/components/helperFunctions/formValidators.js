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


export const formatDate = (inputDate) => {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    const date = new Date(inputDate);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear() % 100; // Extract last two digits of the year

    let daySuffix = "th";
    if (day === 1 || day === 21 || day === 31) {
        daySuffix = "st";
    } else if (day === 2 || day === 22) {
        daySuffix = "nd";
    } else if (day === 3 || day === 23) {
        daySuffix = "rd";
    }

    const formattedDate = `${day}${daySuffix} ${month.toLowerCase()}`;
    return formattedDate;
}
