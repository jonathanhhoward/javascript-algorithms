function rot13 (str) {
  return str.replace(/[A-Z]/g, ((match) => (match < 'N')
      ? String.fromCharCode(match.charCodeAt(0) + 13)
      : String.fromCharCode(match.charCodeAt(0) - 13)
    )
  )
}
