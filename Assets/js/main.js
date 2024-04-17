$(document).ready(function () {
  if (window.location.href.indexOf("index") > -1) {
    //slider

    $(".bxslider").bxSlider({
      mode: "fade",
      captions: false,
      slideWidth: 1200,
      pager: false,
    });
  }
  //posts
  if (window.location.href.indexOf("index") > -1) {
    var posts = [
      {
        title: "prueba de titulo 1",
        date:
          "Publicado el dia " +
          moment().format("dddd ") +
          moment().date() +
          " " +
          "de " +
          moment().format("MMMM ") +
          "del " +
          moment().format("YYYY "),
        content:
          "orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis ligula sed magna porta rutrum. Vivamus id dapibus odio, et posuere lorem. Sed id volutpat tellus, volutpat congue lectus. Etiam magna nisl, elementum at magna aliquam, egestas iaculis elit. Etiam eget maximus tortor, quis facilisis ligula. Nam a risus quis nisi viverra feugiat id nec odio.",
      },
      {
        title: "prueba de titulo 2",
        date:
          "Publicado el dia " +
          moment().format("dddd ") +
          moment().date() +
          " " +
          "de " +
          moment().format("MMMM ") +
          "del " +
          moment().format("YYYY "),
        content:
          "orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis ligula sed magna porta rutrum. Vivamus id dapibus odio, et posuere lorem. Sed id volutpat tellus, volutpat congue lectus. Etiam magna nisl, elementum at magna aliquam, egestas iaculis elit. Etiam eget maximus tortor, quis facilisis ligula. Nam a risus quis nisi viverra feugiat id nec odio.",
      },
      {
        title: "prueba de titulo 3",
        date:
          "Publicado el dia " +
          moment().format("dddd ") +
          moment().date() +
          " " +
          "de " +
          moment().format("MMMM ") +
          "del " +
          moment().format("YYYY "),
        content:
          "orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis ligula sed magna porta rutrum. Vivamus id dapibus odio, et posuere lorem. Sed id volutpat tellus, volutpat congue lectus. Etiam magna nisl, elementum at magna aliquam, egestas iaculis elit. Etiam eget maximus tortor, quis facilisis ligula. Nam a risus quis nisi viverra feugiat id nec odio.",
      },
      {
        title: "prueba de titulo 4",
        date:
          "Publicado el dia " +
          moment().format("dddd ") +
          moment().date() +
          " " +
          "de " +
          moment().format("MMMM ") +
          "del " +
          moment().format("YYYY "),
        content:
          "orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis ligula sed magna porta rutrum. Vivamus id dapibus odio, et posuere lorem. Sed id volutpat tellus, volutpat congue lectus. Etiam magna nisl, elementum at magna aliquam, egestas iaculis elit. Etiam eget maximus tortor, quis facilisis ligula. Nam a risus quis nisi viverra feugiat id nec odio.",
      },
      {
        title: "prueba de titulo 5",
        date:
          "Publicado el dia " +
          moment().format("dddd ") +
          moment().date() +
          " " +
          "de " +
          moment().format("MMMM ") +
          "del " +
          moment().format("YYYY "),
        content:
          "orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis ligula sed magna porta rutrum. Vivamus id dapibus odio, et posuere lorem. Sed id volutpat tellus, volutpat congue lectus. Etiam magna nisl, elementum at magna aliquam, egestas iaculis elit. Etiam eget maximus tortor, quis facilisis ligula. Nam a risus quis nisi viverra feugiat id nec odio.",
      },
      {
        title: "prueba de titulo 6",
        date:
          "Publicado el dia " +
          moment().format("dddd ") +
          moment().date() +
          " " +
          "de " +
          moment().format("MMMM ") +
          "del " +
          moment().format("YYYY "),
        content:
          "orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis ligula sed magna porta rutrum. Vivamus id dapibus odio, et posuere lorem. Sed id volutpat tellus, volutpat congue lectus. Etiam magna nisl, elementum at magna aliquam, egestas iaculis elit. Etiam eget maximus tortor, quis facilisis ligula. Nam a risus quis nisi viverra feugiat id nec odio.",
      },
    ];
    posts.forEach((item, index) => {
      var post = `
    <article class="content__posts-post">
            <h2 class="posts__title">${item.title}</h2>
            <span class="posts__date">${item.date}</span>
            <p class="posts__text">
              ${item.content}
            </p>
            <a href="" class="posts__button">Leer mas</a>
          </article>
    `;
      $("#posts").append(post);
    });
  }
  //SELECTOR DEL TEMA
  var theme = $("#theme");
  $("#green").click(function () {
    theme.attr("href", "/Assets/CSS/Colores/green.css");
  });
  $("#red").click(function () {
    theme.attr("href", "/Assets/CSS/Colores/red.css");
  });
  $("#blue").click(function () {
    theme.attr("href", "/Assets/CSS/Colores/blue.css");
  });

  //scroll arriba de la web
  $(".footer__up").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  //Acordeon
  if (window.location.href.indexOf("sobre-mi") > -1) {
    $("#acordeon").accordion();
  }

  //reloj
  if (window.location.href.indexOf("clock") > -1) {
    setInterval(function () {
      let reloj = moment().format("h:mm:ss");

      $("#reloj").html(reloj);
    },1000);
  }
});
