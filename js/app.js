// start nav section
const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{
    let scrolly = window.scrollY;
    // console.log(scrolly);

    if(scrolly > 300 ){
        nav.classList.add("active");
    }else {
        nav.classList.remove("active");
    }
});


// end nav section


// start section
const slides = document.querySelectorAll('.slide');
const seasonbtns = document.querySelectorAll('.season');
const seasoncontainers = document.querySelectorAll('.season-container');
const epnums = document.querySelectorAll('.epnumber');

// console.log(slides[0].classList);
epnums.forEach(function (epnum,index){
    // console.log(epnum);
    let num = 1;
    for( let i = 0 ; i < epnums.length ; i++ ){
        epnums[i].innerText = num++;
    }
})



seasonbtns.forEach(seasonbtn=>{
    // console.log(seasonbtn);
    seasonbtn.addEventListener('click',function (){
        // console.log(seasonbtn.className);
        if(seasonbtn.classList.contains('sone')){
            console.log("s1");
            removeactive();
            slides[0].classList.add('active');
            seasoncontainers[0].classList.add('active');
        }else if(seasonbtn.classList.contains('stwo')){
            console.log("s2");
            removeactive();
            slides[1].classList.add('active');
            seasoncontainers[1].classList.add('active');
        }
    })
})


// removeactive
function removeactive(){
    slides.forEach(slide=>slide.classList.remove('active'));
    seasoncontainers.forEach(seasoncontainer=>seasoncontainer.classList.remove('active'));
}


// end section