let bilets = document.querySelectorAll('.divparent .div .bilet')
let divs = document.querySelectorAll('.divparent .div')
let pluses = document.querySelectorAll('.divparent .div .plus')
let navbar = document.querySelector('.navbar');
let bars = document.querySelector('.bars');
let header = document.querySelector('.header');
let hidden = document.querySelector('.divparent .div .hidden');

bars.addEventListener('click', () => {
  navbar.classList.toggle('active');
  header.classList.toggle('active');
});

divs.forEach(div => {
    div.addEventListener('click', () => {
        div.classList.toggle('active'); 
        let plus = div.querySelector('.plus');
        plus.classList.toggle('active');
        let bilet = div.querySelector('.bilet');
        bilet.classList.toggle('active');
        let hidden = div.querySelector('.hidden');
        hidden.classList.toggle('active');
        bilet.style.height.value = div.style.height.value;
    });
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