// SOAT page
export function addHeader(){
  var soatHeader = document.createElement('header')
  soatHeader.id = 'mysoatHeader';
  return soatHeader
}
export function addText(){
    var headerText = document.createElement('h3')
    headerText.id = 'myheaderText'
    headerText.textContent += "SOAT List";
    document.getElementById('mysoatHeader').appendChild(headerText);
}
export default function addSoatList(){
    var soatListContainer = document.createElement('div');
    soatListContainer.id = 'mysoatListContainer';

     return soatListContainer
  }
  export function createList() {
    var soatList = document.createElement('table');
    soatList.id ='mySoatList';
    soatList.className = 'mySoatListClass';
    document.getElementById('mysoatListContainer').appendChild(soatList);
  }

  export function addSoatListElement(){
    for(let i = -1; i<=4; i++){
      var listElement = document.createElement('tr');
      listElement.id = 'mylistElement'+ i;
      listElement.className = 'mylistElement';
      console.log(listElement.id);
      document.getElementById('mySoatList').appendChild(listElement);
    }
  }
  export function addTableData(){
    for(let i = 0; i<=3; i++){
      var tdElement = document.createElement('td');
      tdElement.id = 'mytdElement'+ i;
      tdElement.className = 'mytdElement';
      console.log(tdElement.id);
      document.getElementById('mylistElement0').appendChild(tdElement);
    }
  }
  export function addTableData1(){
    for(let i = 4; i<=7; i++){
        var tdElement = document.createElement('td');
        tdElement.id = 'mytdElement'+ i;
        tdElement.className = 'mytdElement';
        console.log(tdElement.id);
        document.getElementById('mylistElement1').appendChild(tdElement);
      }
  }
  export function addTableData2() {
    for (var i = 9; i <= 12; i++) {
      var tdElement = document.createElement('td');
      tdElement.id = 'mytdElement' + i;
      tdElement.className = 'mytdElement';
      console.log(tdElement.id);
      document.getElementById('mylistElement2').appendChild(tdElement);
    }

  }
  export function addTableData3() {
    for (var i = 13; i <= 16; i++) {
      var tdElement = document.createElement('td');
      tdElement.id = 'mytdElement' + i;
      tdElement.className = 'mytdElement';
      console.log(tdElement.id);
      document.getElementById('mylistElement3').appendChild(tdElement);
    }
  }
  export function addTableData4() {
    for (var i = 17; i <= 20; i++) {
      var tdElement = document.createElement('td');
      tdElement.id = 'mytdElement' + i;
      tdElement.className = 'mytdElement';
      console.log(tdElement.id);
      document.getElementById('mylistElement4').appendChild(tdElement);
    }
  }
  export function addTableHead(){
    for(let i = 1; i<=4; i++){
        var thElement = document.createElement('th');
        thElement.id = 'thElement'+ i;
        thElement.className = 'mythElement';
        console.log(thElement.id);
        document.getElementById('mylistElement-1').appendChild(thElement);
      }
        document.getElementById('thElement1').innerHTML = ('Brand');
        document.getElementById('thElement2').innerHTML = ('license Plate');
        document.getElementById('thElement3').innerHTML = ('soat Valid From');
        document.getElementById('thElement4').innerHTML = ('soat Valid Until');
  }

export function validarSoat(date1,date2){
      var validFrom = new Date(date1 * 1);
      var validUntil = new Date(date2 * 1);

      // Year
      var yearFrom = validFrom.getFullYear();
      var yearUntil = validUntil.getFullYear();
      // Month
      var monthFrom = validFrom.getMonth();
      var monthUntil = validUntil.getMonth();
      // Day
      var dayFrom = validFrom.getDate();
      var dayUntil = validUntil.getDate();

      var convdataTime1 = dayFrom+'-'+monthFrom+'-'+yearFrom;
      var convdataTime2 = dayUntil+'-'+monthUntil+'-'+yearUntil;

      let cantMeses = (((dayUntil - dayFrom)/30 )+ (monthUntil - monthFrom) + ((yearUntil - yearFrom)*12));

      console.log('La fecha desde soat es ' + convdataTime1 + ' hasta fecha '+convdataTime2)
      console.log('la cantidad de meses es '+ cantMeses)

     if(cantMeses == 12){
      console.log('SOAT valido')

    }else{
      console.log('SOAT invalido')

    }
    let fechas = [convdataTime1,convdataTime2,cantMeses]
    return fechas
}

  export function peticion(){
    fetch('https://dwaapi.juvasquez88.now.sh/soatdwa')
    .then(respuesta => respuesta.json() )
    .then(respuesta => {
        let vehiclesList =[];
        let dates = [];
        for(let i = 0; i<=4; i++){
            vehiclesList[i] = respuesta.vehicles[i]
            dates = validarSoat(vehiclesList[i].soatValidFrom,vehiclesList[i].soatValidUntil);
            vehiclesList[i].isValid = dates[2];
            vehiclesList[i].soatValidFrom = dates[0];
            vehiclesList[i].soatValidUntil = dates[1];
          }
          for(let k = 0; k<=4; k++){
            if(vehiclesList[k].isValid == 12){
              document.getElementById('mylistElement'+ k).style.backgroundColor ="#BEFFA8";
            }else{

              document.getElementById('mylistElement'+ k).style.backgroundColor ="#FFADA6";
            }
          }

          var numbersBrand = [0,4,9,13,17];
          var numbersLicense = [1,5,10,14,18];
          var numbersFrom = [2,6,11,15,19];
          var numbersUntil = [3,7,12,16,20];
          var numB = null;
          var numL = null;
          var numF = null;
          var numU = null;
          for(let k = 0; k<=4; k++){
            numB = numbersBrand[k]
            document.getElementById('mytdElement'+ numB).innerHTML = JSON.stringify(vehiclesList[k].brand);
            numL = numbersLicense[k]
            document.getElementById('mytdElement'+ numL).innerHTML = JSON.stringify(vehiclesList[k].licensePlate);
            numF = numbersFrom[k]
            document.getElementById('mytdElement'+ numF).innerHTML = JSON.stringify(vehiclesList[k].soatValidFrom);
            numU = numbersUntil[k]
            document.getElementById('mytdElement'+ numU).innerHTML = JSON.stringify(vehiclesList[k].soatValidUntil);

          }

        console.log(vehiclesList)
          return vehiclesList

    })
    }
