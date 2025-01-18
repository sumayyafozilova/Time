const elBox = document.getElementById('time')
const elH = document.getElementById("h")
const elM = document.getElementById("m")
const elS = document.getElementById("s")
let elBtn = document.getElementById('btn')
let elImg = document.getElementById('img')

 



elBtn.addEventListener('click', () =>{
if ( elBox.style.backgroundColor === 'white'){
    elBox.style.backgroundColor = 'black'
    elBox.style.color = 'white'
     
} 
else{
    elBox.style.backgroundColor = 'white'
    elBox.style.color = 'black'
        elImg.style.backgroundColor = 'white'
}

})
setInterval(() => {
    const date = new Date()
    elH.textContent = date.getHours()
    elM.textContent = date.getMinutes()
    elS.textContent = date.getSeconds()
    if (date.getMinutes() < 10) {
        elM.textContent = '0' + date.getMinutes()
    }
    else {
        elM.textContent = date.getMinutes()
    }
    if (date.getSeconds() < 10) {
        elS.textContent = '0' + date.getSeconds()
    }
    else {
        elS.textContent = date.getSeconds()
    }

}, 1000)