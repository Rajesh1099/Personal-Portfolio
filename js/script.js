let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box1");
    const fullscreen = document.querySelector(".fullscreen");
    const fullscreenImg = document.querySelector(".fullscreen img");

    boxes.forEach(box => {
        const img = box.querySelector("img");

        box.addEventListener("click", function() {
            window.location.href = img.getAttribute("data-src");
        });

        img.addEventListener("click", function(e) {
            e.stopPropagation();
        });

        img.addEventListener("mouseenter", function() {
            img.classList.add("active");
            fullscreenImg.src = img.src;
            fullscreen.classList.add("active");
        });

        box.addEventListener("mouseleave", function() {
            img.classList.remove("active");
            fullscreen.classList.remove("active");
        });
    });

    fullscreen.addEventListener("click", function() {
        fullscreen.classList.remove("active");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box1");

    boxes.forEach(box => {
        const img = box.querySelector("img");

        img.addEventListener("click", function() {
            img.classList.toggle("fullscreen");
        });
    });
});

