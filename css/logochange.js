$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $('#custom-nav').addClass('affix');
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $('.navbar-brand img').attr('src','img/logobig.png'); //change src
    } else {
        $('#custom-nav').removeClass('affix');
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $('.navbar-brand img').attr('src','img/logoog.png')
    }   
})