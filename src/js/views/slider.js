$('document').ready(function(){
    let slideSpeed = 700;
    let slides = $('.slide');
    let size = slides.length;
    let sliderCount = 0;
    console.log(size);

    $('a #next').on('click',(e) => {
        onClickHandler(e);
    });

    $('a #prev').on('click',(e) => {
        onClickHandler(e);
    });

    function onClickHandler(e){
        e.preventDefault();
        animSlide(e.target.id);
    }

    function animSlide(arrow) {
        switch (arrow) {
            case 'prev':
                if (sliderCount === 0) {
                    slides.eq(sliderCount).fadeOut();
                    sliderCount = size-1;
                    slides.eq(sliderCount).fadeIn(slideSpeed);
                    break;
                }
                else {
                    slides.eq(sliderCount).fadeOut();
                    sliderCount -= 1;
                    slides.eq(sliderCount).fadeIn(slideSpeed);
                    break;
                }
            case 'next':
                if (sliderCount === size-1){
                    slides.eq(sliderCount).fadeOut();
                    sliderCount = 0;
                    slides.eq(sliderCount).fadeIn(slideSpeed);
                    break;
                }
                else {
                    slides.eq(sliderCount).fadeOut();
                    sliderCount += 1;
                    slides.eq(sliderCount).fadeIn(slideSpeed);
                    break;
                }
        }
        console.log(sliderCount);
    }
});
