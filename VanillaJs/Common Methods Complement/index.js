const trim = (str) => {
  return str.match(/\S.*\S/)[0]
}

console.log(trim(' a b c '))