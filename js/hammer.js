if (!window.$) {
  window.$ = document.querySelector.bind(document)
}
if (!window.$$) {
  window.$$ = document.querySelectorAll.bind(document)
}
const setColor = (color, size = 2, bg = 'white') => {
  return (...args) => {
    args = args.map(arg => {
      if (typeof arg === 'object' && arg !== null) { return JSON.stringify(arg) }
      return arg
    })
    console.log(`%c${args}`, `color:${color};font-size:${size}em;background-color:${bg};`)
  }
}
console.red = setColor('red')
console.blue = setColor('blue')
console.orange = setColor('orange')
console.black = setColor('black')
console.white = setColor('white', 1.5, 'black')

const startWork = () => {
  console.log(startWork)
}

startWork()

function loadScript(script, onload) {
  console.log(`loadScript: ${script}`)
  var s = document.createElement('script');
  s.src = script;
  document.body.appendChild(s);
  if (onload) {
    s.onload = onload
  }
}
var vue = 'https://cdn.jsdelivr.net/npm/vue@3.2.37/dist/vue.global.min.js'
var react = 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js'
var clipboard = `https://cdn.jsdelivr.net/npm/clipboard@2.0.10/dist/clipboard.min.js`
// loadScript(react)
// loadScript(vue)


function hideImg() {
  [...document.querySelectorAll('img')].forEach(img => img.remove())
}

function unMaskZhuFeng() {
  if (!/zhufeng/.test(location.href)) {
    return
  }
  const loginModal = document.querySelector('#loginModal')
  if (loginModal) { loginModal.remove() }
  const fadeBg = document.querySelector('.modal-backdrop.fade.in')
  if (fadeBg) { fadeBg.remove() }
  const nav = $('.nav')
  if (nav && nav.style) {
    nav.style.height = '260px'
    setTimeout(() => {
      nav.onmouseleave = function () {
        nav.style.height = '260px'
      }
    })
  }
  const warpper = $('.warpper')
  if (warpper && warpper.style) {
    warpper.style.padding = '260px 0px 0px 0px'
  }

}
unMaskZhuFeng();

function netflav() {
  if (!/netflav.com|nanrenlequ/.test(location.href)) {
    return
  }
  console.red(`run: netflav...`)
  setInterval(hideImg, 200);
}
netflav()

function t66y() {
  if (!/t66y/.test(location.href)) {
    return
  }
  console.red(`run: t66y...`);
  [...document.querySelectorAll('img')].forEach(ele => {
    ele.src = null
  })
}
t66y()

function mag18() {
  const domainList = [
    '18mag',
    'wuji',
    '0cili',
  ]
  if (domainList.every(domain => !location.href.includes(domain))) {
    return
  }
  if (domainList.every(domain => location.href.includes(domain) && location.href.includes(search))) {
    return
  }
  console.red(`run: 18mag.net ...`);
  loadScript(clipboard,)
  start()
  function start() {
    let items = [...document.querySelectorAll('table tr td a')].map(e => ({ element: e, href: e.href }))
    // items = items.slice(0, 5)
    window.itemList = []
    items.forEach(async (item, index) => {
      const { href, element } = item
      const html = await fetch(href).then(res => res.text())
      const tmp = document.createElement('html')
      tmp.innerHTML = html
      const magnetValue = tmp.querySelector('#input-magnet').value
      const button = document.createElement('button')
      button.className = 'download-magnet'
      button.innerText = '↓↓↓';
      button.setAttribute('data-clipboard-target', '#magnet')

      button.onclick = () => {
        copyTextToClipboard(magnetValue)
      }
      const input = document.createElement('input')
      input.id = 'magnet'
      input.setAttribute('value', magnetValue)
      input.style.visibility = 'hidden'

      element.parentElement.appendChild(input)
      element.parentElement.appendChild(button)
      itemList.push(magnetValue)
      if (index === items.length - 1) {
        console.log(itemList)
      }
    })
    // batchSearchInput()
  }
}
function batchSearchInput() {
  const textarea = document.createElement('textarea')
  textarea.type = 'textarea'
  textarea.className = 'batch-search-textarea'
  textarea.cols = 50
  textarea.rows = 10
  textarea.style =
    `
    position: absolute;
    top: 50px;
    right: 50px;
    border: solid 5px lightgrey;
    border-radius: 5px;
    `
  textarea.focus()
  const button = document.createElement('button')
  button.innerHTML = 'search'
  button.style =
    `
  position: absolute;
  top: 270px;
  right: 50px;
  border-radius: 5px;
  height: 40px;
  width: 100px;
  font-size: 1.5em;
  border: white;
  `
  button.onclick = () => {
    if (textarea.value) {
      let codeList = textarea.value.split(/\n|\s+/).map(e => e.trim()).filter(Boolean)
      codeList = [...new Set(codeList)]
      console.log(codeList)
    }
  }
  document.body.appendChild(textarea)
  document.body.appendChild(button)
}
mag18()

function copyTextToClipboard(text) {
  //Create a textbox field where we can insert text to. 
  var copyFrom = document.createElement("textarea");

  //Set the text content to be the text you wished to copy.
  copyFrom.textContent = text;

  //Append the textbox field into the body as a child. 
  //"execCommand()" only works when there exists selected text, and the text is inside 
  //document.body (meaning the text is part of a valid rendered HTML element).
  document.body.appendChild(copyFrom);

  //Select all the text!
  copyFrom.select();

  //Execute command
  document.execCommand('copy');

  //(Optional) De-select the text using blur(). 
  copyFrom.blur();

  //Remove the textbox field from the document.body, so no other JavaScript nor 
  //other elements can get access to this.
  document.body.removeChild(copyFrom);
}

function scroll() {
  if (location.href.indexOf('https://scroll.io/prealpha/faucet') !== -1) {
    console.log(`localStorage.removeItem('canClaimFrom')`)
    localStorage.removeItem('canClaimFrom')
  }
}
scroll()