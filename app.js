
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
    // $sections incleudes all of the container divs that relate to menu items.
    var $sections = $('.container1');
    // The user scrolls
    $(window).scroll(function(){
      // currentScroll is the number of pixels the window has been scrolled
      var currentScroll = $(this).scrollTop();
      // $currentSection is somewhere to place the section we must be looking at
      var $currentSection;
      // We check the position of each of the divs compared to the windows scroll positon
      $sections.each(function(){
        // divPosition is the position down the page in px of the current section we are testing      
        var divPosition = $(this).offset().top;
        console.log(divPosition);
        // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
        // the -1 is so that it includes the div 1px before the div leave the top of the window.
        if( divPosition - 150 < currentScroll ){
          // We have either read the section or are currently reading the section so we'll call it our current section
          $currentSection = $(this);
          
          // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
        }
        // This is the bit of code that uses the currentSection as its source of ID
        var id = $currentSection.attr('id');
          $('.nav-links a').removeClass('active');
          $("[href=#"+id+"]").addClass('active');
      })
    });
  };

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
