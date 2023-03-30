$('.nav-link').on('click', function(index, item) {
    $('.nav-link').removeClass('active'); 
    this.classList.add('active');
})
$(".hiking .card").addClass("hilang");
$('.autumn .card').each((index, item) => {
    item.dataset.aos = "fade-up"; 
    item.dataset.aosDelay = 200 * index;
})


$(window).on('scroll', function() {
    let scrollPos = $(this).scrollTop(); 
    let targetPos = $('.hiking').offset().top - 250; 
    if(scrollPos > targetPos) {
        $('.hiking .card').each((index, item) => {
            setTimeout(() => {
                $('.hiking .card').eq(index).addClass('buka');
            }, index * 200);
        })
    }
})

$(window).on('load', function() {
    let lebar = window.innerWidth; 
    if(lebar <= 700) {
        const noitalic = document.querySelectorAll('.noitalic');
        noitalic.forEach(item => {
            item.classList.add('text-center');
        })
    }
})
$(window).on('resize', function() {
    let lebar = window.innerWidth; 
    if(lebar <= 700) {
        const noitalic = document.querySelectorAll('.noitalic');
        noitalic.forEach(item => {
            item.classList.add('text-center');
        })
    }
})



gsap.from('header .container-fluid', {
    y: '-100%', 
    opacity: 0, 
    ease: "bounce.out",
    duration: 2,
})

gsap.from('.hero', {
    opacity: 0, 
    duration: 2,
    delay: 1,
});

gsap.from('.banner .box', {
    x: '-100%', 
    duration:1,
});

gsap.to('.curr', {
    opacity: 0, 
    duration: 0.7,
    repeat: -1,
})

const teks = [
    "Lorem ipsum dolor sit amet <br> consectetur <br> adipiscing elit, sed do.",
    "Lorem ipsum dolor sit amet <br> consectetur adipiscing elit, sed do.",
];

let ptl = gsap.timeline({
    repeat: -1, 
    delay: 1, 
    repeatDelay: 1, 
});

teks.forEach(item => {
    let mtl = gsap.timeline({
        repeat: 1, 
        repeatDelay: 1, 
        yoyo: true,       
    })
    mtl.to('.text', {
        duration: 5,
        text: item,
    })
    ptl.add(mtl);
})



AOS.init({
    disable: false, 
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate', 
    useClassNames: false, 
    disableMutationObserver: false, 
    debounceDelay: 50, 
    throttleDelay: 99, 
    offset: 120, 
    delay: 0, 
    duration: 1000, 
    easing: 'ease', 
    once: true,
    mirror: false,  
    anchorPlacement: 'top-bottom', 
});