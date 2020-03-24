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
    for(let i = 1; i<=5; i++){
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
.then(respuesta => console.log(respuesta.vehicles[0]))
}