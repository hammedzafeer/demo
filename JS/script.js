
let progress = document.getElementById("ProgressBar");
let totalheight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressheight = (window.pageYOffset / totalheight) * 100;
    progress.style.height = progressheight + "%"
}


$(document).ready(function () {

    // navigation bar toggle
    $('#navbar-toggler').click(function () {
        $('.navbar-collapse').slideToggle(400);
    })


    // navbar bg change on scroll
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos >= 100) {
            $('.navbar').addClass('cng-navbar');
        }
        else {
            $('.navbar').removeClass('cng-navbar');
        }
    });

    // sample video

    $(document).ready(function () {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });

    // <!-- team owl carousel  -->
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    // faq section
    $('.faq-head').each(function () {
        $(this).click(function () {
            $(this).next().toggleClass('show-faq-content');
            let icon = $(this).children('span').children('i').attr('class');
            if (icon == "fas fa-plus") {
                $(this).children('span').html('<i class = "fas fa-minus"></i>');
            }
            else {
                $(this).children('span').html('<i class = "fas fa-plus" ></i>');
            }
        })
    })

    // testimonial
        $('.testimonial .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            dots: true,
            nav: false,
            items: 1
        })

})