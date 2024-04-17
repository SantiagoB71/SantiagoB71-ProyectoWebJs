$("#login__form").submit(function () {
  let form_name = $("#name").val();
  let form_password = $("#password").val();
  let form_email = $("#email").val();

  localStorage.setItem("form_name", form_name);
  localStorage.setItem("form_password", form_password);
  localStorage.setItem("form_email", form_email);
});

var form_name = localStorage.getItem("form_name");
var form_password = localStorage.getItem("form_password");
var form_email = localStorage.getItem("form_email");

if (form_name != null && form_name != undefined) {
  let about_parrafo = $("#about");
  about_parrafo.html("<br><strong>nombre :" + form_name + "</strong>");
   about_parrafo.append(
     "<br><strong>contraseña :" + form_password + "</strong>"
   );
   about_parrafo.append("<br><strong>email  :" + form_email + "</strong>");

  about_parrafo.append("<br><a href ='#' class='log-out'>Cerrar sesión </a>");
  $("#login__form").hide();

  $(".log-out").click(function () {
    localStorage.clear();
    location.reload();
  });
}
