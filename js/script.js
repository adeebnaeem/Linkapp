let hamburger = document.getElementById('hamburger');
let smallSlider = document.getElementById('smallSlider');
let smallMainNavOverlay = document.querySelector('.smallMainNav-overlay');

const classListTrigger = () => {
    hamburger.classList.toggle('triggered');
    smallSlider.classList.toggle('menuOpen');
    smallMainNavOverlay.classList.toggle('show');

}

hamburger.addEventListener('click', () => { classListTrigger() })
smallMainNavOverlay.addEventListener('click', () => { classListTrigger() })


let scrolldown = document.querySelector("#scrolldown")

window.onscroll = () => {
    if (window.scrollY > 200) {
        scrolldown.classList.add('displayblock')
    } else {
        scrolldown.classList.remove('displayblock')
    }
}
scrolldown.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});