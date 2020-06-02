$('#Inspiration').on("click", function (event) {
  event.preventDefault()

  const href = $(this).attr("href")

  window.history.pushState(null, null, href)
  // $('section').css('display', 'none');

  $.ajax({
    url: href,
    success: function (data) {

      $("section").fadeOut(250, function () {
        const newPage = $(data).filter("section").html()

        $("section").html(newPage);
        $("section").fadeIn(500);
        $('link[href="stylesheets/product.css"]').attr('href','stylesheets/inspiration.css');
        $('link[href="stylesheets/home.css"]').attr('href','stylesheets/inspiration.css');
      })
    }
  })
})

$('#Product').on("click", function (event) {
  event.preventDefault()

  const href = $(this).attr("href")

  window.history.pushState(null, null, href)
  // $('section').css('display', 'none');

  $.ajax({
    url: href,
    success: function (data) {

      $("section").fadeOut(250, function () {
        const newPage = $(data).filter("section").html()

        $("section").html(newPage);
        $("section").fadeIn(500);
        $('link[href="stylesheets/inspiration.css"]').attr('href','stylesheets/product.css');
        $('link[href="stylesheets/home.css"]').attr('href','stylesheets/product.css');
      })
    }
  })
})

$('#Home').on("click", function (event) {
  event.preventDefault()

  const href = $(this).attr("href")

  window.history.pushState(null, null, href)
  // $('section').css('display', 'none');

  $.ajax({
    url: href,
    success: function (data) {

      $("section").fadeOut(250, function () {
        const newPage = $(data).filter("section").html()

        $("section").html(newPage);
        $("section").fadeIn(500);
        $('link[href="stylesheets/product.css"]').attr('href','stylesheets/home.css');
        $('link[href="stylesheets/inspiration.css"]').attr('href','stylesheets/home.css');
      })
    }
  })
})
