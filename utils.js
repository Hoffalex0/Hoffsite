/*Function of the changing cursor*/
function cursor() {
    const note = document.querySelector('body');
    note.style.cursor = 'url(/img/favicon.png) 0 0, wait'
  }

/*Function of the random image generator*/
function imager() {
    var images = ["/img/random/Winter/bahn.png", "/img/random/Winter/eichhorn.png", "/img/random/Winter/road_winter.png", "/img/random/Winter/snow_nature.png",
    "/img/random/Winter/snowfall.png"];
  var image = images[Math.floor(Math.random() * images.length)];
  document.getElementById("ausgabe").innerHTML = '<img src="' + image + '">';
}

/*Function of the dark and light switch*/
function lighter() {
    var isDark = true;
//Angefangen!
}

/*Function of the rain-effect*/
function rain() {
//Angefangen!
}

/* Load OUR (communism) navbar */
const loadNavbar = async () => {
    const response = await fetch('/navbar.html');
    const text = await response.text();
    const oldelement = document.querySelector("div#load-nav");
    const newelement = document.createElement("div");
    newelement.innerHTML = text;
    oldelement.parentNode.replaceChild(newelement, oldelement);

    const navLinkElements = document.getElementById('topnav').querySelectorAll('a');
    // Get our current pagename
    const currentPage = window.location.pathname.split("/").pop();

    for (const item of navLinkElements) {
        // Get href from anchor
        const itemDestination = item.getAttribute("href").split("/").pop();
        if (currentPage == itemDestination) {
            item.classList.add('active');
        }
    }
};

/* Load OUR (communism) footer */
const loadFooter = async () => {
    const response = await fetch('/down.html');
    const text = await response.text();
    const oldelement = document.querySelector("div#load-footer");
    const newelement = document.createElement("div");
    newelement.innerHTML = text;
    oldelement.parentNode.replaceChild(newelement, oldelement);
};

loadNavbar();
loadFooter();