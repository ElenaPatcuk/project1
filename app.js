let icons = document.querySelectorAll('.icon')
let menu = document.querySelector('#menu')

let categor = document.querySelector('#selector')
let categories = document.querySelector('.categor')
let arrow = document.querySelector('#arrow')

let menuBurger = document.querySelector('.menu-burger')
let burger = document.querySelector('.burger')

let li = document.querySelectorAll('li')

let reg = document.querySelector('#reg')


let obj = {
    flag: 'none',
}

menu.addEventListener('mouseover', ()=> {
    icons.forEach(icon => icon.style.filter='none')
})

reg.addEventListener('mouseover', ()=> {
    reg.setAttribute('src', '../icon/fan.png')
})

reg.addEventListener('mouseout', ()=> {
    reg.setAttribute('src', '../icon/sad.png')
})

menu.addEventListener('mouseout', ()=> {
    if(obj.flag === 'none'){
        icons.forEach(icon => icon.style.filter='invert(1)')
        menu.classList.remove('hover')
    }
    else{
        icons.forEach(icon => icon.style.filter='none')
        menu.classList.add('hover')
    }
})

categor.addEventListener('click', ()=>{
    let display = categories.style.display

    if(display==='none'){
        categories.style.display = 'inline-flex'
        menuBurger.style.display = 'none'
        menu.removeAttribute('style')

        arrow.style.transform = 'rotate(180deg)'
        li.forEach(l =>l.style.color = 'rgb(136, 33, 253)')

        obj.flag = 'inline-flex'
    }
    else{
        categories.style.display = 'none'
        arrow.style.transform = 'rotate(0deg)'

        obj.flag = 'none'
    }
})

burger.addEventListener('click', ()=>{
    let display = menuBurger.style.display

    if(display==='none'){
        menuBurger.style.display = 'inline-flex'
        categories.style.display = 'none'

        menu.style.backgroundColor = 'rgb(136, 33, 253)'
        li.forEach(l=>l.style.color = 'rgb(255, 255, 255)')
        obj.flag = 'inline-flex'
    }
    else{
        menuBurger.style.display = 'none'
        menu.removeAttribute('style')
        obj.flag = 'none'
    }
})

