const buttonAlert = document.querySelector('#mybutton')
buttonAlert.addEventListener('click', function(e){alert("button clicked")
})

/*const changeColor = function(){document.body.classList.add('red-background')}

const button2 = document.querySelector('#button2')
button2.addEventListener('click', changeColor)*/

const toggleColor = function(){document.body.classList.toggle('red-background')}

const button2 = document.querySelector('#button2')
button2.addEventListener('click', toggleColor)
