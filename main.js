//alert("Bienvenidos a mi pagina");

//Este es el codigo par la animacion 
let app = document .getElementById('typewriter');

let typewriter = new Typewriter (app, {
    loop: true,
    delay: 75, 
});

typewriter
.pauseFor(2500)
.typeString('Desarrollo sitios web y escribo artículos sobre programación.') 
.pauseFor(200)
.deleteChars(10)
.start();