var currentSlide = 1

function nextSlide() {
    if(currentSlide < 3){
        $('.slide-container').animate({
            'left' : '-=100%'
        }, 2000)
        currentSlide++;
    }
    else {
        $('.slide-container').animate({
            'left' : '0'
        }, 2000)
        currentSlide = 1
    }
}

function backSlide() {
    if(currentSlide == 1){
        $('.slide-container').animate({
            'left' : '-=200%'
        }, 2000)
        currentSlide = 3;
    }
    else if(currentSlide > 1 && currentSlide < 3){
        $('.slide-container').animate({
            'left' : '+=100%'
        }, 2000)
        currentSlide--;
    }
    else if(currentSlide == 3){
        $('.slide-container').animate({
            'left' : '+=100%'
        }, 2000)
        currentSlide = 2;
    }
}

$('#nextBtn').click(function() {
    nextSlide();
})

$('#backBtn').click(function() {
    backSlide();
})