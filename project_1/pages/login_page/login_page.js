const errorMessageElement = document.getElementById('errorMessage')

const validateEmail=(email)=> {
    var re = /\S+@\S+\.\S+/
    return re.test(email)
}

const validatePassword=(str)=>{
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    return re.test(str)
}

const validateForm = ()=>{
    const emailValue = document.forms["loginForm"]['email'].value
    const passwordValue = document.forms["loginForm"]['password'].value
    const isEmailValid = validateEmail(emailValue)
    
    if(!isEmailValid){
        errorMessageElement.textContent = 'Email is not valid'
        return
    }

    const isPasswordValid = validatePassword(passwordValue)
    if(!isPasswordValid) {
        errorMessageElement.textContent = 'Password does not contain at least 8 letter password, with at least a symbol, upper and lower case letters and a number'
        return
    }

    errorMessageElement.textContent = ''

    // bone requestin ne BACK - END
    
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: email,
            password: passwordValue,
        })
    })
    .then(res => res.json())
    .then((response)=>{
        console.log(response)
    })
    .catch(err=>{
        errorMessageElement.textContent = 'This email or password is not valid!'
    })
    
    return true
}
