
/*_________________________________
       Navbar Scroll Color
*_________________________________*/
// $(function () {
//   $(document).scroll(function () {
//     var $nav = $(".navbar-fixed-top");
//     $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//   });
// });


/*_________________________________
            Overlay page
*_________________________________*/
var nav = false;

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    nav = true;
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    // Reset hamburger menu to original unchecked state
    $( 'input[type="checkbox"]' ).prop('checked', false);
    nav = false;
}

function toggleNav() {
      nav ? closeNav() : openNav()
}

$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar-fixed-top");
    var $nav1 = $(".navbar-fixed-top .navbar-brand");
    var $nav2 = $(".navbar-fixed-top .menu-open-button");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $nav1.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $nav2.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

	});
});


(function ($) {
    "use strict";

    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }


    /*==================================================================
    [ Show / hide Form ]*/

    $('.contact100-btn-hide').on('click', function(){
        $('.wrap-contact100').fadeOut(400);
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
    })

    $('.contact100-btn-show').on('click', function(){
        $('.wrap-contact100').fadeIn(400);
        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });
    })

    $(window).load(function () {
    $(".trigger_popup_fricc").click(function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
});

})(jQuery);
