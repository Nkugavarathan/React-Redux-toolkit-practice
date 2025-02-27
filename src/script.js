let lastScrollTop = 0
const navbar = document.querySelector(".navbar-custom")

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY

  if (scrollTop > lastScrollTop && scrollTop > 50) {
    navbar.classList.add("hidden") // Hide navbar on scroll down
  } else {
    navbar.classList.remove("hidden") // Show navbar on scroll up
  }

  if (scrollTop > 50) {
    navbar.classList.add("scrolled") // Change background after 50px
  } else {
    navbar.classList.remove("scrolled")
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
})
