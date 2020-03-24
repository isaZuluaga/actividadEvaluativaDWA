
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
// SOAT page
function addHeader() {
  var soatHeader = document.createElement('header');
  soatHeader.id = 'mysoatHeader';
  return soatHeader;
}
function addText() {
  var headerText = document.createElement('h3');
  headerText.id = 'myheaderText';
  headerText.textContent += "SOAT List";
  document.getElementById('mysoatHeader').appendChild(headerText);
}
function addSoatList() {
  var soatListContainer = document.createElement('div');
  soatListContainer.id = 'mysoatListContainer';
  return soatListContainer;
}
function createList() {
  var soatList = document.createElement('ul');
  soatList.id = 'mySoatList';
  soatList.className = 'mySoatListClass';
  document.getElementById('mysoatListContainer').appendChild(soatList);
}
function addSoatListElement() {
  for (var i = 1; i <= 5; i++) {
    var listElement = document.createElement('li');
    listElement.id = 'mylistElement' + i;
    listElement.className = 'mylistElement';
    console.log(listElement.id);
    document.getElementById('mySoatList').appendChild(listElement);
  }
}
function peticion() {
  fetch('https://dwaapi.juvasquez88.now.sh/soatdwa').then(function (respuesta) {
    return respuesta.json();
  }).then(function (respuesta) {
    var vehiclesList = []; // let element = respuesta.vehicles[0]

    for (var i = 1; i <= 5; i++) {
      vehiclesList[i] = respuesta.vehicles[i];
    }

    console.log(vehiclesList);
  });
}

var $app = document.getElementById('app'); // const el = createElement('span', { class: 'text' }, ['GALERIA ...'])
// console.log(el) // <span class="text">Hi createElement</span>
// const container = createElement('div', { id: 'container' }, [el])
// console.log(container)

var soat = addSoatList();
var soatHeaderElement = addHeader();
$app.appendChild(soatHeaderElement);
$app.appendChild(soat);
peticion();
createList();
addSoatListElement();
addText();
