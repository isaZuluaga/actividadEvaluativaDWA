import createElement from './utils/createElement'

const $app = document.getElementById('app')

const el = createElement('span', { class: 'text' }, ['Hi createElement'])
console.log(el) // <span class="text">Hi createElement</span>

const container = createElement('div', { id: 'container' }, [el])
console.log(container)

$app.appendChild(container)
