const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function isEmail(value) {
    return emailRegExp.test(value);
}
export { isEmail };
