// node index.js nome=Rafael

console.log(process.argv)
const args = process.argv.slice(2)
const nome = args[0].split('=')[1]
console.log(nome)