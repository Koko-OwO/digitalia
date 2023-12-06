// Espera a que la página esté completamente cargada
window.onload = function () {
  // Oculta la pantalla de precarga
  document.getElementById("preloader").style.display = "none";
  // Muestra el contenido de la página
  document.getElementById("contenido").style.display = "block";
};

document.addEventListener("DOMContentLoaded", function () {
  var preloaderVideo = document.querySelector(".videocarga video");

  preloaderVideo.addEventListener("loadeddata", function () {
      // Video de carga cargado, oculta el preloader
      document.getElementById("preloader").style.display = "none";
  });
}); 


const animationImages = document.querySelectorAll('.gatoSubiendo');

function animateIn() {
animationImages.forEach(image => {
  const elementTop = image.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (elementTop < windowHeight) {
    image.classList.add('animate-in');
  }
});
}

window.addEventListener('scroll', animateIn);
window.addEventListener('load', animateIn);



// const checkbox = document.getElementById("checkbox");
// const professional = document.getElementById("professional");
// const master = document.getElementById("master");
// const basic = document.getElementById("basic");

// checkbox.addEventListener("click", () => {
//   basic.textContent = basic.textContent === "$199.99" ? "$19.99" : "$199.99";
//   professional.textContent =
//     professional.textContent === "$249.99" ? "$24.99 " : "$249.99";
//   master.textContent = master.textContent === "$399.99" ? "$39.99" : "$399.99";
// });



  // Obtener todos los elementos con la clase "miElemento"
  var elementos = document.querySelectorAll(".losque");

  // Agregar eventos a cada elemento
  elementos.forEach(function(elemento) {
    elemento.addEventListener("mouseover", function() {
      elemento.classList.remove("shadow");
      elemento.classList.add("active");
    });

    elemento.addEventListener("mouseout", function() {
      elemento.classList.remove("active");
      elemento.classList.add("shadow");
    });
  });


    // Obtener todos los elementos con la clase "miElemento"
    var elemen = document.querySelectorAll(".btn");

    // Agregar eventos a cada elemento
    elemen.forEach(function(elementok) {
      elementok.addEventListener("mouseover", function() {
       
        elementok.classList.add("active-btn");
      });
  
      elementok.addEventListener("mouseout", function() {
        elementok.classList.remove("active-btn");
        
      });
    });

var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

// var image = document.getElementsByClassName('thumbnail');
// new simpleParallax(image, {
// 	overflow: true
// });


// document.addEventListener("keyup", detectTabKey);

// function detectTabKey(e) {
//     if (e.keyCode == 9) {
//       if (document.getElementById("botoncontraste").classList.contains("active-barra-accesibilidad-govco")) {
//         document.getElementById("botoncontraste").classList.toggle("active-barra-accesibilidad-govco");}
//         if (document.getElementById("botonaumentar").classList.contains("active-barra-accesibilidad-govco")) {
//           document.getElementById("botonaumentar").classList.toggle("active-barra-accesibilidad-govco");}
//           if (document.getElementById("botondisminuir").classList.contains("active-barra-accesibilidad-govco")) {
//             document.getElementById("botondisminuir").classList.toggle("active-barra-accesibilidad-govco");}
//     }
// }

// function cambiarContexto() {

//   var botoncontraste = document.getElementById("botoncontraste");
//   var botonaumentar = document.getElementById("botonaumentar");
//   var botondisminuir = document.getElementById("botondisminuir");

//     if (!botoncontraste.classList.contains("active-barra-accesibilidad-govco")) {
//       botoncontraste.classList.toggle("active-barra-accesibilidad-govco");
//       document.getElementById("titleaumentar").style.display="";
//       document.getElementById("titledisminuir").style.display="";
//       document.getElementById("titlecontraste").style.display="none";
//     }
//     if (botondisminuir.classList.contains("active-barra-accesibilidad-govco")) {
//       botondisminuir.classList.remove("active-barra-accesibilidad-govco");
//     }
//     if (botonaumentar.classList.contains("active-barra-accesibilidad-govco")) {
//       botonaumentar.classList.remove("active-barra-accesibilidad-govco");
//     }

//   var element = document.getElementById('para-mirar');
//   if (element.className == 'modo_oscuro-govco') {
//     var element = document.getElementById('para-mirar');
//     element.className = "modo_claro-govco";
//   } else {
//     var element = document.getElementById('para-mirar');
//     element.className = "modo_oscuro-govco";
//   }
// }

// function disminuirTamanio(operador) {

//   var botoncontraste = document.getElementById("botoncontraste");
//   var botonaumentar = document.getElementById("botonaumentar");
//   var botondisminuir = document.getElementById("botondisminuir");

//     if (!botondisminuir.classList.contains("active-barra-accesibilidad-govco")) {
//       botondisminuir.classList.toggle("active-barra-accesibilidad-govco");
//       document.getElementById("titleaumentar").style.display="";
//       document.getElementById("titledisminuir").style.display="none";
//       document.getElementById("titlecontraste").style.display="";
//     }
//     if (botonaumentar.classList.contains("active-barra-accesibilidad-govco")) {
//       botonaumentar.classList.remove("active-barra-accesibilidad-govco");
//     }
//     if (botoncontraste.classList.contains("active-barra-accesibilidad-govco")) {
//       botoncontraste.classList.remove("active-barra-accesibilidad-govco");
//     }

//   var div1 = document.getElementById("para-mirar")
//   var texto = div1.getElementsByTagName("p");
//   for (let element of texto) {
//     const total = tamanioElemento(element);
//     const nuevoTamanio = (operador === 'aumentar' ? (total + 1) : (total - 1)) + 'px';
//     element.style.fontSize = nuevoTamanio
//   }
// }

// function aumentarTamanio(operador) {

//   var botoncontraste = document.getElementById("botoncontraste");
//   var botonaumentar = document.getElementById("botonaumentar");
//   var botondisminuir = document.getElementById("botondisminuir");

//     if (!botonaumentar.classList.contains("active-barra-accesibilidad-govco")) {
//       botonaumentar.classList.toggle("active-barra-accesibilidad-govco");
//       document.getElementById("titleaumentar").style.display="none";
//       document.getElementById("titledisminuir").style.display="";
//       document.getElementById("titlecontraste").style.display="";
//     }
//     if (botondisminuir.classList.contains("active-barra-accesibilidad-govco")) {
//       botondisminuir.classList.remove("active-barra-accesibilidad-govco");
//     }
//     if (botoncontraste.classList.contains("active-barra-accesibilidad-govco")) {
//       botoncontraste.classList.remove("active-barra-accesibilidad-govco");
//     }

//   var div1 = document.getElementById("para-mirar")
//   var texto = div1.getElementsByTagName("p");
//   for (let element of texto) {
//     const total = tamanioElemento(element);
//     if(total<=64)
//     {
//       const nuevoTamanio = (operador === 'aumentar' ? (total + 1) : (total - 1)) + 'px';
//       element.style.fontSize = nuevoTamanio
//     }
//   }
// }

// function tamanioElemento(element) {
//   const tamanioParrafo = window.getComputedStyle(element, null).getPropertyValue('font-size');
//   return parseFloat(tamanioParrafo);
// }





    

//testimonios

// let itms = 6; // itemsPerPage
// let stpg = 1; // startPage
// let pltd = 4; // pageLinksToDisplay
// let winw = window.innerWidth; 

// function optionsByWindowSize() {
// 	winw = window.innerWidth;
// 	if (winw > 1600) { itms = 6; stpg = 1; pltd = 4; }
// 	else if (winw > 1230) { itms = 5; stpg = 2; pltd = 4; }
// 	else if (winw > 980) { itms = 4; stpg = 3; pltd = 4; }
// 	else if (winw > 750) { itms = 3; stpg = 4; pltd = 4; }
// 	else if (winw > 510) { itms = 2; stpg = 5; pltd = 4; }
// 	else { itms = 1; stpg = 6; pltd = 1; }
// }

// function reportWindowSize() {
// 	optionsByWindowSize();
// 	//purePajination Script - START
// 	if (document.readyState === "complete") {
// 		var gallery = new purePajinate({ 
// 			containerSelector: '.items', 
// 			itemSelector: '.items > div', 
// 			navigationSelector: '.pagination',
// 			/*wrapAround: true,*/ 
// 			pageLinksToDisplay: pltd,
// 			showFirstLast: true,
// 			navLabelPrev: '&nbsp;&nbsp;&nbsp;',
// 			navLabelNext: '&nbsp;&nbsp;&nbsp;',
// 			navLabelFirst: '&nbsp;&nbsp;&nbsp;',
// 			navLabelLast: '&nbsp;&nbsp;&nbsp;',
// 			itemsPerPage: itms,
// 			startPage: stpg
// 		});
// 	} //purePajination Script - END
// }

// document.onreadystatechange = reportWindowSize;				
// window.onresize = reportWindowSize;



// import React, { useState } from 'https://cdn.skypack.dev/react';
// import ReactDOM from 'https://cdn.skypack.dev/react-dom';
// import { TiChevronLeftOutline, TiChevronRightOutline } from 'https://cdn.skypack.dev/react-icons/ti';

// const CARDS = 10;
// const MAX_VISIBILITY = 3;

// const Card = ({ title, content }) => /*#__PURE__*/
// React.createElement("div", { className: "card" }, /*#__PURE__*/
// React.createElement("h2", null, title), /*#__PURE__*/
// React.createElement("p", null, content));



// const Carousel = ({ children }) => {
//   const [active, setActive] = useState(2);
//   const count = React.Children.count(children);

//   return /*#__PURE__*/(
//     React.createElement("div", { className: "carousel" },
//     active > 0 && /*#__PURE__*/React.createElement("button", { className: "nav left", onClick: () => setActive(i => i - 1) }, /*#__PURE__*/React.createElement(TiChevronLeftOutline, null)),
//     React.Children.map(children, (child, i) => /*#__PURE__*/
//     React.createElement("div", { className: "card-container", style: {
//         '--active': i === active ? 1 : 0,
//         '--offset': (active - i) / 3,
//         '--direction': Math.sign(active - i),
//         '--abs-offset': Math.abs(active - i) / 3,
//         'pointer-events': active === i ? 'auto' : 'none',
//         'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
//         'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block' } },

//     child)),


//     active < count - 1 && /*#__PURE__*/React.createElement("button", { className: "nav right", onClick: () => setActive(i => i + 1) }, /*#__PURE__*/React.createElement(TiChevronRightOutline, null))));


// };

// const App = () => /*#__PURE__*/
// React.createElement("div", { className: "app" }, /*#__PURE__*/
// React.createElement(Carousel, null,
// [...new Array(CARDS)].map((_, i) => /*#__PURE__*/
// React.createElement(Card, { title: 'Card ' + (i + 1), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }))));





// ReactDOM.render( /*#__PURE__*/
// React.createElement(App, null),
// document.body);