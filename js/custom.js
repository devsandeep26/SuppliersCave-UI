/*====================
on scroll animation effect 
======================*/
$(function () {

    // animate on scroll
    new WOW().init();
});



/*================
navbar hidden code 
=================*/
$(function(){

   $(window).scroll(function(){
      if($(this).scrollTop() <50 ) {
          //hide 
          $("nav").removeClass("supply-top-nav");
      } else  {
          //show 
             $("nav").addClass("supply-top-nav");
      }
       
       
       
   }); 
    
    
    
});
/*============== 
login modal rules 
==========*/
function showRegisterForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Register with');
    }); 
    $('.error').removeClass('alert alert-danger').html('');
       
}
function showLoginForm(){
    $('#loginModal .registerBox').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');    
        });
        
        $('.modal-title').html('Login with');
    });       
     $('.error').removeClass('alert alert-danger').html(''); 
}

function openLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}
function openRegisterModal(){
    showRegisterForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}


/*===========
carousel effect slide
============*/
$(function () {

    $("#clients-list").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
	
    });
});