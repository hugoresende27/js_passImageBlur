const password = document.getElementById('password')
const background = document.getElementById('background')
console.log(background)
password.addEventListener('input', (e) => {
    const input = e.target.value
    const compInput = input.length
    //console.log(20 - compInput *2)
    const blur = 20 - compInput * 2
    background.style.filter = `blur(${blur}px)`
})