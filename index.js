$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // typing animation scripet----------
    var typed = new Typed(".typing",{
         strings: ["Developer", "Freelancer", "Designer"],
         typeSpeed: 100,
         backSpeed: 60,
         loop: true
    });
    var typed = new Typed(".typing2",{
         strings: ["Developer", "Freelancer", "Designer"],
         typeSpeed: 100,
         backSpeed: 60,
         loop: true
    });

    // owl carousel script----
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
           1000:{
                items: 3,
                nav: false
            }
        }
    });
});