
// box shadow on scroll to header
let ele = document.getElementById('header');
window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      ele.classList.add("header-shadow");
      ele.style.opacity = 0.95;
    } else {
      ele.classList.remove("header-shadow");
      ele.style.opacity = 1;
    }
}
//parallax effect
