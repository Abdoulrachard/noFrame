/**
 * create un event click qui va permettre de toggle la navBar avec la classe (display-show) et aussi ajouter la classe presentation-bottom 
 */
const burgerIcon = document.querySelector(".burgerIcon")
burgerIcon.addEventListener("click", ()=>{
    const navBar = document.querySelector('.displayer')
    navBar.classList.toggle('displayer-show')
    const addMargin = document.querySelector('.presentation')
    addMargin.classList.toggle('presentation-bottom')
})
const ratio = .1
const options = {
    'root': null,
    'rootMargin': '0px',
    'threshold': ratio
}
const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if(entry.intersectionRatio >= ratio) {
                entry.target.classList.add('reveal-out')
                observer.unobserve(entry.target)
            }
            
        })
}
const observer = new IntersectionObserver(callback, options)
 document.querySelectorAll('.reveal' ).forEach(function(element){
    observer.observe(element)
})

