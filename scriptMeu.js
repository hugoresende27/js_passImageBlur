
const fundo = document.getElementById('background')
const pass = document.getElementById('pass')

console.log (fundo)

pass.addEventListener('input', (e)=> {
    const pw = e.target.value
    const tamanho = pw.length
    const efeito = 10 - tamanho  * 2
    console.log(efeito)
    
    fundo.style.filter = `blur(${efeito}px);`

})

