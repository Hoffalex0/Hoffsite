/*Function of the changing cursor*/
function cursor() {
    const thewholepage = document.querySelector('body');
    thewholepage.style.cursor = 'url(/images/logo_neu_lila.png) 0 0, wait';
    alert('Was ist mit dem Cursor los?')
}

function copytext() {
    navigator.clipboard.writeText("https://hoffsite.de/article/rollsseufz");
    alert("Link kopiert!");
}

function consolemarginclear() {
    document.querySelector("#comandline-a input[type=text]").style.margin = "1%";
}

function console() {
    event.preventDefault();

    const typedConsolas = document.getElementById("terminalconsole").value;
    if (typedConsolas == "ls advice") {
        consolemarginclear();
        document.querySelector('.info-advice-a').style.display = "block";
        document.querySelector('.video-advice-a').style.display = "none";
        document.querySelector('.music-advice-a').style.display = "none";
        document.querySelector('.recipe-advice-a').style.display = "none";
        document.querySelector('.text-advice-a').style.display = "none";
    } else if (typedConsolas == "ls advice video") {
        consolemarginclear();
        document.querySelector('.info-advice-a').style.display = "none";
        document.querySelector('.video-advice-a').style.display = "block";
        document.querySelector('.music-advice-a').style.display = "none";
        document.querySelector('.recipe-advice-a').style.display = "none";
        document.querySelector('.text-advice-a').style.display = "none";
    } else if (typedConsolas == "ls advice music") {
        consolemarginclear();
        document.querySelector('.info-advice-a').style.display = "none";
        document.querySelector('.video-advice-a').style.display = "none";
        document.querySelector('.music-advice-a').style.display = "block";
        document.querySelector('.recipe-advice-a').style.display = "none";
        document.querySelector('.text-advice-a').style.display = "none";
    } else if (typedConsolas == "ls advice recipe") {
        consolemarginclear();
        document.querySelector('.info-advice-a').style.display = "none";
        document.querySelector('.video-advice-a').style.display = "none";
        document.querySelector('.music-advice-a').style.display = "none";
        document.querySelector('.recipe-advice-a').style.display = "block";
        document.querySelector('.text-advice-a').style.display = "none";
    } else if (typedConsolas == "ls advice text") {
        consolemarginclear();
        document.querySelector('.info-advice-a').style.display = "none";
        document.querySelector('.video-advice-a').style.display = "none";
        document.querySelector('.music-advice-a').style.display = "none";
        document.querySelector('.recipe-advice-a').style.display = "none";
        document.querySelector('.text-advice-a').style.display = "block";
    } else if (typedConsolas == "easter egg") {
        alert(':)');
    } else alert('Error!');
}

function passwortPrüfen() {
    var scorePasswort = 0;
    var typedPasswort = document.getElementById("passworteingabe").value;
    
    if (typedPasswort.length > 12) {
        scorePasswort += 5;
    }
    if (typedPasswort.includes("!") && typedPasswort.includes("?")) {
        scorePasswort += 3;
    }
    if (typedPasswort != "Passwort" || typedPasswort != "passwort") {
        scorePasswort += 1;
    }
    if (typedPasswort.includes("hfflx") || typedPasswort.includes("Alex ist toll.")) {
        scorePasswort += 1000000;
        //nicht ganz ernst gemeint xD
    }
    
    if (scorePasswort > 7) {
        document.querySelector('.schwach').style.display = "none";
        document.querySelector('.mittel').style.display = "none";
        document.querySelector('.stark').style.display = "block";
    }   
    if (scorePasswort < 5 && scorePasswort > 3) {
        document.querySelector('.schwach').style.display = "none";
        document.querySelector('.mittel').style.display = "block";
        document.querySelector('.stark').style.display = "none";
    }
    if (scorePasswort < 3) {
        document.querySelector('.schwach').style.display = "block";
        document.querySelector('.mittel').style.display = "none";
        document.querySelector('.stark').style.display = "none";
    }
    var scorePasswort = 0;
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
var countDownDate = new Date("Oct 1, 2026 17:29:59").getTime();

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
loadNavbar();
loadFooter();
/*Thanks to Odincat!*/
