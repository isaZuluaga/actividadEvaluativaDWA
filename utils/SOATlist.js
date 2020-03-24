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
    var soatList = document.createElement('ul');
    soatList.id ='mySoatList';
    soatList.className = 'mySoatListClass';
    document.getElementById('mysoatListContainer').appendChild(soatList);
  }

  export function addSoatListElement(){
    for(let i = 0; i<=4; i++){
      var listElement = document.createElement('li');
      listElement.id = 'mylistElement'+ i;
      listElement.className = 'mylistElement';
      console.log(listElement.id);
      document.getElementById('mySoatList').appendChild(listElement);
    }
  }

export function peticion(){
fetch('https://dwaapi.juvasquez88.now.sh/soatdwa')
.then(respuesta => respuesta.json() )
.then(respuesta => {
    let vehiclesList =[];
    // let element = respuesta.vehicles[0]
    for(let i = 0; i<=4; i++){
        vehiclesList[i] = respuesta.vehicles[i]
        document.getElementById('mylistElement'+ i).innerHTML = JSON.stringify(vehiclesList[i], null, 4);
      }
      console.log(vehiclesList)
      
})
}