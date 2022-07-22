const contenedor__carousel = document.querySelector('.contenedor__carousel')
const imgsParent = document.querySelector('.carousel')

const flecha__izquierda = document.getElementById('flecha__izquierda')
const flecha__derecha = document.getElementById('flecha__derecha')

const indicadores = document.querySelector('.img__carousel #indicadores')

/*      --------       Paginacion     --------          */
const numeroImagenes = Math.ceil(imgsParent.children.length / 5)

flecha__derecha.addEventListener('click', () => {
    contenedor__carousel.scrollLeft += contenedor__carousel.offsetWidth;

    const indicadorActivo = indicadores.querySelector('button.activo')
    if (indicadorActivo.nextElementSibling) {
        indicadorActivo.nextElementSibling.classList.add('activo')
        indicadorActivo.classList.remove('activo')
    }
    else {
        indicadores.firstElementChild.classList.add('activo')
        indicadorActivo.classList.remove('activo')
        contenedor__carousel.scrollLeft =0
    }
})
flecha__izquierda.addEventListener('click', () => {
    contenedor__carousel.scrollLeft -= contenedor__carousel.offsetWidth;

    const indicadorActivo = indicadores.querySelector('button.activo')
    if (indicadorActivo.previousElementSibling) {
        indicadorActivo.previousElementSibling.classList.add('activo')
        indicadorActivo.classList.remove('activo')
    } else {
        indicadores.lastElementChild.classList.add('activo')
        indicadorActivo.classList.remove('activo')
        contenedor__carousel.scrollLeft = numeroImagenes * contenedor__carousel.offsetWidth
    }
})



const fragment = document.createDocumentFragment()

for (let i = 0; i < numeroImagenes; i++) {

    const indicador = document.createElement('button')
    indicador.addEventListener('click', (e) => {
        contenedor__carousel.scrollLeft = i * contenedor__carousel.offsetWidth;
        
        indicadores.querySelector('button.activo').classList.remove('activo')
        e.target.classList.add('activo')
    })
    fragment.appendChild(indicador)
}

fragment.firstElementChild.classList.add('activo')
indicadores.replaceChildren(fragment)

contenedor__carousel.scrollLeft = 0