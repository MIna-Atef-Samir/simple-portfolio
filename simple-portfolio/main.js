let btn = document.querySelector('.push');
let show = document.querySelector('.side');
let exit = document.querySelector('.close');
let colorli = document.querySelectorAll('.side ul li');
let piker = document.querySelector('.side ul input');
let btnprint = document.querySelector('.print button');
let mainColor = localStorage.getItem('color-option');
if (mainColor != null) {
    console.log("the local storage is not empty!");
    document.documentElement.style.setProperty('--main-bg', mainColor);
}
btn.addEventListener('click', e => {
    if (e.target) {
        show.style.right = "10px"
        btn.style.opacity = "0"
        exit.style.right = "170px"
    }
})
exit.addEventListener('click', e => {
    if (e.target) {
        show.style.right = "-250px"
        btn.style.opacity = "1"
        exit.style.right = "-170px"
    }
})
colorli.forEach(li => {
    li.addEventListener('click', e => {
        console.log(e.target.dataset.color);
        document.documentElement.style.setProperty('--main-bg', e.target.dataset.color)
        localStorage.setItem('color-option', e.target.dataset.color)
    })
})
piker.addEventListener('click', e => {
    console.log(e.target.value);
    document.documentElement.style.setProperty('--main-bg', e.target.value)
    localStorage.setItem('color-option', e.target.value)
})
btnprint.addEventListener('click', e => {
    if (e.target) {
        window.print()
    }
})