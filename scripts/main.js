
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
