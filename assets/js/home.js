const html = document.querySelector('.html')
const css = document.querySelector('.css')
const git = document.querySelector('.git')
const js = document.querySelector('.js')
const photoshop = document.querySelector('.photoshop')
const blender = document.querySelector('.blender')
const cSharp = document.querySelector('.c-sharp')


window.onscroll = () => {
    if (window.pageYOffset >= 550) {
        html.style.width = "100%"
        css.style.width = "95%"
        git.style.width = "95%"
        js.style.width = "75%"
        photoshop.style.width = "55%"
        blender.style.width = "35%"
        cSharp.style.width = "25%"
    }
}