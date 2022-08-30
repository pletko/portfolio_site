console.log('Hi! Welcome to My Portfolio Site')

function menuToggle() {
  var x = document.getElementById('myNavtoggle')

  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

// Get the button
mybutton = document.getElementById('myBtn')

// When user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction ()
function scrollFunction () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { mybutton.style.display = 'block' }
  else { mybutton.style.display =
    'none'
  }
}
}

// When user clicks on the button, scroll to the top of the document
function topFunction () {
  document.body.scrollTop = 0 // for Safari
  document.documentElement.scrollTop = 0 // for Chrome, Firefox, IE, and Opera
}
