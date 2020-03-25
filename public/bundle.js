
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
  var soatList = document.createElement('table');
  soatList.id = 'mySoatList';
  soatList.className = 'mySoatListClass';
  document.getElementById('mysoatListContainer').appendChild(soatList);
}
function addSoatListElement() {
  for (var i = -1; i <= 4; i++) {
    var listElement = document.createElement('tr');
    listElement.id = 'mylistElement' + i;
    listElement.className = 'mylistElement';
    console.log(listElement.id);
    document.getElementById('mySoatList').appendChild(listElement);
  }
}
function addTableData() {
  for (var i = 0; i <= 3; i++) {
    var tdElement = document.createElement('td');
    tdElement.id = 'mytdElement' + i;
    tdElement.className = 'mytdElement';
    console.log(tdElement.id);
    document.getElementById('mylistElement0').appendChild(tdElement);
  }
}
function addTableData1() {
  // let dates = [];
  // dates = validarSoat
  for (var i = 4; i <= 7; i++) {
    var tdElement = document.createElement('td');
    tdElement.id = 'mytdElement' + i;
    tdElement.className = 'mytdElement';
    console.log(tdElement.id);
    document.getElementById('mylistElement1').appendChild(tdElement); // if(cantMeses == 12){
    //   console.log('SOAT valido')
    //   //document.getElementsByClassName("mylistElement").style.backgroundColor ="#FFADA6";
    // }else{
    //   console.log('SOAT invalido')
    // // document.getElementsByClassName("mylistElement").style.backgroundColor ="#BEFFA8";
    // }
  }
}
function addTableData2() {
  for (var i = 9; i <= 12; i++) {
    var tdElement = document.createElement('td');
    tdElement.id = 'mytdElement' + i;
    tdElement.className = 'mytdElement';
    console.log(tdElement.id);
    document.getElementById('mylistElement2').appendChild(tdElement);
  }
}
function addTableData3() {
  for (var i = 13; i <= 16; i++) {
    var tdElement = document.createElement('td');
    tdElement.id = 'mytdElement' + i;
    tdElement.className = 'mytdElement';
    console.log(tdElement.id);
    document.getElementById('mylistElement3').appendChild(tdElement);
  }
}
function addTableData4() {
  for (var i = 17; i <= 20; i++) {
    var tdElement = document.createElement('td');
    tdElement.id = 'mytdElement' + i;
    tdElement.className = 'mytdElement';
    console.log(tdElement.id);
    document.getElementById('mylistElement4').appendChild(tdElement);
  }
}
function addTableHead() {
  for (var i = 1; i <= 4; i++) {
    var thElement = document.createElement('th');
    thElement.id = 'thElement' + i;
    thElement.className = 'mythElement';
    console.log(thElement.id);
    document.getElementById('mylistElement-1').appendChild(thElement);
  }

  document.getElementById('thElement1').innerHTML = 'Brand';
  document.getElementById('thElement2').innerHTML = 'license Plate';
  document.getElementById('thElement3').innerHTML = 'soat Valid From';
  document.getElementById('thElement4').innerHTML = 'soat Valid Until';
}
function validarSoat(date1, date2) {
  var validFrom = new Date(date1 * 1);
  var validUntil = new Date(date2 * 1); // Year

  var yearFrom = validFrom.getFullYear();
  var yearUntil = validUntil.getFullYear(); // Month

  var monthFrom = validFrom.getMonth();
  var monthUntil = validUntil.getMonth(); // Day

  var dayFrom = validFrom.getDate();
  var dayUntil = validUntil.getDate();
  var convdataTime1 = dayFrom + '-' + monthFrom + '-' + yearFrom;
  var convdataTime2 = dayUntil + '-' + monthUntil + '-' + yearUntil;
  var cantMeses = (dayUntil - dayFrom) / 30 + (monthUntil - monthFrom) + (yearUntil - yearFrom) * 12;
  console.log('La fecha desde soat es ' + convdataTime1 + ' hasta fecha ' + convdataTime2);
  console.log('la cantidad de meses es ' + cantMeses);

  if (cantMeses == 12) {
    console.log('SOAT valido'); //document.getElementsByClassName("mylistElement").style.backgroundColor ="#FFADA6";
  } else {
    console.log('SOAT invalido'); // document.getElementsByClassName("mylistElement").style.backgroundColor ="#BEFFA8";
  }

  var fechas = [convdataTime1, convdataTime2, cantMeses];
  return fechas;
}
function peticion() {
  fetch('https://dwaapi.juvasquez88.now.sh/soatdwa').then(function (respuesta) {
    return respuesta.json();
  }).then(function (respuesta) {
    var vehiclesList = [];
    var dates = [];

    for (var i = 0; i <= 4; i++) {
      vehiclesList[i] = respuesta.vehicles[i];
      dates = validarSoat(vehiclesList[i].soatValidFrom, vehiclesList[i].soatValidUntil);
      vehiclesList[i].isValid = dates[2];
      vehiclesList[i].soatValidFrom = dates[0];
      vehiclesList[i].soatValidUntil = dates[1];
    }

    for (var k = 0; k <= 4; k++) {
      if (vehiclesList[k].isValid == 12) {
        document.getElementById('mylistElement' + k).style.backgroundColor = "#BEFFA8";
      } else {
        document.getElementById('mylistElement' + k).style.backgroundColor = "#FFADA6";
      }
    }

    document.getElementById('mytdElement0').innerHTML = JSON.stringify(vehiclesList[0].brand);
    document.getElementById('mytdElement4').innerHTML = JSON.stringify(vehiclesList[1].brand);
    document.getElementById('mytdElement9').innerHTML = JSON.stringify(vehiclesList[2].brand);
    document.getElementById('mytdElement13').innerHTML = JSON.stringify(vehiclesList[3].brand);
    document.getElementById('mytdElement17').innerHTML = JSON.stringify(vehiclesList[4].brand);
    document.getElementById('mytdElement1').innerHTML = JSON.stringify(vehiclesList[0].licensePlate);
    document.getElementById('mytdElement5').innerHTML = JSON.stringify(vehiclesList[1].licensePlate);
    document.getElementById('mytdElement10').innerHTML = JSON.stringify(vehiclesList[2].licensePlate);
    document.getElementById('mytdElement14').innerHTML = JSON.stringify(vehiclesList[3].licensePlate);
    document.getElementById('mytdElement18').innerHTML = JSON.stringify(vehiclesList[4].licensePlate);
    document.getElementById('mytdElement2').innerHTML = JSON.stringify(vehiclesList[0].soatValidFrom);
    document.getElementById('mytdElement6').innerHTML = JSON.stringify(vehiclesList[1].soatValidFrom);
    document.getElementById('mytdElement11').innerHTML = JSON.stringify(vehiclesList[2].soatValidFrom);
    document.getElementById('mytdElement15').innerHTML = JSON.stringify(vehiclesList[3].soatValidFrom);
    document.getElementById('mytdElement19').innerHTML = JSON.stringify(vehiclesList[4].soatValidFrom);
    document.getElementById('mytdElement3').innerHTML = JSON.stringify(vehiclesList[0].soatValidUntil);
    document.getElementById('mytdElement7').innerHTML = JSON.stringify(vehiclesList[1].soatValidUntil);
    document.getElementById('mytdElement12').innerHTML = JSON.stringify(vehiclesList[2].soatValidUntil);
    document.getElementById('mytdElement16').innerHTML = JSON.stringify(vehiclesList[3].soatValidUntil);
    document.getElementById('mytdElement20').innerHTML = JSON.stringify(vehiclesList[4].soatValidUntil);
    console.log(vehiclesList);
    return vehiclesList;
  });
} //   export function createList() {
//     var soatList = document.createElement('ul');
//     soatList.id ='mySoatList';
//     soatList.className = 'mySoatListClass';
//     document.getElementById('mysoatListContainer').appendChild(soatList);
//   }
//   export function addSoatListElement(){
//     for(let i = -1; i<=4; i++){
//       var listElement = document.createElement('li');
//       listElement.id = 'mylistElement'+ i;
//       listElement.className = 'mylistElement';
//       console.log(listElement.id);
//       document.getElementById('mySoatList').appendChild(listElement);
//     }
//   }
// export function peticion(){
// fetch('https://dwaapi.juvasquez88.now.sh/soatdwa')
// .then(respuesta => respuesta.json() )
// .then(respuesta => {
//     let vehiclesList =[];
//     for(let i = 0; i<=4; i++){
//         vehiclesList[i] = respuesta.vehicles[i]
//         // document.getElementById('mylistElement'+ i).innerHTML = JSON.stringify(vehiclesList[i]);
//         document.getElementById('mylistElement'+ i).innerHTML = ('     '+JSON.stringify(vehiclesList[i].brand)+'     '+JSON.stringify(vehiclesList[i].licensePlate)+'     '+JSON.stringify(vehiclesList[i].soatValidFrom)+'     '+JSON.stringify(vehiclesList[i].soatValidUntil) );
//       }
//       return vehiclesList
//       console.log(vehiclesList)
// })
// }

var $app = document.getElementById('app');
var soat = addSoatList();
var soatHeaderElement = addHeader();
$app.appendChild(soatHeaderElement);
$app.appendChild(soat);
peticion();
createList(); //validarSoat();

addSoatListElement();
addText();
addTableHead();
addTableData();
addTableData1();
addTableData2();
addTableData3();
addTableData4();
