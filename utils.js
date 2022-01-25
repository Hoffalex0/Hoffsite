/* Load OUR (communism) navbar */
const loadNavbar = async () => {
    const response = await fetch('/navbar.html');
    const text = await response.text();
    const oldelement = document.querySelector("div#load-nav");
    const newelement = document.createElement("div");
    newelement.innerHTML = text;
    oldelement.parentNode.replaceChild(newelement,oldelement);

    const navLinkElements = document.getElementById('topnav').querySelectorAll('a');
    // Get our current pagename
    const currentPage = window.location.pathname.split("/").pop();

    for(const item of navLinkElements) {
        // Get href from anchor
        const itemDestination = item.getAttribute("href").split("/").pop();
        if(currentPage == itemDestination) {
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
    oldelement.parentNode.replaceChild(newelement,oldelement);
};

loadNavbar();
loadFooter();