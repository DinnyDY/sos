// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const slideritems = Array.from(slider.children);
const btnNext = document.querySelector('.switch');


slideritems.forEach(function(slide, index) {


    if (index !== 0) slide.classList.add("hidden");


    slide.dataset.index = index;
    slideritems[0].setAttribute('data-active', '');

    slide.addEventListener('click', function() {
        slide.classList.add('hidden');
        slide.removeAttribute('data-active');

        let nextSlideIndex = index + 1 === slideritems.length ? 0 : index + 1;



        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');



    })

})

btnNext.onclick = function() {
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIdex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    const nextSlideIndex = currentSlideIdex + 1 === slideritems.length ? 0 : currentSlideIdex + 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');

}