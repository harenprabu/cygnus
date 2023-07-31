var navbar = document.getElementById("nav");
let menubutton = document.getElementById("menubutton");
menubutton.addEventListener("click", function () {
  "navbar-toggler-icon" == menubutton.className
    ? (menubutton.classList.remove("navbar-toggler-icon"),
      menubutton.classList.add("btn-close"),
      (navbar.style.height = "100vh"),
      (document
        .getElementById("nav")
        .getElementsByTagName("div")[0].style.marginTop = "-200px"))
    : (menubutton.classList.remove("btn-close"),
      menubutton.classList.add("navbar-toggler-icon"),
      (navbar.style.height = "auto"),
      (document
        .getElementById("nav")
        .getElementsByTagName("div")[0].style.marginTop = "0px"));
});
var myModal = document.getElementById("querymodal"),
  myInput = document.getElementById("message-text");
myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
}),
  (document.body.scrollTop = 0),
  (document.documentElement.scrollTop = 0);
var heading = document.getElementById("nav-heading"),
  image = document.getElementById("nav-img");
function autoResize() {
  (this.style.height = "auto"), (this.style.height = this.scrollHeight + "px");
}
(window.onscroll = () => {
  document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
    ? (heading.classList.add("d-none"),
      image.classList.remove("d-none"),
      navbar.classList.replace("navbar-light", "navbar-dark"),
      navbar.classList.replace("bg-light", "gray"),
      document
        .getElementById("phn")
        .classList.replace("dark-blue", "text-light"),
      (document.getElementById("topbtn").style.display = "inline-block"))
    : (document.body.scrollTop < 50 ||
        document.documentElement.scrollTop < 50) &&
      (heading.classList.remove("d-none"),
      image.classList.add("d-none"),
      navbar.classList.replace("navbar-dark", "navbar-light"),
      navbar.classList.replace("gray", "bg-light"),
      document
        .getElementById("phn")
        .classList.replace("text-light", "dark-blue"),
      (document.getElementById("topbtn").style.display = "none"));
}),
  (textarea = document.querySelector("#message")),
  textarea.addEventListener("input", autoResize, !1);
