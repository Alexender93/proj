import React from 'react'

const Slider = () => {
    let elem = document.getElementById('nav-icon3');
elem.addEventListener('click', () => {
elem.classList.toggle('open');
})

    const container = document.querySelector('#carousel');
    const slides = container.querySelectorAll('.slide');
    const indicatorsContainer = container.querySelector('#indicators-container');
const indicators =indicatorsContainer.querySelectorAll('.indicator');
    const pauseBtn = container.querySelector('#btn-pause');
    const prevBtn = container.querySelector('#btn-prev');
    const nextBtn = container.querySelector('#btn-next');
    
    const SLIDES_COUNT = slides.length;
    const CODE_LEFT_ARROW = 'ArrowLeft';
    const CODE_RIGHT_ARROW = 'ArrowRight';
    const CODE_SPACE = 'Space';
    let currentSlide = 0;
    let isPlaying = true;
    let timerID = null;
    let startPosX = null;
    let endPosX = null;
    function gotoNth(n) {
        slides[currentSlide].classList.toggle('active');
        indicators[currentSlide].classList.toggle('active');
        currentSlide = (n + slides.length ) % SLIDES_COUNT;
        indicators[currentSlide].classList.toggle('active');
            
          slides[currentSlide].classList.toggle('active');
    
    }
    function gotoPrev() {
    gotoNth(currentSlide -1);
    
    }
    function prev () {
        gotoPrev();   
     pause();
    }
    function gotoNext() {
    gotoNth(currentSlide + 1);
      
     
    }
    function next() {
    gotoNext();
    pause();
    
    }
    function pause() {
    
    pauseBtn.innerHTML = 'Play';
    isPlaying = false;
    clearInterval(timerID);
    }
    
    function play() {
       
            pauseBtn.innerHTML = 'Pause';
            isPlaying = true;
            timerID = setInterval(gotoNext, 2000);
        }
    
    
    function pausePlay() {
    isPlaying ? pause() : play()
    
    
    }
    function indicate(e) {
    const target = e.target;
    if(target && target.classList.contains('indicator')) {
        pause();
        console.dir(target.dataset.slideTo);
        gotoNth(+target.dataset.slideTo);
    }
    }
    function swipeStart(e) {
        if(e instanceof MouseEvent) {
            startPosX = e.pageX;
            return;
        }
        if(e instanceof TouchEvent) {
            startPosX = e.changedTouches[0].pageX;
        }
      
     
    }
    function swipeEnd(e) {
        if(e instanceof MouseEvent) {
        endPosX = e.pageX; 
    } else if (e instanceof TouchEvent) {
       endPosX = e.changedTouches[0].pageX; 
        }
        if(endPosX - startPosX > -100) prev();
        if(endPosX - startPosX < 100 ) next();
      
    
    }
    
    
    function pressKey(e) {
    if(e.code === CODE_LEFT_ARROW) return prev();
    if(e.code === CODE_RIGHT_ARROW) return next();
    if(e.code === CODE_SPACE) return pausePlay();
    }
    function initListeners() {
        pauseBtn.addEventListener('click', pausePlay);
        prevBtn.addEventListener('click', prev);
        nextBtn.addEventListener('click', next);
        indicatorsContainer.addEventListener('click', indicate);
        document.addEventListener('keydown', pressKey);
        container.addEventListener('touchstart', swipeStart);
        container.addEventListener('mousedown', swipeStart);
        container.addEventListener('mouseup', swipeEnd);
        container.addEventListener('touchend', swipeEnd);
    
    }
    function init() {
    initListeners();
    timerID = setInterval(gotoNext, 2000); 
    
    }
    init();
    
  return (
    
    <div></div>
  )
}

export default Slider