
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


//SECCION CONTACTO
var formulario = document.getElementById("formulario");

function validar(e){
    var inputNombre = document.getElementById("nombre");
    var inputEmail = document.getElementById("email");
    var inputComments = document.getElementById("comentarios");
    var alertSuccess = document.getElementById("alertSuccess");
    var alertError = document.getElementById("alertError");


    // Esta es para la condición ó ||
    if(inputNombre.value == 0 
        || inputEmail.value == 0 
        || inputComments.value == 0){
        
        //Nueva sentencia, previene que se mueva a la posición original
        e.preventDefault();
        alertError.classList.remove("hide");
        alertError.classList.add("show");

        setTimeout(function(){
            alertError.classList.remove("show");
        alertError.classList.add("hide");
        }, 2000);

    }
    else{
        e.preventDefault();
        alertSuccess.classList.remove("hide");
        alertSuccess.classList.add("show");

        setTimeout(function(){
        alertSuccess.classList.remove("show");
        alertSuccess.classList.add("hide");
        }, 2000);

        inputNombre.value = "";
        inputEmail.value = "";
        inputComments.value = "";
    }
}

formulario.addEventListener("submit", validar);



//Boton scroll top
var btnTop = document.getElementById("btn-top"),
    logo = document.getElementById("logo");


//Detectamos scroll en nuestra pagina web
window.addEventListener("scroll", function(){

    var scroll = document.documentElement.scrollTop,
        fullSize = document.documentElement.offsetHeight,
        sizeVP = document.documentElement.clientHeight;

    if (scroll > 100){
        btnTop.classList.add("show");
    }
    else{
        btnTop.classList.remove("show");
    }


    //Modificar elemento cuando llegue a final de pagina
    if (fullSize == scroll + sizeVP) {
        btnTop.classList.add("srollFinal");
    }
    else{
        btnTop.classList.remove("srollFinal");
    }
});


//Detectamos evento click en el boton 
btnTop.addEventListener("click", function(){
    window.scrollTo(0,0);
});


//Evento click en el logo
logo.addEventListener("click", function(){
    window.scrollTo(0,0);
});