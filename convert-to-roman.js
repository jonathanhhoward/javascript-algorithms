function convertToRoman (num) {
  const decStr = String(num)
  let result = ''
  const romanNum = [
    { one: 'I', five: 'V', ten: 'X' },
    { one: 'X', five: 'L', ten: 'C' },
    { one: 'C', five: 'D', ten: 'M' },
    { one: 'M' }
  ]

  for (let i = 0; i < decStr.length; ++i) {
    if (decStr[i] === '0') continue
    const power = (decStr.length - 1) - i
    const one = romanNum[power].one
    const five = romanNum[power].five
    const ten = romanNum[power].ten
    switch (decStr[i]) {
      case '1':
        result += one
        break
      case '2':
        result += one + one
        break
      case '3':
        result += one + one + one
        break
      case '4':
        result += one + five
        break
      case '5':
        result += five
        break
      case '6':
        result += five + one
        break
      case '7':
        result += five + one + one
        break
      case '8':
        result += five + one + one + one
        break
      case '9':
        result += one + ten
    }
  }

  return result
}
