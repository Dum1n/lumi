let images = document.querySelectorAll('.section1 a .image');
let navbar = document.querySelector('.navbar');
let bars = document.querySelector('.bars');
let header = document.querySelector('.header');


if(window.innerWidth > 890){
    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.classList.add('active');
        });
    });

    images.forEach(image => {
        image.addEventListener('mouseout', () => {
            image.classList.remove('active');
        });
    });
}
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
