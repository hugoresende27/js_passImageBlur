
const fundo = document.getElementById('fundo')
const pass = document.getElementById('password')

console.log (fundo)

pass.addEventListener('input', (e)=> {
    const pw = e.target.value
    const tamanho = pw.length
    const efeito = 20 - tamanho  * 2
    console.log(efeito)
    
    fundo.style.filter = `blur(${efeito}px)`

})



