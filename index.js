
import  addSoatList, {addSoatListElement} from './utils/SOATlist'
import  {createList} from './utils/SOATlist'
import  {addHeader} from './utils/SOATlist'
import  {addText} from './utils/SOATlist'
import  {peticion} from './utils/SOATlist'
import  {addTableData} from './utils/SOATlist'
import  {addTableData1} from './utils/SOATlist'
import  {addTableData2} from './utils/SOATlist'
import  {addTableData3} from './utils/SOATlist'
import  {addTableData4} from './utils/SOATlist'
import  {addTableHead} from './utils/SOATlist'
import  {validarSoat} from './utils/SOATlist'

const $app = document.getElementById('app')

const soat = addSoatList();
const soatHeaderElement = addHeader();


$app.appendChild(soatHeaderElement)
$app.appendChild(soat)


peticion();

createList();
//validarSoat();

addSoatListElement();
addText();
addTableHead();
addTableData();
addTableData1();
addTableData2();
addTableData3();
addTableData4();

