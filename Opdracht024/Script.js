let toggleNavStatus = false;

const getNav = document.querySelector(".nav");
const getUl = document.querySelector(".nav-color");
const getLinks = document.querySelectorAll("nav-color a");

let toggleNav = function (){
    
    if (toggleNavStatus === false) {
        getNav.style.visibility = "visible"
        getNav.style.width = "200px"
        toggleNavStatus = true
    } else if (toggleNavStatus === true) {
        getNav.style.visibility = "hidden"
        getNav.style.width = "50px"
        toggleNavStatus = false
    }}




const red = document.querySelector("#Red")
const toggleColorRed = function(){document.body.classList.toggle('red-background')}
red.addEventListener('click', toggleColorRed)

const orange = document.querySelector("#Orange")
const toggleColorOrange = function(){document.body.classList.toggle('orange-background')}
orange.addEventListener('click', toggleColorOrange)
orange.addEventListener('click', toggleNav())

const yellow = document.querySelector("#Yellow")
const toggleColorYellow = function(){document.body.classList.toggle('yellow-background')}
yellow.addEventListener('click', toggleColorYellow)

const green = document.querySelector("#Green")
const toggleColorGreen = function(){document.body.classList.toggle('green-background')}
green.addEventListener('click', toggleColorGreen)

const blue = document.querySelector("#Blue")
const toggleColorBlue = function(){document.body.classList.toggle('blue-background')}
blue.addEventListener('click', toggleColorBlue)

const indigo = document.querySelector("#Indigo")
const toggleColorIndigo = function(){document.body.classList.toggle('indigo-background')}
indigo.addEventListener('click', toggleColorIndigo)

const violet = document.querySelector("#Violet")
const toggleColorViolet = function(){document.body.classList.toggle('violet-background')}
violet.addEventListener('click', toggleColorViolet)

