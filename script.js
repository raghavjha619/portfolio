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