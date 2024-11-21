var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClosed = document.getElementById("btnMenuClosed"),
    menuResponsive = document.getElementById("menuBar");

btnMenuOpen.addEventListener("click", function(){
    menuResponsive.classList.add("active");
});

btnMenuClosed.addEventListener("click", function(){
    menuResponsive.classList.remove("active");
});

var enlaces = document.getElementById("enlaces");

enlaces.addEventListener("click", function(){
    menuResponsive.style.transformStyle = "0.5s"
    menuResponsive.classList.remove("active");
});



//Slider Productos
var contenedor = document.querySelector('.slider'),
    btnIzquierdo = document.getElementById("btn-izquierda"),
    btnDerecho = document.getElementById("btn-derecha");

//Evento para el boton derecho
btnDerecho.addEventListener("click", function(){
    contenedor.scrollLeft += contenedor.offsetWidth;
});


//Evento para el boton izquierdo
btnIzquierdo.addEventListener("click", function(){
    contenedor.scrollLeft -= contenedor.offsetWidth;
});