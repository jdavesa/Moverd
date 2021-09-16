


let aqiContainer = document.getElementById('aqi-container')
let aqiOn = document.getElementById('aqi-list-on')
let aqiOff = document.getElementById('aqi-list-off')

aqiOff.addEventListener('click', () => {
 
    aqiContainer.classList.toggle('hide')
    aqiOff.setAttribute('class','hide')
    aqiOn.removeAttribute('class')
})

aqiOn.addEventListener('click', () => {
 
    aqiContainer.classList.toggle('hide')
    aqiOff.removeAttribute('class')
    aqiOn.setAttribute('class','hide')
})



let legendContainer = document.getElementById('legend-container')
let lgnOn = document.getElementById('aqi-lgn-on')
let lgnOff = document.getElementById('aqi-lgn-off')

lgnOff.addEventListener('click', () => {
    
    legendContainer.classList.toggle('hide')
    lgnOff.setAttribute('class','hide')
    lgnOn.removeAttribute('class')
})

lgnOn.addEventListener('click', () => {
 
    legendContainer.classList.toggle('hide')
    lgnOff.removeAttribute('class')
    lgnOn.setAttribute('class','hide')
})