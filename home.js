/*const botao = document.getElementById('btn')

botao.addEventListener('click',menuMobile)

function menuMobile() {
    const nav = document.getElementById('nav')

    nav.classList.toggle('active')
}*/
/*
const $menu = document.querySelector('.menu')
const $navBar = document.querySelectorAll('.nav-bar')[0]
var isOpen = false
$menu.addEventListener('click',toggleMenu)

function toggleMenu(){
    $navBar.classList.toggle('menu-opened');

    if (isOpen==false) {
        $navBar.classList.add('menu-opened')
        isOpen = true
    }else{
        $navBar.classList.remove('menu-opened')
        isOpen = false
    }
}
*/
const btn = document.querySelector('.menu')
            const $navBar = document.querySelector('.nav-bar')
            btn.addEventListener('click',toggleMenu)

            function toggleMenu() {
                $navBar.classList.toggle('sumi')
            }