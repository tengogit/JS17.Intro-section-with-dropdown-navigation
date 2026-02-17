const body =document.body
const openBtn= document.getElementById('burger-btn')
const closeBtn = document.getElementById('close-btn')
const burgerMenu=document.getElementById('burger-menu')
const main =document.getElementById('main')

function burger() {
burgerMenu.classList.toggle('show-burger')
main.classList.toggle('blur')
body.classList.toggle('no-scroll')

}

openBtn.addEventListener('click', burger)
closeBtn.addEventListener('click', burger)