let login = document.querySelector('#login')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let errors = document.querySelectorAll('.error')

flags = {
    btn: true, 
    confines: [false, false]
}

function txtCnt (txt, clRem, clAd, fl, index, p, i){
    p.textContent = txt
    i.classList.remove(clRem)
    i.classList.add(clAd)
    flags['confines'][index]=fl
}

// проверка на пустоту поля
function zero(i, p, index){
    if (i.value.trim()===''){ 
        txtCnt('No Content!', 'done', 'errorI', 'false', index, p, i)
    }else{
        txtCnt('', 'errorI', 'done', 'true', index, p, i)
    }
}

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// проверка EMAIL
email.addEventListener('change', ()=>{
    if(!validateEmail(email.value)){
        txtCnt('Enter your email correctly!', 'done', 'errorI', 'false', 0, errors[0], email)
    }
    else{
        txtCnt('', 'errorI', 'done', 'true', 0, errors[0], email)
    }
})

// проверка PASSWORD
password.addEventListener('input', ()=>{
    const lower = /[a-z]/g
    const upper = /[A-Z]/g
    const numbers = /[0-9]/g

    if(!password.value.match(lower)){
        txtCnt('Missing lowercase characters!', 'done', 'errorI', 'false', 1, errors[1], password)
    }else if(!password.value.match(upper)){
        txtCnt('Missing capital characters!', 'done', 'errorI', 'false', 1, errors[1], password)
    }else if(!password.value.match(numbers)){
        txtCnt('Add numbers to your password!', 'done', 'errorI', 'false', 1, errors[1], password)
    }else if(password.value.length < 8){
        txtCnt('Password less than 8 characters!', 'done', 'errorI', 'false', 1, errors[1], password)
    }else{
        txtCnt('', 'errorI', 'done', 'true', 1, errors[1], password)
    }
})

login.addEventListener('click', ()=>{
    if(flags['confines'][0]&&flags['confines'][1]){
        login.disabled = false
    }
    else{
        login.disabled = true
    }   
})