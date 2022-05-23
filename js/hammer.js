
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
console.white = setColor('white',1.5,'black')

const startWork = () => {
  console.log(startWork)
}

startWork()