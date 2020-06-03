var previousWindow = "";

$('#Inspiration').off("click").on("click", function (event) {
    sendToInspiration()
})

$('#Product').off("click").on("click", function (event) {
    sendToTechnology()
})

$('#Home').off("click").on("click", function (event) {
    sendToHome()
})

function sendToHome() {
  previousWindow = window.location.href;
  event.preventDefault()
  const href = ("index.html")
  window.history.pushState(null, null, href)
  $.ajax({
    url: href,
    success: function (data) {

      $("section").fadeOut(250, function () {
        const newPage = $(data).filter("section").html()
        $('link[href="stylesheets/technologies.css"]').attr('href','stylesheets/home.css');
        $('link[href="stylesheets/inspiration.css"]').attr('href','stylesheets/home.css');
        $("section").html(newPage);
        $("section").fadeIn(500);
      })
    }
  })
}

function sendToTechnology() {
  previousWindow = window.location.href;
  event.preventDefault()
  const href = ("technologies.html")
  window.history.pushState(null, null, href)
  $.ajax({
    url: href,
    success: function (data) {

      $("section").fadeOut(250, function () {
        const newPage = $(data).filter("section").html()
        $('link[href="stylesheets/inspiration.css"]').attr('href','stylesheets/technologies.css');
        $('link[href="stylesheets/home.css"]').attr('href','stylesheets/technologies.css');
        $("section").html(newPage);
        $("section").fadeIn(500);
      })
    }
  })
}

function sendToInspiration() {
  previousWindow = window.location.href;
  event.preventDefault()
  const href = ("inspiration.html")

  window.history.pushState(null, null, href)
  $.ajax({
    url: href,
    success: function (data) {
      $("section").fadeOut(250, function () {
        const newPage = $(data).filter("section").html()
        $('link[href="stylesheets/technologies.css"]').attr('href','stylesheets/inspiration.css');
        $('link[href="stylesheets/home.css"]').attr('href','stylesheets/inspiration.css');
        $("section").html(newPage);
        $("section").fadeIn(500);
      })
    }
  })
}



document.onmouseover = function() {
    //User's mouse is inside the page.
    window.innerDocClick = true;
}

document.onmouseleave = function() {
    //User's mouse has left the page.
    window.innerDocClick = false;
}
window.addEventListener('popstate', function(event) {
    // The popstate event is fired each time when the current history entry changes.

    alert(previousWindow)

      if (previousWindow == "http://localhost:3000/index.html"){
        sendToHome()
      } else if (previousWindow == "http://localhost:3000/technologies.html"){
        sendToTechnology()
      } else if (previousWindow == "http://localhost:3000/inspiration.html"){
        sendToInspiration()
      }

}, false);
