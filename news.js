let as = document.querySelectorAll('.section2 a');
let navbar = document.querySelector('.navbar');
let bars = document.querySelector('.bars');
let header = document.querySelector('.header');

as.forEach(a=>{
    
    a.addEventListener('mouseover', ()=>{
        a.classList.add('active')   
        let image = a.querySelector('.section2 a .image');
        image.classList.add('active')
    })
    a.addEventListener('mouseout', ()=>{
        a.classList.remove('active')
        let image = a.querySelector('.section2 a .image');
        image.classList.remove('active')
    })
})

bars.addEventListener('click', () => {
    navbar.classList.toggle('active');
    header.classList.toggle('active');
});

function startTime() {
const today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
m = checkTime(m);
s = checkTime(s);
document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
setTimeout(startTime, 1000);
}

function checkTime(i) {
if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
return i;
}