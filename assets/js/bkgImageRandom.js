function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const img__principal = document.getElementById('img__background')
const img__principal__2 = document.getElementById('img__background__2')


let countIMG = 0
const imgSetStart = () =>
    new Promise((resolve, reject,) => {
        setTimeout(() => {
            resolve(true)
        }, 400);
    })
const imgShow1 = () =>
    new Promise((resolve, reject,) => {
        setTimeout(() => {
            img__principal.classList.toggle('hidden')
            img__principal__2.classList.toggle('hidden')

            let img = `./assets/images/webp/carousel/DSC-${randomInt(1, 69)}.webp`
            img__principal__2.style.backgroundImage = `url(${img})`
            
            resolve(true)
        }, 3000);
    })
const imgShow2 = () =>
    new Promise((resolve, reject,) => {
        setTimeout(() => {
            img__principal.classList.toggle('hidden')
            img__principal__2.classList.toggle('hidden')
            
            let img = `./assets/images/webp/carousel/DSC-${randomInt(1, 69)}.webp`
            img__principal.style.backgroundImage = `url(${img})`

            resolve(true)
            imgRandom()
        }, 3000);
    })
function imgRandom() {
    imgSetStart()
        .then(imgShow1)
        .then(imgShow2)
}
imgRandom()
const reservar = document.querySelector('.img__principal .reservar')
setTimeout(() => {
    reservar.classList.add('--loaded')
}, 300);