function palindrome (str) {
  const forward = str.toLowerCase().match(/[a-z0-9]/g).join('')
  const backward = forward.split('').reverse().join('')
  return forward === backward
}
