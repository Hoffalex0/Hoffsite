/*Function of the changing cursor*/
function cursor() {
    const thewholepage = document.querySelector('body');
    thewholepage.style.cursor = 'url(/images/logos/ukraine_logo.jpg) 0 0, wait';
    alert('Was ist mit dem Cursor los?')
}

/*Function of the random image generator*/
function imager() {
    var images = ["/images/headers/header_prototype.jpg", "/images/headers/header_prototype2.jpg", "/images/headers/header_prototype3.jpg", "/images/headers/header_prototype4.jpg", "/images/headers/header_prototype5.jpg"];
    var image = images[Math.floor(Math.random() * images.length)];
    document.getElementById("ausgabe").innerHTML = '<img src="' + image + '">';
}

/*Function of the dark and light switch*/
function lighter() {
    const currentCase = document.getElementById("lighterswitch").value
    const area = document.querySelector("body");
    if (currentCase == "Heller Modus") {
        area.style.background = "rgb(173, 173, 173)";
        document.querySelector(".inhalt-desk").style.background = "whitesmoke";
        document.getElementById("nav").style.background = "rgb(173, 173, 173)"
        document.getElementById("lighterswitch").value = "Dunkler Modus";
        document.getElementById("lighterswitch").style.background = "black";
        document.getElementById("lighterswitch").style.color = "whitesmoke";
    } else {
        area.style.background = "black";
        document.querySelector(".inhalt-desk").style.background = "#191919";
        document.getElementById("nav").style.background = "black"
        document.getElementById("lighterswitch").value = "Heller Modus";
        document.getElementById("lighterswitch").style.background = "whitesmoke";
        document.getElementById("lighterswitch").style.color = "black";
    }
}

function copytext() {
    navigator.clipboard.writeText("https://hoffsite.de/article/rollsseufz");
    alert("Link kopiert");
  }

function consolemarginclear() {
    document.querySelector("#comandline-a input[type=text]").style.margin = "1%";
}

function console() {
    const typedConsolas = document.getElementById("terminalconsole").value;
    const elementgetterConsolas = document.getElementById("commandausgabe");
    if (typedConsolas == "ls advice") {
        consolemarginclear();
        elementgetterConsolas.innerHTML = "Eine Liste von meinen Empfehlungsarten: <ul><li>Video-Empfehlungen: ls advice video</li><li>Musik-Empfehlungen: ls advice music (powered by spotify)</li><li>(Pflanzliche) Rezept-Empfehlungen: ls advice recipe</li><li>Text-Empfehlungen: ls advice text (hier ist noch nichts)</li></ul>";
    } else if (typedConsolas == "ls advice video") {
        consolemarginclear();
        elementgetterConsolas.innerHTML = "Meine Video-Empfehlungen.";
    } else if (typedConsolas == "ls advice music") {
        consolemarginclear();
        elementgetterConsolas.innerHTML = "Meine Musik-Empfehlungen.";
    } else if (typedConsolas == "ls advice recipe") {
        consolemarginclear();
        elementgetterConsolas.innerHTML = "Meine Rezept-Empfehlungen.";
    } else if (typedConsolas == "ls advice text") {
        consolemarginclear();
        elementgetterConsolas.innerHTML = "Meine nicht vorhandenen Text-Empfehlungen.";
    } else if (typedConsolas == "easter egg") {
        alert(':)');
    } else alert('Error!');
}

/*Function of the rain-effect*/
function rain() {
    //Angefangen!
}


function mobilemenu() {
    ausgeklappt = !ausgeklappt;
    if (ausgeklappt == true) {
        document.getElementById('mobilenav-ul').style.display = "block";
    } else if (ausgeklappt == false) {
        document.getElementById('mobilenav-ul').style.display = "none";
    }
}

/* Load OUR (communism) navbar */
const loadNavbar = async () => {
    const response = await fetch('/navbar.html');
    const text = await response.text();
    const oldelement = document.querySelector("div#load-nav");
    const newelement = document.createElement("div");
    newelement.innerHTML = text;
    oldelement.parentNode.replaceChild(newelement, oldelement);

    const navLinkElements = document.getElementById('nav').querySelectorAll('a');
    // Get our current pagename
    const currentPage = window.location.pathname.split("/").pop();

    for (const item of navLinkElements) {
        // Get href from anchor
        const itemDestination = item.getAttribute("href").split("/").pop();
        if (currentPage == itemDestination) {
            item.classList.add('active');
        }
    }
}

/* Load OUR (communism) footer */
const loadFooter = async () => {
    const response = await fetch('/down.html');
    const text = await response.text();
    const oldelement = document.querySelector("div#load-footer");
    const newelement = document.createElement("div");
    newelement.innerHTML = text;
    oldelement.parentNode.replaceChild(newelement, oldelement);
};

// Datum, auf das heruntergezählt wird.
var countDownDate = new Date("Jul 22, 2029 00:00:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;
    var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
    var days = Math.floor(distance % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("climatetimer").innerHTML = years + "y " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("climatetimer").innerHTML = "Sie haben ihr Ziel erreicht! Sie waren sehr schnell... 🌍";
    }
}, 1000);

var ausgeklappt = false;
imager();
loadNavbar();
loadFooter();
/*Thanks to Odincat!*/