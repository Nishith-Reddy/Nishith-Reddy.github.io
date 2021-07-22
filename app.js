
//preloader
window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('preloader-finish')
});
//navbar mobile 
const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    menu.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease fordwards ${index / 7 + 2}s`;
                
            }
        }); 
    });
   
}

//smooth scroll 

var scroll = new SmoothScroll('nav a[href*="#"]', {
    speed:800,
});

// function smoothScroll(target,duration) {
//     var target = document.querySelector(target);
//     var targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
//     var startPosition = window.pageXOffset;
//     var distance = targetPosition - startPosition 
//     var startTime = null;

//     function animation(currentTime) {
//         if (startTime === null) {
//             startTime = currentTime;
//         }  
//         var timeElapsed = currentTime - startTime;
//         var run = ease(timeElapsed, startPosition, distance, duration);
//         window.scrollTo(0,run);
//         if (timeElapsed < duration) requestAnimationFrame(animation);
//     }

//     function ease(t, b, c, d) {
//         t /= d;
//         return -c * t*(t-2) + b;
//     }

//     requestAnimationFrame(animation);


//     console.log(targetPosition);
// }



//nav highligh on scroll
const navLit = () => {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.nav-links a');

    sections.forEach(sections => {
        sections.addEventListener('mouseover', function() {
            const id = this.getAttribute('id');
            const navActive = document.querySelector(`a[href="#${id}"]`);
            links.forEach(link => link.classList.remove('active'));
            navActive.classList.add('active');
        })
    })
}

//heading animation
const text = document.querySelector(".heading");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i=0; i < splitText.length; i++) {
    if(splitText[i] === " ") {
        text.innerHTML +="<span>"+ "&nbsp;" + "</span>";
    }
    else {
        text.innerHTML +="<span>"+splitText[i] + "</span>";

    }
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}

//animation on scroll 

function scrollAnimation(target) {
    var introText = document.querySelector(target);
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;

    introText.classList.remove('intro-animation');
    if(Math.abs(introPosition) < screenPosition){
        introText.classList.add('intro-animation');
    }
    target = "";
}

function scrollDivAnimation(target) {
    var div = document.querySelector(target);
    var divPosition = div.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;

    div.classList.remove('about-animation');
    if(Math.abs(divPosition) < screenPosition){
        div.classList.add('about-animation');
    }
    target = "";
    console.log(divPosition);
}

function scrollImgAnimation(target) {
    var img = document.querySelector(target);
    var imgPosition = img.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;

    img.classList.remove('img-animation');
    if(Math.abs(imgPosition) < screenPosition){
        img.classList.add('img-animation');
    }
    target = "";
    console.log(imgPosition);
}

window.addEventListener('scroll', function() {
    scrollAnimation(".intro-text1");
    scrollDivAnimation(".about-div");
    scrollImgAnimation(".about-img")
});
window.addEventListener('scroll', function() {
    scrollAnimation(".intro-text2");
});
window.addEventListener('scroll', function() {
    scrollAnimation(".intro-text3");
});
navSlide();
navLit();
// var aboutLink = document.querySelector('.about-link');
// var homeLink = document.querySelector('.home-link');
// aboutLink.addEventListener('click', function() {
//     smoothScroll('.about', 1000);

// });
// homeLink.addEventListener('click', function() {
//     smoothScroll('.home', 1000);

// });
