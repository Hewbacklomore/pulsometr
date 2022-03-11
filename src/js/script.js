// let number=7;

// number = 4;

// console .log (number);

// let answer = confirm ("How old r u?");
// console.log (answer)

// if (2*4 == 8*1) {
//     console .log (true)
// }

// let answer = confirm('How old r u?');
// if (answer) {
//     console .log('Verno')
// } else {
//     console .log ('GET OUT')
// }

// const number = 50;

// if (number<49) {
//     console .log('Neverno') 
// }else if (number>100) {
//     console .log('Mnogo')
// } else {
//     console .log('Verno')
// }

/* for (let i=1; i<8; i++) {
    console.log(i);
} */

// function logging(a , b) {
//     console.log(a + b)
// }

// logging (3, 5);



// const number =4;

// if (number<40) {
//     console.log('Verno')
// }else if(number>40) {
//     console.log('False')
// }else {
//     console.log('Yep')
// }


$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
            },
            {
                breakpoint: 730,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
            }
        ]
      });
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      $('catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').toggleClass('catalog-item__list_active');
        }) 
    }) 

    //Modal
    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut();
    });
    // $('.button_main').on('click', function() {
    //   $('.overlay, #order' ).fadeIn();
    // });
    $('.button_main').each(function(i) {
    $(this).on('click', function() {
        $('.overlay, #order' ).fadeIn();
        $('#order, .modal__descr').text($('.catalog-item__subtitle').any(i).text());
      })
    });
    // $('#consultation-form').validate();
    // $('#consultation form').validate({
    //   messages: {
    //     phone: "Напиши свой телефон",
    //     name: "Пожалуйста, заполни поле",
    //     email: {
    //       required: "Заполни свой email",
    //       email: "Заполни свой email"
    //     }
    //   }
    // });
    // $('#order form').validate();

    function valideForms(form) {
      $(form).validate({
        messages: {
          name: "Пожалуйста, заполни поле",
          email: {
            required: "Заполни свой email",
            email: "Заполни свой email"
          }
        }
      });
    }
    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

    $('input[name=phone]').mask("+38(066) 999-9999");

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find('input').val("");

        $('form').trigger('reset');
      });
      return false;
    });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
          $('.pageup').fadeIn();
      } else {
          $('.pageup').fadeOut();
      }
    });
    new WOW().init();
});


