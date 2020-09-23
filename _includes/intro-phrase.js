//random phrase intro
var introPhrase = ['Design, am I right?', 'Fonts, am I right?', 'Digital, am I right?', 'Grids, am I right?']
window.onload = function() {
  document.getElementById('introPhrase').innerHTML = introPhrase[Math.floor(Math.random() * introPhrase.length)]
}