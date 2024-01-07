

var tl= gsap.timeline()

tl
    .from("#nav>h1,h4,i",{
        y:-100,
        stagger:.3,
        duration:.4
    })

    .from("#page1 #matter h1,h3",{
        y:100,
        opacity:0,
        stagger:.2,
        duration:.5
    })

    .to("#page3",{
        background:"white",
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            // markers:true,
            start:"top 60%",
            end:"top 50%",
            scrub:true
        }
    })

    .to("#page3 h3,h1",{
        color:"black",
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            // markers:true,
            start:"top 60%",
            end:"top 50%",
            scrub:true
        }
    })


    .to("#page5 h1",{
        color:"white",
        scrollTrigger:{
            trigger:"#page5",
            scroller:"body",
            // markers:true,
            start:"top 90%",
            end:"top 80%",
            scrub:true
        }
    })



    .to("#page6",{
        background:"white",
        color:"black",
        scrollTrigger:{
            trigger:"#page6",
            scroller:"body",
            // markers:true,
            start:"top 60%",
            end:"top 50%",
            scrub:3
        }
    })

    .to("#page6 h3,h1",{
        color:"black",
        scrollTrigger:{
            trigger:"#page6",
            scroller:"body",
            // markers:true,
            start:"top 60%",
            end:"top 50%",
            scrub:true
        }
    })



    .to("#page7",{
        background:"black",
        scrollTrigger:{
            trigger:"#page7",
            scroller:"body",
            // markers:true,
            start:"top 10%",
            end:"top 5%",
            scrub:3
        }
    })


    .to("#page7 h5,h1,h2",{
        color:"white",
        scrollTrigger:{
            trigger:"#page7",
            scroller:"body",
            // markers:true,
            start:"top 10%",
            end:"top 5%",
            scrub:3
        }
    })


    .to("#page8",{
        background:"black",
        scrollTrigger:{
            trigger:"#page8",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 75%",
            scrub:3
        }
    })

    .to("#page8 h3,h1,h5",{
        color:"white",
        scrollTrigger:{
            trigger:"#page8",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 75%",
            scrub:true
        }
    })












function play(){

    var page2= document.querySelector("#page2-video")

    var gola= document.querySelector("#gola")

    page2.addEventListener("mouseenter",function(){
        page2.addEventListener("mousemove",function(val){

            gola.style.opacity=1
            gsap.to("#gola",{
                left:val.x,
                top:val.y-100
            })
        })
    })


    page2.addEventListener("mouseleave",function(val){
        gola.style.opacity=0
    })


    var flag=0


    var video= document.querySelector("#page2-video video")


    video.addEventListener("click",function(){
        if(flag==0){
            video.play()
            gola.innerHTML=`<i class="ri-volume-mute-line"></i>`
            flag=1
        }
        else{
            gola.innerHTML=`<i class="ri-volume-up-fill"></i>`
            video.pause()
            flag=0
        }
    })
}





function bodyColor(){
    var body= document.querySelector("body")


    gsap.to('body',{
        background:"black",
        color:"white",
        scrollTrigger:{
            trigger:"#page4",
            scroller:"body",
            // markers:true,
            start:"bottom 90%",
            end:"bottom 80%",
            scrub:2
        }
    })
}

bodyColor() 

function videoAnimation(){

    var video1= document.querySelector("#video1")
    var video2= document.querySelector("#video2")
    var video3= document.querySelector("#video3")


    var part1= document.querySelector(".part1")
    var part2= document.querySelector(".part2")
    var part3= document.querySelector(".part3")

    part1.addEventListener("mouseenter",function(){
        video1.style.opacity=1
        document.querySelector(".but1").style.opacity=1

    })


    part1.addEventListener("mouseleave",function(){
        video1.style.opacity=0
        document.querySelector(".but1").style.opacity=0

    })



    part2.addEventListener("mouseover",function(){
        video2.style.opacity=1
        document.querySelector(".but2").style.opacity=1

    })


    part2.addEventListener("mouseleave",function(){
        video2.style.opacity=0
        document.querySelector(".but2").style.opacity=0
    })



    part3.addEventListener("mouseover",function(){
        video3.style.opacity=1
        document.querySelector(".but3").style.opacity=1

    })


    part3.addEventListener("mouseleave",function(){
        video3.style.opacity=0
        document.querySelector(".but3").style.opacity=0

    })
}










function cursor(){
    var h1 =document.querySelector("#page10 h1")
    var h3 =document.querySelector("#page10 h3")

    h1.addEventListener("mouseenter",function(){
        gsap.to("#page10 video",{
            transform:'rotate(20deg) scale(1.2)'

        })

    })


    h1.addEventListener("mouseleave",function(){
        gsap.to("#page10 video",{
            transform:'rotate(0deg) scale(1)',

        })

    })


    h3.addEventListener("mouseenter",function(){
        gsap.to("#page10 video",{
            transform:'rotate(20deg)scale(1.2)'

        })

    })


    h3.addEventListener("mouseleave",function(){
        gsap.to("#page10 video",{
            transform:'rotate(0deg)scale(1)',

        })

    })


}






function marquee(){
    var i= document.querySelector("#instagram")


    i.addEventListener("mouseenter",function(){
        document.querySelector("#insta").style.display="block"
    
        i.style.opacity=0
    })




    i.addEventListener("mouseleave",function(){
        document.querySelector("#insta").style.display="none"
    
        i.style.opacity=1
    })





    var twi= document.querySelector("#twi")


    twi.addEventListener("mouseenter",function(){
        document.querySelector("#x").style.display="block"
        twi.style.opacity=0
    })




    twi.addEventListener("mouseleave",function(){
        document.querySelector("#x").style.display="none"
        twi.style.opacity=1
    })




    var yo= document.querySelector("#yo")


    yo.addEventListener("mouseenter",function(){
        document.querySelector("#yt").style.display="block"
        yo.style.opacity=0
    })




    yo.addEventListener("mouseleave",function(){
        document.querySelector("#yt").style.display="none"
        yo.style.opacity=1
    })




    var l= document.querySelector("#lin")


    l.addEventListener("mouseenter",function(){
        document.querySelector("#link").style.display="block"
        l.style.opacity=0
    })




    l.addEventListener("mouseleave",function(){
        document.querySelector("#link").style.display="none"
        l.style.opacity=1
    })

}






play()
videoAnimation()
marquee()
cursor()






Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    duration: 1,
  });





  Shery.imageMasker("#page5-cont" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "Shery",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


  Shery.imageMasker("#page10" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "Let's Talk",
    // ease: "linear",
    duration: 1,
  });









