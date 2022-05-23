
function runAutoMetamask() {
  if (!/chrome-extension\:\/\/nkbihfb/.test(location.href)) return console.log('will not run runAutoMetamask...')
  console.log('%crun auto metamask...', 'color:red;font-size:2em; background-color:black')
  setInterval(async () => {
    if (!/chrome-extension\:\/\/nkbihfb/.test(location.href)) return
    window.sleep = window.sleep ? window.sleep : (delay = 1000) => new Promise(r => setTimeout(r, delay))
    console.log('checking task...')
    var activity = document.querySelector('[data-testid="home__activity-tab"]')
    activity && activity.click()
    await sleep(200)
    var confirm = document.querySelector('.transaction-list__pending-transactions .transaction-list-item--unconfirmed')
    if (confirm) {
      if (/待处理/.test(confirm.innerText)) return;
      if (/Pending/gim.test(confirm.innerText)) return;
      console.log('confirm...'); confirm.click();
    }
    await sleep(200)
    var sign = document.querySelector('[data-testid="request-signature__sign"]')
    if (sign) { console.log('sign...'); sign.click() }
    var approve = document.querySelector('[data-testid="page-container-footer-next"]')
    if (approve) { console.log('approve...'); approve.click() }
  }, 1000)
}

runAutoMetamask()
