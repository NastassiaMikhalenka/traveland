let searchBtn = document.querySelector("#search")
let searchWrapper = document.querySelector(".searchWrapper")

let formLoginBtn = document.querySelector("#user")
let formLoginWrapper = document.querySelector(".loginForm")

let formClose = document.querySelector("#formClose")
let menuBurger = document.querySelector("#menuBurger")
let navBar = document.querySelector(".navbar")
let videoBtn = document.querySelectorAll(".vid-btn")

window.onscroll = () => {
    searchBtn.classList.remove('fa-times')
    searchWrapper.classList.remove('active')
    menuBurger.classList.remove('fa-times')
    navBar.classList.remove('active')
}

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times')
    searchWrapper.classList.toggle('active')
})


menuBurger.addEventListener('click', () =>{
    menuBurger.classList.toggle('fa-times')
    navBar.classList.toggle('active')
})

videoBtn.forEach(btn => {
    btn.addEventListener('click', () =>{
        document.querySelector('.controls .active').classList.remove('active')
        btn.classList.add('active')
        let src = btn.getAttribute('data-src')
        document.querySelector('#video-slider').src = src
    })
})

const next = document.querySelector('.next')
next.addEventListener('click', function(){
    slider(slide += 1);
});

const prev = document.querySelector('.prev')
prev.addEventListener('click', function(){
    slider(slide -= 1);  
});

let slide = 1;

function slider(n) {
    const slides = document.querySelectorAll('.item');
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    if(n == 1){
        prev.style.display = "none";
      } else{
          prev.style.display = "block";
      }
    if(n == slides.length){
          next.style.display = "none";
      } else{
        next.style.display = "block";
      }

    slides[slide - 1].style.display = "block";
};
slider(slide);

