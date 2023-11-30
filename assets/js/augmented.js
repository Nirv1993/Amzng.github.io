gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});
gsap.from("#part-1", {
    opacity: 0,
    y: 20,
    duration: 1,
});
gsap.from("#part-2", {
    opacity: 0,
    y: 20,
    duration: 1,
});
gsap.from("#picture-1", {
    opacity:0,
    y: 70,
    duration: 1,
    delay: 0.4,
});
gsap.from("#picture-2", {
    opacity: 0,
    x: 70,
    delay: 0.4,
    duration: 1,
});
gsap.from("#picture-3", {
    opacity: 0,
    y: -70,
    delay: 0.4,
    duration: 1,
});
gsap.from("#one", {
    opacity: 0,
    duration: 1
});
gsap.from("#two", {
    opacity: 0,
    duration: 1
});
gsap.from("#text-1", {
    scrollTrigger: {
        trigger: "#text-1",
        start: "top 80%",
        scroller:"#main"
    },
    opacity: 0,
    y: 30,
    duration: 0.5
});
gsap.from("#four", {
    scrollTrigger: {
        trigger: "#four",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    delay: 0.2,
    y: 30,
    duration: 0.5
});
gsap.from("#five", {
    scrollTrigger: {
        trigger: "#five",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    delay: 0.2,
    y: 30,
    duration: 0.5
});
gsap.from("#picture-4, #picture-6", {
    scrollTrigger: {
        trigger: "#picture-4, picture-6",
        scroller:"#main",
        start: "top 90%",
    },
    opacity: 0,
    y: 60,
    duration: 1,
    delay: 0.4
});
gsap.from("#picture-5, #picture-7", {
    scrollTrigger: {
        trigger: "#picture-5, #picture-7",
        scroller:"#main",
        start: "top 90%"
    },
    opacity: 0,
    y: 60,
    duration: 1,
    delay: 0.6
});
gsap.from("#six", {
    scrollTrigger: {
        trigger: "#six",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    y: 30,
    duration: 0.5
});
gsap.from("#seven", {
    scrollTrigger: {
        trigger: "#seven",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    delay: 0.2,
    y: 30,
    duration: 0.5
});
gsap.from("#text-21", {
    scrollTrigger: {
        trigger: "#text-21",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    delay: 0.2,
    y: 30,
    duration: 0.5
});
gsap.from("#nine", {
    scrollTrigger: {
        trigger: "#nine",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    y: 30,
    duration: 0.5
});
gsap.from("#section-4 #row img", {
    scrollTrigger: {
        trigger: "#section-4 #row img",
        scroller:"#main",
        start: "top 80%",
    },
    y: 10,
    opacity: 0,
    duration: 1
});
gsap.from("#box", {
    scrollTrigger: {
        trigger: "#box",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 1
});
gsap.from("#text-22", {
    scrollTrigger: {
        trigger: "#text-22",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 0.5
});
gsap.from("#reviews", {
    scrollTrigger: {
        trigger: "#reviews",
        scroller:"#main",
        start: "top 80%",
    },
    y: 10,
    opacity: 0,
    duration: 1
});
gsap.from("#contact #background", {
    scrollTrigger: {
        trigger: "#contact #background",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    duration: 1.5
});
gsap.from("#negotiate", {
    scrollTrigger: {
        trigger: "#negotiate",
        scroller:"#main",
        start: "top 80%",
        
    },
    opacity: 0,
    y: 40,
    duration: 1,
});
gsap.from("#learn", {
    scrollTrigger: {
        trigger: "#learn",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.2
});
gsap.from("#explore", {
    scrollTrigger: {
        trigger: "#explore",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.4
});
gsap.from("#find-us", {
    scrollTrigger: {
        trigger: "#find-us",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    y:40,
    duration: 1,
    delay: 0.6
});
gsap.from("#sponsors img", {
    scrollTrigger: {
        trigger: "#sponsors img",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    y:40,
    duration: 1,
    delay: 0.8
});

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:1,
            
        },
        1000:{
            items:1,
        
        }
    }
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();


gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});
gsap.from("#part-1", {
    opacity: 0,
    y: 20,
    duration: 1,
});
gsap.from("#part-2", {
    opacity: 0,
    y: 20,
    duration: 1,
});
gsap.from("#picture-1", {
    opacity:0,
    y: 70,
    duration: 1,
    delay: 0.4,
});
gsap.from("#picture-2", {
    opacity: 0,
    x: 70,
    delay: 0.4,
    duration: 1,
});
gsap.from("#picture-3", {
    opacity: 0,
    y: -70,
    delay: 0.4,
    duration: 1,
});
gsap.from("#one", {
    opacity: 0,
    duration: 1
});
gsap.from("#two", {
    opacity: 0,
    duration: 1
});
gsap.from("#text-1", {
    scrollTrigger: {
        trigger: "#text-1",
        start: "top 80%",
        scroller:"#main"
    },
    opacity: 0,
    y: 30,
    duration: 0.5
});
gsap.from("#four", {
    scrollTrigger: {
        trigger: "#four",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    delay: 0.2,
    y: 30,
    duration: 0.5
});
gsap.from("#five", {
    scrollTrigger: {
        trigger: "#five",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    delay: 0.2,
    y: 30,
    duration: 0.5
});
gsap.from("#picture-4, #picture-6", {
    scrollTrigger: {
        trigger: "#picture-4, picture-6",
        scroller:"#main",
        start: "top 90%",
    },
    opacity: 0,
    y: 60,
    duration: 1,
    delay: 0.4
});
gsap.from("#picture-5, #picture-7", {
    scrollTrigger: {
        trigger: "#picture-5, #picture-7",
        scroller:"#main",
        start: "top 90%"
    },
    opacity: 0,
    y: 60,
    duration: 1,
    delay: 0.6
});
gsap.from("#six", {
    scrollTrigger: {
        trigger: "#six",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    y: 30,
    duration: 0.5
});
gsap.from("#seven", {
    scrollTrigger: {
        trigger: "#seven",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    delay: 0.2,
    y: 30,
    duration: 0.5
});
gsap.from("#text-21", {
    scrollTrigger: {
        trigger: "#text-21",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    delay: 0.2,
    y: 30,
    duration: 0.5
});
gsap.from("#nine", {
    scrollTrigger: {
        trigger: "#nine",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    y: 30,
    duration: 0.5
});
gsap.from("#section-4 #row img", {
    scrollTrigger: {
        trigger: "#section-4 #row img",
        scroller:"#main",
        start: "top 80%",
    },
    y: 10,
    opacity: 0,
    duration: 1
});
gsap.from("#box", {
    scrollTrigger: {
        trigger: "#box",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 1
});
gsap.from("#text-22", {
    scrollTrigger: {
        trigger: "#text-22",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 0.5
});
gsap.from("#reviews", {
    scrollTrigger: {
        trigger: "#reviews",
        scroller:"#main",
        start: "top 80%",
    },
    y: 10,
    opacity: 0,
    duration: 1
});
gsap.from("#contact #background", {
    scrollTrigger: {
        trigger: "#contact #background",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    duration: 1.5
});
gsap.from("#negotiate", {
    scrollTrigger: {
        trigger: "#negotiate",
        scroller:"#main",
        start: "top 80%",
        
    },
    opacity: 0,
    y: 40,
    duration: 1,
});
gsap.from("#learn", {
    scrollTrigger: {
        trigger: "#learn",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.2
});
gsap.from("#explore", {
    scrollTrigger: {
        trigger: "#explore",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.4
});
gsap.from("#find-us", {
    scrollTrigger: {
        trigger: "#find-us",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    y:40,
    duration: 1,
    delay: 0.6
});
gsap.from("#sponsors img", {
    scrollTrigger: {
        trigger: "#sponsors img",
        scroller:"#main",
        start: "top 80%",
    },
    opacity: 0,
    y:40,
    duration: 1,
    delay: 0.8
});

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:1,
            
        },
        1000:{
            items:1,
        
        }
    }
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();


