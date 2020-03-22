import createElement from './utils/createElement'
import  addGalleryContainer, {addGalleryElement} from './utils/jsActivity'
import  {refresh} from './utils/jsActivity'

const $app = document.getElementById('app')

const el = createElement('span', { class: 'text' }, ['GALERIA ...'])
console.log(el) // <span class="text">Hi createElement</span>

const container = createElement('div', { id: 'container' }, [el])
console.log(container)

const cont = addGalleryContainer();

$app.appendChild(container)
$app.appendChild(cont)

addGalleryElement();

refresh.then(value => console.log(value))
.catch(err => console.log('Promise rejected'))