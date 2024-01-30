
//nav color change while scrolling 

function colorChange()
{
    nav=document.getElementById('na-main')
    scrollv=window.scrollY
    if(scrollv<10)
    {
        nav.classList.remove('bg-change')
    }
    else{
        nav.classList.add('bg-change')
    }
}
window.addEventListener('scroll',colorChange)
//------------------**********----------------------

//contents chnage funtion for intro

var contentIndex = 0;
var contents = ["Front-end developer", "Designer", "Back-end developer"];
var slidingElement = document.getElementById("slidingElement");

function changeContent() {
  // Fade out the content
  document.getElementById("content").style.opacity = "0";

  // Wait for the fade-out transition to complete
  setTimeout(function () {
    var element = document.getElementById("content");

    // Change the content
    element.innerHTML = contents[contentIndex];

    // Fade in the new content
    element.style.opacity = "1";
    
    // Reset the height
    slidingElement.style.height = slidingElement.scrollHeight + "px";
  }, 500); // Adjust the time according to the transition duration

  // Increment the content index
  contentIndex = (contentIndex + 1) % contents.length;
}

// Automatically change content every 3 seconds (adjust the interval as needed)
setInterval(changeContent, 2000);




ScrollReveal({

  reset: true,
  distance:'60px',
  duration:2500,
  delay:400
})
ScrollReveal().reveal('.intro', { delay: 500, origin: 'left', enter: 'bottom' });
ScrollReveal().reveal('.profile-div', { delay: 500, origin: 'right', enter: 'bottom' });
ScrollReveal().reveal('.ab-img', { delay: 500, origin: 'bottom', enter: 'bottom' });
ScrollReveal().reveal('.ab-para', { delay: 500, origin: 'top', enter: 'bottom' });

