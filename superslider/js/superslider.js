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
 const numbersOfImages = images.length;

let currentNumber = 0;
let isSlideAble = true;

// Holder létrehozása
const sliderWidthStyle = 'width: '+(100 * numbersOfImages)+'%;'
const sliderHolder = document.createElement('div');
sliderHolder.classList.add('slider-holder');
sliderHolder.setAttribute('style', sliderWidthStyle);
slider.appendChild(sliderHolder);

//Footer létrehozása
const sliderFooter = document.createElement('div');
sliderFooter.classList.add('slider-footer');
slider.appendChild(sliderFooter);

//Dot tároló (Dots) létrehozása
const sliderDots = document.createElement('div');
sliderDots.classList.add('slider-dots');
sliderFooter.appendChild(sliderDots);


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
    sliderDots.appendChild(dot);
});
const sliderItems = document.querySelectorAll('.slider-item');

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
    sliderHolder.setAttribute('style', 'margin-left: -'+(currentNumber * getImageWidth())+'px; '+sliderWidthStyle);
    setTimeout(setCaption, 400);
    setTimeout(setImageCounter, 400);
}

// előző képre lapozás
const getPrevImage = (slideState) => {
    isSlideAble = slideState;
    if (currentNumber === 0) currentNumber = (numbersOfImages - 1);
    else currentNumber -=1;
    sliderHolder.setAttribute('style', 'margin-left: -'+(currentNumber * getImageWidth())+'px;'+sliderWidthStyle);
    setTimeout(setCaption, 400);
    setTimeout(setImageCounter, 400);
}

// Automatikus lapozás
const autoslide = () => {
    if (isSlideAble === true ) getNextImage(true);
    else isSlideAble= true;
}

setInterval(autoslide, 5000);

(() => nextButton.addEventListener('click', () => getNextImage(false)))();
(() => prevButton.addEventListener('click', () => getPrevImage(false)))();