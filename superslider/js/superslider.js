'use strict'

const slider = document.querySelector('.slider');
const sliderHolder = document.querySelector('.slider-holder');
const sliderItems = document.querySelectorAll('.slider-item');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

let currentNumber = 0;

const getImageWidth = () => {
    return (sliderItems[0].offsetWidth);
}

const getNextImage = () => {
    if (currentNumber === (8-1)) currentNumber = 0;
    else currentNumber +=1;
    console.log(currentNumber);
    sliderHolder.setAttribute('style', 'margin-left: -'+(currentNumber * getImageWidth())+'px');
}

const getPrevImage = () => {
    if (currentNumber === 0) currentNumber = (8-1);
    else currentNumber -=1;
    console.log(currentNumber);
    sliderHolder.setAttribute('style', 'margin-left: -'+(currentNumber * getImageWidth())+'px');
}



(() => nextButton.addEventListener('click', getNextImage))();
(() => prevButton.addEventListener('click', getPrevImage))();