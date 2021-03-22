
const reg = /coinlist\.co/;
const timeGap = 20 * 60 * 1e3;


const startWork = () => {
  if (!reg.test(location.href)) {
    return
  }
  console.log('bingo! got it!')
  if (!localStorage.stopReload) {
    console.log('run [location.reload()] after', timeGap/1e3 + 's')
    setInterval(() => {
      location.reload()
    }, timeGap)
  } else {
    console.log('stop reload!')
  }
}

startWork()