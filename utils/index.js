function isEmpty(value) {
    if (typeof value == 'undefined' || value == null || value.trim().length === 0) {
        return false
    }
    else{
        return true
    }
}

function passwordValidator(password) {
    const oneSpecialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    const oneNumericCharRegex = /(?=.*[0-9])/
    const oneCapCharRegex = /(?=.*[A-Z])/
    const oneSmallCharRegex = /(?=.*[a-z])/

    if(isEmpty(password) === false){
        return {
            message: 'User password is required!'
        };
      }
  
    if(password.length < 8){
        return {
            message: 'User password should not be less than 8 characters!'
        };
    }

    if (!oneSpecialCharRegex.test(password)) {
        return {
            message: 'User password must contain at least one special character!'
        };
    }
    if (!oneNumericCharRegex.test(password)) {
        return {
            message: 'User password must contain at least one numeric character!'
        };
    }
    if (!oneCapCharRegex.test(password)) {
        return {
            message: 'User password must contain at least one capital letter!'
        };
    }
    if (!oneSmallCharRegex.test(password)) {
        return {
            message: 'User password must contain at least one small letter!'
        };
    }

    return true;
}

function emailValidator(email) {
    if(isEmpty(email) === false){
        return {
            message: 'User email is required!'
        };
      }

    email =  String(email).toLowerCase();
    emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (!emailRegEx.test(email)) {
        return {
            message: 'User email is not valid!'
        }
    }
    
    return true;
}

exports.signUpValidator = (data) => {
    const { email, password } = data;
    const emailValidationMessage = emailValidator(email)
    const passwordValidationMessage = passwordValidator(password)

    return{
        emailValidationMessage,
        passwordValidationMessage
    }
}