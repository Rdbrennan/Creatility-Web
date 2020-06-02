/*_________________________________
      Iphone Product Overlay
*_________________________________*/
// $('.pop-up').hide(0);
// $('.pop-up-container').hide(0);
//
// $('.app1').click(function(){
//   $('.pop-up-container').show(0);
//   $('.pop-up').fadeIn(200);
//   $('.app1').hide(0);
// });
// $('.pop-up a').click(function() {
//   $('.pop-up-container').hide(0);
//   $('.pop-up').hide(0);
//   $('.app1').show(0);
// });


/*_________________________________
      Menu Cicle Animation
*_________________________________*/
$('a').each(function(){
  $(this).html('<span class="icon">'+ $(this).html() +'</span><span class="circle"><span><em></em></span><span><em></em></span></span>');
});


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
    nav = false;
}

function toggleNav() {
      nav ? closeNav() : openNav()
}
