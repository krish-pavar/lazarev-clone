
function navsize(){

let pag3=document.querySelector(".page3")
let pag1=document.querySelector("#page1")
pag3.addEventListener("mouseenter",()=>{
gsap.to("nav",{
    height:65
})
})

pag1.addEventListener("mouseenter",()=>{
    gsap.to("nav",{
        height:80
    })
    })
}
navsize();









function navAnimanation(){
    
    let nav=document.querySelector(".nav-part2");
 
 
    nav.addEventListener(("mouseenter"),()=>{
       let tl=gsap.timeline()
   tl.to(".nav-bottom",{
    height:"24vh" ,
   
    duration:.4, 
   })
   tl.to(".nev-elem h5",{
       display:"block",
   })
    tl.to(".nev-elem h5 span",{
       y:0,
       stagger:{
           amount:0.5,
          
       }
       
    }
      
    )
    })
   
    nav.addEventListener(("mouseleave"),()=>{
       let tl=gsap.timeline()
   
    tl.to(".nev-elem h5 span",{
     y:25,
       stagger:{
           amount:0.5,
       }
       
    }
      
    )
   
    
    
      tl.to(".nev-elem h5",{
          display:"none", 
   duration:0.1,
      })
      tl.to(".nav-bottom",{
       height:"0", 
       duration:0.3,
   })
    })
 }

navAnimanation();
function movingview(){
 let viewAll=document.querySelector(".moving2container");
viewAll.addEventListener(("mouseenter"),()=>{
    let tl=gsap.timeline();
   

     tl.to(".moving-data1", { 
        y:-15,
        stagger:{
            amount:0.1,
        }
  
     })

     tl.to(".moving-data2",{
        y:-23.8,
        
        stagger:{
            amount:0.1,
        }
})
})

viewAll.addEventListener(("mouseleave"),()=>{
    let tl=gsap.timeline();
   
    tl.to(".moving-data2",{
        y:0,
        stagger:{
            amount:0.1,
        }
    })


     tl.to(".moving-data1", { 
        y:0,
        
        stagger:{
            amount:0.1,

        }
  
     

    
})
})
}
movingview();

function picomove(){
let pico=document.querySelectorAll(".nameboxs");

pico.forEach((pic)=> {
 pic.addEventListener("mouseenter",()=>{

gsap.to(pic.childNodes[2],{
        opacity:.7,
        scale:1,
       
    })
 })

    pic.addEventListener("mouseleave",()=>{

        gsap.to(pic.childNodes[2],{
            scale:0,
                opacity:0,
               
               
            })

        })

        pic.addEventListener("mousemove",(dets)=>{
           
gsap.to(pic.childNodes[2],{
    x:dets.x-pic.getBoundingClientRect().x-280 ,
    y:dets.y-pic.getBoundingClientRect().y-100 ,
})     
                  
               
                
    
            })

 

    
});
}
picomove();

function playvideo(){
let playicon=document.querySelector(".playicon");
let video=document.querySelector("#main-video")
playicon.addEventListener("click",()=>{
    video.play()
   
    gsap.to(video,{
     transform:"scaleX(1) scaleY(1)",


      
    })
})


video.addEventListener("click",()=>{
    video.pause()
   
    gsap.to(video,{
     transform:"scaleX(0.7) scaleY(0)",


      
    })
})
}
playvideo();



function one9(){
    
    let mousemovement2=document.querySelectorAll(".mousemover9");
    let img=document.querySelector("#mimg");
    let v8=document.querySelector(".vidp9");
    
    
    mousemovement2.forEach((tuti)=>{
        tuti.addEventListener("mouseenter",()=>{
    gsap.to(img,{
      opacity:".8",
      scale:"1",
    })
    v8.play()
    })
    
    tuti.addEventListener("mouseleave",()=>{
        gsap.to(img,{
            scale:"0",
          opacity:"0",
          
        })
        v8.load()
        })
        
        tuti.addEventListener("mousemove",(dets)=>{
            gsap.to(img,{
    
      x:dets.x-tuti.getBoundingClientRect().x-40,
      y:dets.y-tuti.getBoundingClientRect().y-60,
    })
    
            })
            
        })
    }
    
    one9();
    

   

    //  second


function two9(){
    
let mousemovement2=document.querySelectorAll(".mousemover92");
let img2=document.querySelector("#mimg2");
let v9=document.querySelector(".vidp92");


mousemovement2.forEach((tuti2)=>{
    tuti2.addEventListener("mouseenter",()=>{
gsap.to(img2,{
  opacity:".8",
  scale:"1",
})
v9.play()
})

tuti2.addEventListener("mouseleave",()=>{
    gsap.to(img2,{
        scale:"0",
      opacity:"0",
      
    })
    v9.load()
    })
    
    tuti2.addEventListener("mousemove",(dets)=>{
        gsap.to(img2,{

  x:dets.x-tuti2.getBoundingClientRect().x-40,
  y:dets.y-tuti2.getBoundingClientRect().y-60,
})

        })
        
    })
}

two9();
let emailbox=document.querySelector(".emailbox")
emailbox.addEventListener("click", ()=>{
    event.stopPropagation();
  emailbox.style.margin="0";
  emailbox.style.height="11vh"
  emailbox.style.borderBottom="3px solid #02ff70"
    document.querySelector("#label").style.fontSize=".9vw";
    document.querySelector("#inputbox11").style.display="block"

})

 let body=document.querySelector("body")
body.addEventListener("click",()=>{
    emailbox.style.marginTop="3vh";
  emailbox.style.height="7vh"
  emailbox.style.borderBottom="1px solid black"
    document.querySelector("#label").style.fontSize="1.3vw";
    document.querySelector("#inputbox11").style.display="none"

})
 
let dcp=document.querySelector(".dcp");
let copytext=document.querySelector(".dcp");

dcp.addEventListener("click",()=>{
navigator.clipboard.writeText(copytext.innerText)

document.querySelector(".dcp p").innerHTML=`<i class="fa-solid fa-check-double"></i>`
setTimeout(() => {
  document.querySelector(".dcp p").innerHTML=`<i class="fa-regular fa-copy"></i>`
}, 400);
})
