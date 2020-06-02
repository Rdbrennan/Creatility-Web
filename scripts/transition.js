$('#Inspiration').off("click").on("click", function (event) {
  event.preventDefault()

  const href = $(this).attr("href")

  window.history.pushState(null, null, href)

  $.ajax({
    url: href,
    success: function (data) {
      $("section").fadeOut(250, function () {
        const newPage = $(data).filter("section").html()
        // $('link[href="https://fonts.googleapis.com/css?family=Pacifico"]').attr('href','stylesheets/fake.css');
        // $('link[href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css"]').attr('href','stylesheets/fake.css');
        // $('link[href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css"]').attr('href','stylesheets/fake.css');
        // $('link[href="stylesheets/fake.css"]').attr('href','stylesheets/bootstrap.min.css');
        $('link[href="stylesheets/technologies.css"]').attr('href','stylesheets/inspiration.css');
        $('link[href="stylesheets/home.css"]').attr('href','stylesheets/inspiration.css');
        $("section").html(newPage);
        $("section").fadeIn(500);
      })
    }
  })
})

$('#Product').off("click").on("click", function (event) {
  event.preventDefault()

  const href = $(this).attr("href")

  window.history.pushState(null, null, href)

  $.ajax({
    url: href,
    success: function (data) {

      $("section").fadeOut(250, function () {
        const newPage = $(data).filter("section").html()

        $("section").html(newPage);
        $("section").fadeIn(500);
        // $('link[href="stylesheets/bootstrap.min.css"]').attr('href','stylesheets/fake.css');
        $('link[href="stylesheets/inspiration.css"]').attr('href','stylesheets/technologies.css');
        $('link[href="stylesheets/home.css"]').attr('href','stylesheets/technologies.css');
      })
    }
  })
})

$('#Home').off("click").on("click", function (event) {
  event.preventDefault()

  const href = $(this).attr("href")

  window.history.pushState(null, null, href)

  $.ajax({
    url: href,
    success: function (data) {

      $("section").fadeOut(250, function () {
        const newPage = $(data).filter("section").html()

        $("section").html(newPage);
        $("section").fadeIn(500);
        $('link[href="stylesheets/technologies.css"]').attr('href','stylesheets/home.css');
        $('link[href="stylesheets/inspiration.css"]').attr('href','stylesheets/home.css');
      })
    }
  })
})
