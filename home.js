const botao = document.getElementById('btn')

botao.addEventListener('click',menuMobile)

function menuMobile() {
    const nav = document.getElementById('nav')

    nav.classList.toggle('active')
}