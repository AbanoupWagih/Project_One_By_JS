// Check Color In Local Storage
let mainColors = localStorage.getItem("color-option");

if (mainColors !== null) {
  document.documentElement.style.setProperty('--main-color', localStorage.getItem("color-option"));

    // Remove Active Class From All Colors List Item
    document.querySelectorAll(".colors-list li").forEach(element => {

      element.classList.remove("active");

        // Add Active Class On Element With Data Color 
      if (element.dataset.color === mainColors) {
        
        element.classList.add("active");
      }
    });
  
}

// Random Background Option
let backgroundOption = true;

// Variable To control The Interval
let backgroundInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage Is Not Empty.
if (backgroundLocalItem !== null) {
  
  if (backgroundLocalItem === 'true') {
    backgroundOption = true
  } else {
    backgroundOption = false
  }

  // Remove Active Class From All Spans
  document.querySelectorAll(".random-backgrounds span").forEach(element => {

    element.classList.remove("active");

  });

  if (backgroundLocalItem === 'true') {

    document.querySelector(".random-backgrounds .yes").classList.add("active");
    
  } else {
    document.querySelector(".random-backgrounds .no").classList.add("active");
  }
}

// click on toggle settings gear
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");

  document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li")

// Loop On All List Items
colorsLi.forEach(li => {
  
  // Click On Every List Items
  li.addEventListener("click", (e) => {
    
    // Set Color On Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    // Set Color On Local Storage
    localStorage.setItem("color-option",e.target.dataset.color);
    
    handleActive(e);
  
  });

});

// Switch Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span")

// Loop On All Spans
randomBackEl.forEach(span => {
  
  // Click On Every Span
  span.addEventListener("click", (e) => {
    
    handleActive(e);

    if (e.target.dataset.background === 'yes') {
      
      
      backgroundOption = true;
      randomizeImgs();

      localStorage.setItem("background_option", true)
    } else {

      backgroundOption = false;

      clearInterval(backgroundInterval);

      localStorage.setItem("background_option", false)
    }
  
  });

});

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Images
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// Function To Randomize Imgs
function randomizeImgs() {
  
  if (backgroundOption === true) {
    
    backgroundInterval = setInterval(() => {

    // Get Random Number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    // Change Background Image Url
    landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
    
    }, 5000);

  }
  
}

randomizeImgs()


// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {

      skill.style.width = skill.dataset.progress;

    });

  }

};

// Create Popup With The

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
  img.addEventListener('click', (e) => {
    
    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = 'popup-overlay';

    // Append Overlay To The 
    document.body.appendChild(overlay);

    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = 'popup-box';

        if (img.alt !== null) {
      
      // create Heading
      let imgHeading = document.createElement("h3");

      // Create Text For Heading
      let imgText = document.createTextNode(img.alt);
      imgHeading.appendChild(imgText);

      // Append The Heading To The Popup Box
      popupBox.appendChild(imgHeading);
    }

    // Create The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append Popup Box To Body
    document.body.appendChild(popupBox);

    // Create Th Close Span
    let closeIcon = document.createElement("Span");

    // Create The Close Icon Text
    let closeIconText = document.createTextNode("X");

    // Append Text To Close Icon

    closeIcon.appendChild(closeIconText);

    // Add Class To Class Icon
    closeIcon.className = 'close-icon';

    // Add Close Icon To The Popup Box
    popupBox.appendChild(closeIcon);

  });

});

// Close Popup
document.addEventListener("click", function (e) {
  if (e.target.className == 'close-icon') {

    // Remove The Current Popup Another Solution
    // e.target.parentNode.remove();
    
    // Remove The Current Popup
    document.querySelector(".popup-box").remove();

    // Remove Overlay
    document.querySelector(".popup-overlay").remove();
  }
})

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSection(elements) {
  elements.forEach(ele => {
  ele.addEventListener("click", (e) => {

    e.preventDefault();

    document.querySelector(e.target.dataset.section).scrollIntoView({

      behavior: 'smooth'
    });

  });
});
}

scrollToSection(allBullets);
scrollToSection(allLinks);

// Handle Active State
function handleActive(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach(element => {

    element.classList.remove("active");

  });

  ev.target.classList.add("active");
}


let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {
  
  bulletsSpan.forEach(span => {

    span.classList.remove("active");

  });

  if (bulletLocalItem === 'block') {
    
    bulletsContainer.style.display = 'block';

    document.querySelector(".bullets-option .yes").classList.add("active");

  } else {

    bulletsContainer.style.display = 'none';

    document.querySelector(".bullets-option .no").classList.add("active");

  }

}


bulletsSpan.forEach(span => {

  span.addEventListener("click", (e) => {

    if (span.dataset.display === 'show') {
      
      bulletsContainer.style.display = 'block';

      localStorage.setItem("bullets_option", 'block');

    } else {

      bulletsContainer.style.display = 'none';

      localStorage.setItem("bullets_option", 'none');

    }

    handleActive(e);

  });

});


// Reset Button
document.querySelector(".reset-options").onclick = function () {
  
  localStorage.removeItem("color-option");
  localStorage.removeItem("background_option");
  localStorage.removeItem("bullets_option");

  window.location.reload();

};

// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let theLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {
  
  // Stop Propagation
  e.stopPropagation();

  // Toggle Class menu-active On Button
  this.classList.toggle("menu-active");

  // Toggle Class open On Links
  theLinks.classList.toggle("open");

};

// Click Anywhere Outside Menu & Toggle Button
document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn  && e.target !== theLinks) {
    
    // Check Of Menu Is Open Or No
    if (theLinks.classList.contains("open")) {
      
      // Toggle Class menu-active On Button
      toggleBtn.classList.toggle("menu-active");

      // Toggle Class open On Links
      theLinks.classList.toggle("open");

    }

  }
});

// Stop Propagation On Menu
theLinks.onclick = function (e) {
  
  // Stop Propagation
  e.stopPropagation();

}