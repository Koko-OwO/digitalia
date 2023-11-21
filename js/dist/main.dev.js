"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("https://cdn.skypack.dev/react"));

var _reactDom = _interopRequireDefault(require("https://cdn.skypack.dev/react-dom"));

var _ti = require("https://cdn.skypack.dev/react-icons/ti");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Espera a que la página esté completamente cargada
window.onload = function () {
  // Oculta la pantalla de precarga
  document.getElementById("preloader").style.display = "none"; // Muestra el contenido de la página

  document.getElementById("contenido").style.display = "block";
}; // var image = document.getElementsByClassName('thumbnail');
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
// Parallax Code


var scene = document.getElementById('scene');
var parallax = new Parallax(scene); //testimonios
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

var CARDS = 10;
var MAX_VISIBILITY = 3;

var Card = function Card(_ref) {
  var title = _ref.title,
      content = _ref.content;
  return (
    /*#__PURE__*/
    _react["default"].createElement("div", {
      className: "card"
    },
    /*#__PURE__*/
    _react["default"].createElement("h2", null, title),
    /*#__PURE__*/
    _react["default"].createElement("p", null, content))
  );
};

var Carousel = function Carousel(_ref2) {
  var children = _ref2.children;

  var _useState = (0, _react.useState)(2),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var count = _react["default"].Children.count(children);

  return (
    /*#__PURE__*/
    _react["default"].createElement("div", {
      className: "carousel"
    }, active > 0 &&
    /*#__PURE__*/
    _react["default"].createElement("button", {
      className: "nav left",
      onClick: function onClick() {
        return setActive(function (i) {
          return i - 1;
        });
      }
    },
    /*#__PURE__*/
    _react["default"].createElement(_ti.TiChevronLeftOutline, null)), _react["default"].Children.map(children, function (child, i) {
      return (
        /*#__PURE__*/
        _react["default"].createElement("div", {
          className: "card-container",
          style: {
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block'
          }
        }, child)
      );
    }), active < count - 1 &&
    /*#__PURE__*/
    _react["default"].createElement("button", {
      className: "nav right",
      onClick: function onClick() {
        return setActive(function (i) {
          return i + 1;
        });
      }
    },
    /*#__PURE__*/
    _react["default"].createElement(_ti.TiChevronRightOutline, null)))
  );
};

var App = function App() {
  return (
    /*#__PURE__*/
    _react["default"].createElement("div", {
      className: "app"
    },
    /*#__PURE__*/
    _react["default"].createElement(Carousel, null, _toConsumableArray(new Array(CARDS)).map(function (_, i) {
      return (
        /*#__PURE__*/
        _react["default"].createElement(Card, {
          title: 'Card ' + (i + 1),
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        })
      );
    })))
  );
};

_reactDom["default"].render(
/*#__PURE__*/
_react["default"].createElement(App, null), document.body);