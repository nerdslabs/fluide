import Fluide from "fluide";
window.Fluide = Fluide;

window.onload = function() {
  if (document.querySelectorAll(".docs aside").length > 0) {
    let aside = document.querySelector(".docs aside"),
      expand = aside.querySelector(".expand");

    // expand.addEventListener('click', function(e) {

    // })
  }

  var headerScrolled = () => {
    var header = document.querySelector("header");
    if (document.documentElement.scrollTop > 0) {
      if (header.className.indexOf("scrolled") == -1)
        header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  headerScrolled();
  document.addEventListener("scroll", headerScrolled);

  const mobileMenuHandled = document.querySelector('.menu-mobile')
  const aside = document.querySelector('aside')
  mobileMenuHandled.addEventListener('click', (event) => {
    event.preventDefault()

    if (mobileMenuHandled.classList.contains('opened')) {
      mobileMenuHandled.classList.remove('opened')
      aside.classList.add('expanded')
    } else {
      mobileMenuHandled.classList.add('opened')
      aside.classList.remove('expanded')
    }
  })
};
