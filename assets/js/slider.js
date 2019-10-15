const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')
const moveRight = document.querySelector('.right')
const moveLeft = document.querySelector('.left')
const bullets = document.querySelectorAll('.bullet')
let aux = 0
let index = 0

if (slider) {
    // Controle pelo clique
    moveRight.addEventListener('click', () => {
        if (aux == -420) {
            slider.classList.add('is-disabled')
        } else {
            slider.classList.remove('is-disabled')
            aux -= 210
            slider.style.transform = `translateX(${ aux }px)`
        }
        
    })

    moveLeft.addEventListener('click', () => {
        if (aux == 0) {
            slider.classList.add('is-disabled')
        }else{
            slider.classList.remove('is-disabled')
            aux += 210
            slider.style.transform = `translateX(${ aux }px)`
        }
    })

    // Slides passando sozinhos
    setInterval(() => {
        if(aux > -420) {
            aux -= 210
            slider.style.transform = `translateX(${ aux }px)`
        } else{
            aux = 0
            slider.style.transform = `translateX(${ aux }px)`
        }
    }, 2100)
}
