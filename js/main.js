$(function () {

  let menu = $('.menu');
  /*let headerHeight = header.height(); 
  //Якщо потрібно, щоб після хедера шапка була лепкою*/
  let menuHeight = menu.height();

  $(window).scroll(function () {
    if ($(this).scrollTop() > menuHeight) {
      menu.addClass('fixed');
    } else {
      menu.removeClass('fixed');
    }
  });

  $(".menu a, .logo, .header__link").on("click", function (event) {

    event.preventDefault();

    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  });


  let mixer = mixitup('.portfolio__content');

  $('.reviews__inner').slick({
    arrows: false,
    dots: true
  });

  function bodyVisible() {
    if ($('.menu__list').hasClass('menu__list--active')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'visible');
    }
  }

  $('.burger').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.burger').toggleClass('burger--active');
    bodyVisible();
  });

  $('.menu a').on('click', function () {
    $('.menu__list').removeClass('menu__list--active');
    $('.burger').removeClass('burger--active');
    bodyVisible();
  })

});



/* SLIDER */
/*const slides = document.querySelectorAll('.reviews__item'),
  dots = document.querySelectorAll('.reviews__dot');

let index = 0;

const activeSlide = n => {
  for (reviews__item of slides) {
    reviews__item.classList.remove('reviews__item--active');
  }
  slides[n].classList.add('reviews__item--active');
}

const activeDot = n => {
  for (reviews__dot of dots) {
    reviews__dot.classList.remove('reviews__dot--active');
  }
  dots[n].classList.add('reviews__dot--active');
}

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    activeSlide(index);
    activeDot(index);
  } else {
    index++;
    activeSlide(index);
    activeDot(index);
  }
}

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1
    activeSlide(index);
    activeDot(index);
  } else {
    index--;
    activeSlide(index);
    activeDot(index);
  }
}

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    nextSlide(index);
    prevSlide(index);
  })
});*/