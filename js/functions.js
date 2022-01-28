$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 500);
            return false;
        }
    }
});

$(document).ready(function(){

    /*var screenHeight = $(window).height();
    $('footer').css('top', screenHeight);*/

    i=1;
    $('#hamburger').click(function(){
         if (i === 1)
        {
           $('#menu').removeClass('responsive').addClass('activeMenu');
            i=0;
        }
        else{
            $('#menu').removeClass('activeMenu').addClass('responsive');
            i=1;
        }
        
    });
});