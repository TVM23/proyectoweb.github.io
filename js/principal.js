var productos = [
    {id:100, nombre:'Whisky The Glenlivet 12 años 750 ml', precio:1195.00, descuento:25, p_descuento:'1,090.00', imagen:'/introduccion/img/productos/1971-2.webp', precioDesc(){
      (this.precio-((this.precio)*((this.descuento)/100)))
      return this.precioDesc}},
    {id:200, nombre:'Whisky Buchanans 12 Años 1L', precio:1195.00, descuento:0, imagen:'/introduccion/img/productos/25853_2.webp'},
    {id:300, nombre:'Whisky Black & White 1L', precio:335.00, descuento:15, imagen:'/introduccion/img/productos/22767-1.webp'},
    {id:400, nombre:'Whisky Chivas Regal Extra 13 Años Tequila 750 ml', precio:846.00, descuento:0, imagen:'/introduccion/img/productos/33162-2.webp'},
    {id:500, nombre:'Whisky Chivas Regal Extra 13 A Sherry 750 ml', precio:846.00, descuento:14, imagen:'/introduccion/img/productos/33683-2.webp'},
    {id:600, nombre:'Whisky Chivas Regal Extra 12 Años 750 ml', precio:714.00, descuento:10, imagen:'/introduccion/img/productos/1943-2.webp'},
    {id:700, nombre:'Whisky Ballantines Finest 700 ml', precio:235.00, descuento:15, imagen:'/introduccion/img/productos/31302-2.webp'},
    {id:800, nombre:'Whisky Passport 700ml', precio:195.00, descuento:25, imagen:'/introduccion/img/productos/2023-1.webp'},
    {id:900, nombre:'Whisky Black Zebre 1.5L', precio:298.00, descuento:25, imagen:'/introduccion/img/productos/30107-1.webp'},
    {id:1000, nombre:'Whisky Mc Andrews Green Apple 750 ml', descuento:25, precio:185.00, imagen:'/introduccion/img/productos/35548-1.webp'},
    {id:1100, nombre:"Jack Daniel's Apple 700ml", precio:465.00, descuento:30, imagen:'/introduccion/img/productos/JACK-DANIELS-APPLE-1.webp'},
    {id:1200, nombre:"Jack Daniel's Honey 700ml", precio:465.00, descuento:30, imagen:'/introduccion/img/productos/22178-1.webp'},
    {id:1300, nombre:'Whiskey J. Jameson Irish 750ml', precio:405.00, descuento:25, imagen:'/introduccion/img/productos/1984-1.webp'},
    {id:1400, nombre:'Cognac Meukow X.O. 700ml', precio:3850.00, descuento:25, imagen:'/introduccion/img/productos/30450-1.webp'},
    {id:1500, nombre:'Cognac Meukow Vsop Superior Est Metalico 700ml', precio:1100.00, descuento:25, imagen:'/introduccion/img/productos/34956-2.webp'},
];
let slideIndex2 = 1;

function llenarProductos(){
    var padre=document.getElementById('slides-padre');
    var dotsContainer=document.getElementById('contenedor-dots');
    var contadorDots =1;
    var divmySlides;
    var divcontenedorproductos;
      for(i=0; i<productos.length; i++){
        if(i%4==0){
            divmySlides=document.createElement('div');
            divmySlides.classList.add("mySlides");
            divmySlides.classList.add("mySlides2");
            divmySlides.classList.add("fade");

            divcontenedorproductos =document.createElement('div');
            divcontenedorproductos.classList.add("divcontenedorproductos");

            divmySlides.append(divcontenedorproductos);
            padre.append(divmySlides);

            dotsContainer.innerHTML+=' <span class="dot dot2" onclick="currentSlide2('+contadorDots+')"></span>';
            contadorDots++;
        }
        divcontenedorproductos.append(retornarObjeto(productos[i]));
      }
      showSlides2(slideIndex2);
  }
  
  function retornarObjeto (producto){
    var cadena =document.createElement('div');
    cadena.classList.add("miprod");
    //var div = document.createElement('div');
    cadena.innerHTML = "<p>"+producto.nombre+"</p>"+
    "";
  
    return cadena;
  }

 
  /*
   <div class="mySlides mySlides2 fade">
            <div style="display: flex; width: 100%;height:27.4rem;">
              <div class="miprod"></div>
              <div class="miprod"></div>
              <div class="miprod"></div>
              <div class="miprod"></div>
            </div>
          </div>
 */

          
 


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}
function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    let dots = document.getElementsByClassName("dot2");
    console.log(slides.length);
    console.log(n);

    if (n > slides.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2-1].style.display = "block";
    dots[slideIndex2-1].className += " active";
  }


  /* ----------------------------- */

  var ofertas = [
    {id:100, nombre:'Whisky The Glenlivet 12 años 750 ml', precio:1195.00, descuento:25, p_descuento:'1,090.00', imagen:'/introduccion/img/productos/1971-2.webp', precioDesc(){
      (this.precio-((this.precio)*((this.descuento)/100)))
      return this.precioDesc}},
    {id:200, nombre:'Whisky Buchanans 12 Años 1L', precio:1195.00, descuento:0, imagen:'/introduccion/img/productos/25853_2.webp'},
    {id:300, nombre:'Whisky Black & White 1L', precio:335.00, descuento:15, imagen:'/introduccion/img/productos/22767-1.webp'},
    {id:400, nombre:'Whisky Chivas Regal Extra 13 Años Tequila 750 ml', precio:846.00, descuento:0, imagen:'/introduccion/img/productos/33162-2.webp'},
    {id:500, nombre:'Whisky Chivas Regal Extra 13 A Sherry 750 ml', precio:846.00, descuento:14, imagen:'/introduccion/img/productos/33683-2.webp'},
    {id:600, nombre:'Whisky Chivas Regal Extra 12 Años 750 ml', precio:714.00, descuento:10, imagen:'/introduccion/img/productos/1943-2.webp'},
    {id:700, nombre:'Whisky Ballantines Finest 700 ml', precio:235.00, descuento:15, imagen:'/introduccion/img/productos/31302-2.webp'},
    {id:800, nombre:'Whisky Passport 700ml', precio:195.00, descuento:25, imagen:'/introduccion/img/productos/2023-1.webp'},
    {id:900, nombre:'Whisky Black Zebre 1.5L', precio:298.00, descuento:25, imagen:'/introduccion/img/productos/30107-1.webp'},
    {id:1000, nombre:'Whisky Mc Andrews Green Apple 750 ml', descuento:25, precio:185.00, imagen:'/introduccion/img/productos/35548-1.webp'},
    {id:1100, nombre:"Jack Daniel's Apple 700ml", precio:465.00, descuento:30, imagen:'/introduccion/img/productos/JACK-DANIELS-APPLE-1.webp'},
    {id:1200, nombre:"Jack Daniel's Honey 700ml", precio:465.00, descuento:30, imagen:'/introduccion/img/productos/22178-1.webp'},
    {id:1300, nombre:'Whiskey J. Jameson Irish 750ml', precio:405.00, descuento:25, imagen:'/introduccion/img/productos/1984-1.webp'},
    {id:1400, nombre:'Cognac Meukow X.O. 700ml', precio:3850.00, descuento:25, imagen:'/introduccion/img/productos/30450-1.webp'},
];


let slideIndex3 = 1;
function llenarOfertas(){
  var padre=document.getElementById('slides-padre2');
  var dotsContainer=document.getElementById('contenedor-dots2');
  var contadorDots =1;
  var divmySlides;
  var divcontenedorproductos;
    for(i=0; i<ofertas.length; i++){
      if(i%4==0){
          divmySlides=document.createElement('div');
          divmySlides.classList.add("mySlides");
          divmySlides.classList.add("mySlides3");
          divmySlides.classList.add("fade");

          divcontenedorproductos = document.createElement('div');
          divcontenedorproductos.classList.add("divcontenedorproductos");

          divmySlides.append(divcontenedorproductos);
          padre.append(divmySlides);

          dotsContainer.innerHTML+=' <span class="dot dot3" onclick="currentSlide3('+contadorDots+')"></span>';
          contadorDots++;
      }
      divcontenedorproductos.append(retornarObjetoOfertas(ofertas[i]));
    }
    showSlides3(slideIndex3);
}
  
  function retornarObjetoOfertas (ofertas){
    var cadena = document.createElement('div');
    cadena.classList.add("miprod");
    cadena.innerHTML = "<p>"+ofertas.nombre+"</p>"+
    "";
  
    return cadena;
  }


    // Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}
function showSlides3(n) {
  console.log(n)
    let i;
    let slides = document.getElementsByClassName("mySlides3");
    let dots = document.getElementsByClassName("dot3");

    if (n > slides.length) {slideIndex3 = 1}
    if (n < 1) {slideIndex3 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex3-1].style.display = "block";
    dots[slideIndex3-1].className += " active";
}

  
  document.addEventListener("DOMContentLoaded", function(event) {
    llenarProductos();
    llenarOfertas();
  });