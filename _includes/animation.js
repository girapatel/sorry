const animatedTags = document.querySelectorAll("h1, p span, .card, div.item img, div.item video")

//fade out on load
animatedTags.forEach(tag => {
  tag.style.opacity = 0
})

const fadeIn = function() {
 //look through all the animatedTags and see
 // with getBoundingClientRect if it's in the window
let delay = 70
  
animatedTags.forEach(tag => {
  const tagTop = tag.getBoundingClientRect().top
  
  if (tagTop < window.innerHeight) {
    tag.style.animation = `fadein 400ms ${delay}ms both`
    delay = delay + 30
  } 
 }) 
}

//on load, run fadein
fadeIn()

//on scroll, run fadein
document.addEventListener("scroll", function() {
  fadeIn()
})

//on browser resize, run fadein
window.addEventListener("resize",function() {
  fadeIn()
})