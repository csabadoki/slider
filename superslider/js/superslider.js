'use strict'

const images = [
    {
        imageUrl: './superslider/images/2020-02-14.jpg',
        title:    'Wintertime',
    },
    {
        imageUrl: './superslider/images/IMG_1542.jpg',
        title:    'Sunset',
    },
    {
        imageUrl: './superslider/images/IMG_1632.jpg',
        title:    'Bird',
    },
    {
        imageUrl: './superslider/images/IMG_2068.jpg',
        title:    'Butterfly',
    },
    {
        imageUrl: './superslider/images/IMG_2408.jpg',
        title:    'Balaton',
    },
    {
        imageUrl: './superslider/images/IMG_2492.jpg',
        title:    'Tihany',
    },
    {
        imageUrl: './superslider/images/IMG_5530.jpg',
        title:    'Cloudy',
    },
    {
        imageUrl: './superslider/images/IMG_5590.jpg',
        title:    'Madonna',
    },
];
    

const slider = document.querySelector('.slider');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');
const numbersOfImages = images.length;

let currentNumber = 0;
let isSlideAble = true;

// Holder létrehozása
const sliderHolder = document.createElement('div');
sliderHolder.classList.add('slider-holder');
sliderHolder.setAttribute('style', 'width: '+(100 / numbersOfImages)+'%;');
slider.appendChild(sliderHolder);

// Képtömb bejárása
images.forEach((element, index) => {
    const item = document.createElement('div');
    item.classList.add('slider-item');
    item.setAttribute('style', 'background-image: url('+element.imageUrl+'); width: '+(100 / numbersOfImages)+'%;');
    sliderHolder.appendChild(item);
});
const sliderItems = document.querySelectorAll('.slider-item');


// képméret lekérdezése
const getImageWidth = () => {
    return (sliderItems[0].offsetWidth);
}

// következő képre lapozás
const getNextImage = (slideState) => {
    isSlideAble = slideState;
    if (currentNumber === (numbersOfImages - 1)) currentNumber = 0;
    else currentNumber +=1;
    console.log(currentNumber);
    sliderHolder.setAttribute('style', 'margin-left: -'+(currentNumber * getImageWidth())+'px');
}

// előző képre lapozás
const getPrevImage = (slideState) => {
    isSlideAble = slideState;
    if (currentNumber === 0) currentNumber = (numbersOfImages - 1);
    else currentNumber -=1;
    console.log(currentNumber);
    sliderHolder.setAttribute('style', 'margin-left: -'+(currentNumber * getImageWidth())+'px');
}

// Automatikus lapozás
const autoslide = () => {
    if (isSlideAble === true ) getNextImage(true);
    else isSlideAble= true;
}

setInterval(autoslide, 3000);

(() => nextButton.addEventListener('click', () => getNextImage(false)))();
(() => prevButton.addEventListener('click', () => getPrevImage(false)))();