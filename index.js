
import  addSoatList, {addSoatListElement} from './utils/SOATlist'
import  {createList} from './utils/SOATlist'
import  {addHeader} from './utils/SOATlist'
import  {addText} from './utils/SOATlist'
import  {peticion} from './utils/SOATlist'

const $app = document.getElementById('app')

// const el = createElement('span', { class: 'text' }, ['GALERIA ...'])
// console.log(el) // <span class="text">Hi createElement</span>

// const container = createElement('div', { id: 'container' }, [el])
// console.log(container)



const soat = addSoatList();
const soatHeaderElement = addHeader();


$app.appendChild(soatHeaderElement)
$app.appendChild(soat)
peticion();
createList();

addSoatListElement();
addText();



