let containerSlider = document.querySelector(".containerSlider");
let slideLeft = document.querySelector(".slideLeft");
let slideRight = document.querySelector(".slideRight");
let arrowDown = document.querySelector(".arrowDown");
let arrowUp = document.querySelector(".arrowUp");
// console.log(slideRight);

let slidesLength = slideRight.querySelectorAll("div").length;
// console.log(slidesLength);

let numberActiveSlide = 0;

slideLeft.style.top = `-${(slidesLength-1) * 100}vh`;

arrowUp.addEventListener("click", function(){
    changeSlide("up");
});
arrowDown.addEventListener("click", function(){
    changeSlide("down");
});

function changeSlide(direction){
    let sliderHeight = containerSlider.clientHeight;

    if(direction === "up"){
        numberActiveSlide++;
        if(numberActiveSlide >= slidesLength){
            numberActiveSlide = 0;
        }
    } else{
        numberActiveSlide--;
        if(numberActiveSlide < 0){
            numberActiveSlide = slidesLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${numberActiveSlide * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${numberActiveSlide * sliderHeight}px)`;
}