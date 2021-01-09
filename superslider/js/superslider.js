'use strict'

import { params, images } from './config.js';

const slider = document.querySelector('.slider');
 const numbersOfImages = images.length;

let currentNumber = 0;
let isSlideAble = true;

// Holder létrehozása
const sliderDimension = 'height: '+params.sliderHeight+'px; width: '+(100 * numbersOfImages)+'%;'
const sliderHolder = document.createElement('div');
sliderHolder.classList.add('slider-holder');
sliderHolder.setAttribute('style', sliderDimension);
slider.appendChild(sliderHolder);

//Footer létrehozása
const sliderFooter = document.createElement('div');
sliderFooter.classList.add('slider-footer');
slider.appendChild(sliderFooter);

//Dot tároló (Dots) létrehozása
const dots = document.createElement('div');
dots.classList.add('slider-dots');
sliderFooter.appendChild(dots);


// Képtömb bejárása és a kép- és dot elemek létrehozása
images.forEach((element, index) => {
    // Képtárolók létrehozása
    const item = document.createElement('div');
    item.classList.add('slider-item');
    item.setAttribute('style', 'background-image: url('+element.imageUrl+'); width: '+(100 / numbersOfImages)+'%;');
    sliderHolder.appendChild(item);
    //Dotok létrehozása
    const dot = document.createElement('div');
    dot.classList.add('slider-dot');
    dots.appendChild(dot);
});
const sliderItems = document.querySelectorAll('.slider-item');
const sliderDots = document.querySelectorAll('.slider-dot');

// Az aktuális dot beállítása
const setCurrentDot = () => {
    sliderDots.forEach(element => element.classList.remove('slider-dot_selected'));
    sliderDots[currentNumber].classList.add('slider-dot_selected')
}
setCurrentDot();

// Előző gomb hozzáadása
const prevButton = document.createElement('div');
prevButton.classList.add('arrow', 'prev-Button');
slider.appendChild(prevButton);


// Következő gomb hozzáadása
const nextButton = document.createElement('div');
nextButton.classList.add('arrow', 'next-Button');
slider.appendChild(nextButton);

// Caption text hozzáadása
const caption = document.createElement('div');
caption.classList.add('slider-caption');
slider.appendChild(caption);

//Caption tartalma
const setCaption = () => {
    caption.textContent = images[currentNumber].title;
}

setCaption(); 

// Képszámláló hozzáadása
const imageCounter = document.createElement('div');
imageCounter.classList.add('image-Counter');
slider.appendChild(imageCounter);

// Képszámláló tartalma
const setImageCounter = () => {
imageCounter.textContent = `${currentNumber + 1} / ${numbersOfImages}`;
}

setImageCounter();

// képméret lekérdezése
const getImageWidth = () => {
    return (slider.offsetWidth);
}

// következő képre lapozás
const getNextImage = (slideState) => {
    isSlideAble = slideState;
    if (currentNumber === (numbersOfImages - 1)) currentNumber = 0;
    else currentNumber +=1;
    console.log(currentNumber);
    sliderHolder.setAttribute('style', 'margin-left: -'+(currentNumber * getImageWidth())+'px; '+sliderDimension);
    setTimeout(setCaption, 400);
    setTimeout(setImageCounter, 400);
    setTimeout(setCurrentDot, 400);
}

// előző képre lapozás
const getPrevImage = (slideState) => {
    isSlideAble = slideState;
    if (currentNumber === 0) currentNumber = (numbersOfImages - 1);
    else currentNumber -=1;
    sliderHolder.setAttribute('style', 'margin-left: -'+(currentNumber * getImageWidth())+'px;'+sliderDimension);
    setTimeout(setCaption, 400);
    setTimeout(setImageCounter, 400);
    setTimeout(setCurrentDot, 400);
}

// Lapozás adott képre
const goToImage = (slideState, index) => {
    isSlideAble = slideState;
    currentNumber = index;
    sliderHolder.setAttribute('style', 'margin-left: -'+(currentNumber * getImageWidth())+'px; '+sliderDimension);
    setTimeout(setCaption, 400);
    setTimeout(setImageCounter, 400);
    setTimeout(setCurrentDot, 400);
}

// Automatikus lapozás
const autoslide = () => {
    if (isSlideAble === true ) getNextImage(true);
    else isSlideAble= true;
}

setInterval(autoslide, params.sliderinterval);

// Eseménykezelő
(() => nextButton.addEventListener('click', () => getNextImage(false)))();
(() => prevButton.addEventListener('click', () => getPrevImage(false)))();

sliderDots.forEach((element, index) => {
    element.addEventListener('click', () => goToImage(false, index));
});





