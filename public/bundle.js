
(function (l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document)
/**
 * @param  {string} tagName HTML tag
 * @param  {Object} attributes HTML attributes
 * @param  {Array} children HTML child elements
 * @return {HTMLElement} instance of HTMLElement
 * @example
 *
 * const el = createElement('span', { class: 'text' }, ['Hi createElement'])
 * console.log(el)
 * // => <span class="text">Hi createElement</span>
 */
function createElement (tagName, attributes, children) {
  if (typeof tagName !== 'string') throw new Error('tagName must be an string')
  var el = document.createElement(tagName)

  if (attributes) {
    if (Object.prototype.toString.call(attributes) !== '[object Object]') {
      throw new Error('attributes must be an object')
    }

    Object.keys(attributes).forEach(function (attr) {
      el.setAttribute(attr, attributes[attr])
    })
  }

  if (!Array.isArray(children)) throw new Error('children must be an array')
  addchild(el, children)
  return el
}
function addchild (parent, children) {
  if (!Array.isArray(children)) throw new Error('children must be an array')
  if (!(parent instanceof window.HTMLElement)) throw new Error('parent must be an instance of HTMLElement')
  children.forEach(function (child) {
    if (child instanceof window.HTMLElement) {
      parent.appendChild(child)
    } else {
      parent.innerHTML += child // parent.innerHTML = parent.innerHTML + child
    }
  })
}

var $app = document.getElementById('app')
var el = createElement('span', {
  class: 'text'
}, ['Hi createElement'])
console.log(el) // <span class="text">Hi createElement</span>

var container = createElement('div', {
  id: 'container'
}, [el])
console.log(container)
$app.appendChild(container)
