const translate = document.getElementsByName(".translate");
const big_title = document.getElementsByName(".big-title");
const header = document.getElementsByName("header");
const shadow = document.getElementsByName(".shadow");
const content = document.getElementsByName(".content");
const section = document.getElementsByName("section");
const image_container = document.getElementsByName(".imgContainer");
const opacity = document.getElementsByName(".opacity");
const border = document.getElementsByName(".border");


let header_height = header.offsetHeight;

let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });


})