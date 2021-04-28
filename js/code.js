// Java aos animation 
AOS.init();

$(window).scroll(function(){
    if($(window).scrollTop() >= 300)
    {   
        $('.seta-home').fadeIn();
    }
    else
    {  
        $('.seta-home').fadeOut();
    }

});


$('.seta-home').click(function(){
    $('body,html').animate({
        scrollTop:0,
    });


})
