const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector("#navbar ul")

let backdrop = document.querySelector(".navbar-backdrop")
if (!backdrop) {
  backdrop = document.createElement("div")
  backdrop.className = "navbar-backdrop"
  document.body.appendChild(backdrop)
}

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navLinks.classList.toggle("active")
  backdrop.classList.toggle("active")
})

backdrop.addEventListener("click", () => {
  hamburger.classList.remove("active")
  navLinks.classList.remove("active")
  backdrop.classList.remove("active")
})

document.querySelectorAll("#navbar ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navLinks.classList.remove("active")
    backdrop.classList.remove("active")
  })
})

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate")
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

document.querySelectorAll(".scroll-animation").forEach((element) => {
  observer.observe(element)
})
