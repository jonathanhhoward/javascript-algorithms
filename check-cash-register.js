const Currency = {
  'PENNY': 0.01,
  'NICKEL': 0.05,
  'DIME': 0.10,
  'QUARTER': 0.25,
  'ONE': 1.00,
  'FIVE': 5.00,
  'TEN': 10.00,
  'TWENTY': 20.00,
  'ONE HUNDRED': 100.00
}

class Record {
  constructor (status = '', change = []) {
    this.status = status
    this.change = change
  }
}

function checkCashRegister (price, cash, cid) {
  let diff = subtractDollars(cash, price)
  const totalCash = cid.reduce((acc, cur) => addDollars(acc, cur[i]), 0)

  if (diff > totalCash) return new Record('INSUFFICIENT_FUNDS')

  if (diff === totalCash) return new Record('CLOSED', cid)

  let change = []

  for (let i = cid.length - 1; i >= 0 && diff !== 0; --i) {
    const amount = countCurrency(diff, cid[i][0], cid[i][1])
    if (amount === undefined) continue
    change.push(amount)
    diff -= amount[1]
  }

  return (diff === 0)
    ? new Record('OPEN', change)
    : new Record('INSUFFICIENT_FUNDS')
}

function countCurrency (amount, currencyName, currencyVal) {
  if (Currency[currencyName] > amount || currencyVal === 0) return undefined

  if (currencyVal <= amount) {
    return [currencyName, currencyVal]
  } else {
    const newVal = Math.floor(amount / Currency[currencyName]) * Currency[currencyName]
    return [currencyName, newVal]
  }
}

function addDollars (a, b) {
  return Math.round(a * 100 + b * 100) / 100
}

function subtractDollars (a, b) {
  return addDollars(a, -b)
}
