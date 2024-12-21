// const cursorDot = document.querySelector("[data-cursor-dot]")
const cursorOutline = document.querySelector("[data-cursor-outline]")


window.addEventListener('mousemove', (e)=>{
    const posX = e.clientX
    const posY = e.clientY

    // cursorDot.style.left = `${posX}px`;
    // cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

    // cursorOutline.animate({
    //     top: `${posY}px`,
    //     left: `${posX}px`
    // },{duration : 500 , fill : "forwards"});
});

const lettalk = document.querySelector('.lettalk');
const email = document.querySelector('.email')
// const gridBackgroundMountain = document.querySelector('.mountain')
function cursorhover(cursor){
  cursor.addEventListener('mouseover', () => {
    cursorOutline.style.borderColor = '#ffffff'; // Change color on hover
  });
  
  cursor.addEventListener('mouseout', () => {
    cursorOutline.style.borderColor = 'black'; 
  });
}
cursorhover(lettalk);
cursorhover(email);

const color = ['#a79cf8','#ff8577','#22e183']
const randomIndex1 = Math.floor(Math.random() * color.length);
const randomIndex2 = Math.floor(Math.random() * color.length);
const randomIndex3 = Math.floor(Math.random() * color.length);
const randomIndex4 = Math.floor(Math.random() * color.length);
const randomIndex5 = Math.floor(Math.random() * color.length);
const randomIndex6 = Math.floor(Math.random() * color.length);

document.getElementById('CSS').style.backgroundColor = `${color[randomIndex1]}`;
document.getElementById('HTML').style.backgroundColor = `${color[randomIndex2]}`;
document.getElementById('C++').style.backgroundColor = `${color[randomIndex3]}`;
document.getElementById('Javascript').style.backgroundColor = `${color[randomIndex4]}`;
document.getElementById('React').style.backgroundColor = `${color[randomIndex5]}`;
document.getElementById('DSA').style.backgroundColor = `${color[randomIndex6]}`;


// const dog = document.querySelector('.item:nth-child(2)')
// console.log(dog);


let nextbutton = document.getElementById('next')
let prevbutton = document.getElementById('prev')
let carousel = document.querySelector('.carousel')
let listHTML = document.querySelector('.carousel .list')

nextbutton.onclick = function(){
  showslider('next')
}
prevbutton.onclick = function(){
  showslider('prev')
}
let unacceptClick;
const showslider = (type)=>{
  nextbutton.style.pointerEvents = 'none';
  prevbutton.style.pointerEvents = 'none';

  carousel.classList.remove('next', 'prev');
  let item = document.querySelectorAll('.item')
  if(type === 'next'){
    listHTML.appendChild(item[0]);
    carousel.classList.add('next');
  }
  else{
    let positionlast = item.length-1;
    listHTML.prepend(item[positionlast]);
    carousel.classList.add('prev');
  }
  clearTimeout(unacceptClick);
  unacceptClick = setTimeout(()=>{
    nextbutton.style.pointerEvents = 'auto';
    prevbutton.style.pointerEvents = 'auto';
  }, 1000);
}





