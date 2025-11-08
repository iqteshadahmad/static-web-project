// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
var sections=document.querySelectorAll(".section-div1")
sections.forEach(function (elem){
    elem.addEventListener('mouseenter',function(){
        elem.childNodes[1].style.opacity = 1
        elem.childNodes[1].play()
    })
    elem.addEventListener('mouseleave',function(){
        elem.childNodes[1].style.opacity = 0
        elem.childNodes[1].load()
    })
})

var cards=document.querySelectorAll(".part9-div2-cards")
cards.forEach(function (elem){
    elem.addEventListener('mouseenter',function(){
        elem.childNodes[7].style.opacity = 1
        elem.childNodes[5].style.opacity = 0
        elem.childNodes[7].style.height = '400px';
        elem.childNodes[5].style.height = '400px';
        elem.childNodes[7].style.transition = 'height 0.4s ease-in-out';
        elem.childNodes[5].style.transition = 'height 0.4s ease';
        elem.childNodes[7].play()
    })
    elem.addEventListener('mouseleave',function(){
        elem.childNodes[7].style.opacity = 1
        elem.childNodes[5].style.opacity = 1
        elem.childNodes[7].style.transition = 'height 0.4s ease';
        elem.childNodes[5].style.transition = 'height 0.4s ease';
        elem.childNodes[5].style.height = '270px'
        elem.childNodes[7].style.height = '270px'
        elem.childNodes[7].load()
    })
    
})

gsap.from(".part12-section2-divs h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".part12-section2-divs",
        scroller: "body",
        // markers:true,
        start: "top 80%",
        end: "top 10%",
        scrub: true
    }
})

// var details=document.querySelectorAll("#part10-div2-div1")
// // var details1=document.getElementById("details1")
// var part10=document.getElementById("part10")

// details.forEach(function(summary){
//     summary.addEventListener('click', function(){
//         // details.style.height = '100%'
//         part10.style.height = '520vh'
//     })
// })


