// Ich hab mal ein klein wenig aufgeräumt, hin und wieder kann man aber noch Sachen ausbauen.
// Alle Stellen an denen Änderungen vorgenommen wurden sind mit Kommentaren versehen.
// ---
// 1: Kommentare sollten nicht beschreiben WAS eine Funktion / Variable macht, sondern WARUM oder WIESO sie es tut. Irgendwann schreibt man nämlich mehr unnötige Kommentare als guten Code.
// Ich wurde ein bisschen von Rust und PHP angesteckt und habe einfach mal ganz frech sämtliche Funktions- oder Variablennamen in snake_case umgewandelt. Ändere das gerne wieder zurück, wenn du camelCase mehr magst.

// Siehe 1
function change_cursor() {
    document.body.style.cursor = 'url(/images/logos/klima_logo.jpg) 0 0, wait';
    alert('Was ist mit dem Cursor los?');
}

// Siehe 1
var last_image_index = 0;
var header_images = ["", "2", "3", "4", "5"];
function random_header_image() {
    var image_index = Math.floor(Math.random() * header_images.length);

    if(image_index === last_image_index) {
        // Notiz: Potenziell rekursiv!
        random_header_image();
        return;
    }
    // Kein Grund hier hacky und unsicher HTML zu ersetzen, das Quellenattribut kann auch direkt geändert werden.
    document.getElementById("ausgabe-bild").src = `/images/headers/header_prototype${header_images[image_index]}.jpg`; 
}

// Siehe 1
function switch_theme() {
    const currentCase = document.getElementById("lighterswitch").value
    const area = document.querySelector("body");
    if (currentCase == "Heller Modus") {
        area.style.background = "rgb(173, 173, 173)";
        document.querySelector(".inhalt-desk").style.background = "whitesmoke";
        document.getElementById("nav").style.background = "rgb(173, 173, 173)";
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

// Formatierungssache
function copy_text() {
    navigator.clipboard.writeText("https://hoffsite.de/article/rollsseufz");
    alert("Link kopiert!");
}

// Ebenfalls Formatierungssache
function clear_console_margin() {
    document.querySelector("#comandline-a input[type=text]").style.margin = "1%";
}

// Es ist SEHR (!) unvorteilhaft Funktionen nach APIs zu bennenen die im Browser Standard sind. Vorher hies die Funktion "console", wenn eine andere Funktion jetzt "console.debug" oder ähnliches aufruft, würde diese Funktion anstatt der Standard-API aufgerufen werden.
function console_execute(event) {
    event.preventDefault();

    const typed_consolas = document.getElementById("terminalconsole").value;

    const info_advice_element = document.querySelector('.info-advice-a');
    const video_advice_element = document.querySelector('.video-advice-a')
    const music_advice_element = document.querySelector('.music-advice-a');
    const recipe_advice_element = document.querySelector('.recipe-advice-a');
    const text_advice_element = document.querySelector('.text-advice-a');
    
    if (typed_consolas == "ls advice") {
        clear_console_margin();
        info_advice_element.style.display = "block";
        video_advice_element.style.display = "none";
        music_advice_element.style.display = "none";
        recipe_advice_element.style.display = "none";
        text_advice_element.style.display = "none";
    } else if (typed_consolas == "ls advice video") {
        clear_console_margin();
        info_advice_element.style.display = "none";
        video_advice_element.style.display = "block";
        music_advice_element.style.display = "none";
        recipe_advice_element.style.display = "none";
        text_advice_element.style.display = "none";
    } else if (typed_consolas == "ls advice music") {
        clear_console_margin();
        info_advice_element.style.display = "none";
        video_advice_element.style.display = "none";
        music_advice_element.style.display = "block";
        recipe_advice_element.style.display = "none";
        text_advice_element.style.display = "none";
    } else if (typed_consolas == "ls advice recipe") {
        clear_console_margin();
        info_advice_element.style.display = "none";
        video_advice_element.style.display = "none";
        music_advice_element.style.display = "none";
        recipe_advice_element.style.display = "block";
        text_advice_element.style.display = "none";
    } else if (typed_consolas == "ls advice text") {
        clear_console_margin();
        info_advice_element.style.display = "none";
        video_advice_element.style.display = "none";
        music_advice_element.style.display = "none";
        recipe_advice_element.style.display = "none";
        text_advice_element.style.display = "block";
    } else if (typed_consolas == "easter egg") {
        alert(':)');
    } else alert('Error!');
}

// Warum leere Funktion? #deadcode

function check_password() {
    // passt eventuell besser
    var password_score = 0;
    // Denglisch, benutze eigentlich recht gerne 
    var typed_password = document.getElementById("passworteingabe").value;

    // DRY
    const weak_element = document.querySelector(".schwach");
    const medium_element = document.querySelector(".mittel");
    const strong_element = document.querySelector(".stark");
    
    if (typed_password.length > 12) {
        password_score += 5;
    }
    if (typed_password.includes("!") && typed_password.includes("?")) {
        password_score += 3;
    }
    if (typed_password != "Passwort" || typed_password != "passwort") {
        password_score += 1;
    }
    if (typed_password.includes("hfflx") || typed_password.includes("Simon ist toll.")) {
        password_score += 1000000;
        //nicht ganz ernst gemeint xD - ;)
    }
    
    if (password_score > 7) {
        weak_element.style.display = "none";
        medium_element.style.display = "none";
        strong_element.style.display = "block";
    }   
    if (password_score < 5 && password_score > 3) {
        weak_element.style.display = "none";
        medium_element.style.display = "block";
        strong_element.style.display = "none";
    }
    if (password_score < 3) {
        weak_element.style.display = "block";
        medium_element.style.display = "none";
        strong_element.style.display = "none";
    }
    // müssen wir nicht neu definieren
    password_score = 0;
}

let ausgeklappt = false;

function mobile_menu() {
    ausgeklappt = !ausgeklappt;
    if (ausgeklappt == true) {
        document.getElementById('mobilenav-ul').style.display = "block";
    } else if (ausgeklappt == false) {
        document.getElementById('mobilenav-ul').style.display = "none";
    }
}

// Siehe 1
var countdown_date = new Date("Jul 22, 2029 00:00:00").getTime();

const climate_timer_interval = setInterval(function () {
    var now = new Date().getTime();

    var distance = countdown_date - now;
    var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
    var days = Math.floor(distance % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const climate_timer_element = document.getElementById("climatetimer");

    // Können wir vorziehen, weil wir dann (wenn das Ziel erreicht ist) kein Flackern ertragen müssen
    if (distance < 0) {
        clearInterval(climate_timer_interval);
        climate_timer_element.innerText = "Sie haben ihr Ziel erreicht! Sie waren sehr schnell... 🌍";
    }

    // Template Literals for the win
    climate_timer_element.innerText = `${years}y ${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);