let header = document.getElementById('header')

let nube1 = document.getElementById('nube1')
let transparente = document.getElementById('transparente')
let nube2 = document.getElementById('nube2')
let slogan = document.getElementById('slogan')
let btn = document.getElementById('btn')
let viento = document.getElementById('viento')
let persona = document.getElementById('persona')


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    transparente.style.marginLeft =  value * 0.5 + 'px';
    nube1.style.left = value* -5  + 'px';
    nube2.style.left = value* -5  + 'px';
    btn.style.marginTop = value * 0.5 + 'px';
    slogan.style.marginBottom =   value* -1  + 'px';
    viento.style.left = value* -5  + 'px';
    header.style.marginTop = value * 0.4 + 'px';
    persona.style.marginLeft = value* 4  + 'px';

})

const navigation = document.querySelector('nav')
document.querySelector('.menu').onclick = function (){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}

document.querySelectorAll('#btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth' // Añade la animación suave
            });
        }
    });
});
