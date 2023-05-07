type Email = string & {__brand: 'email'};

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function isEmail(value: string): value is Email {
    return emailRegExp.test(value)
}

export {Email, isEmail}