const d = new Date();
let time = d.getTime().getDay();

if (time == 121) {
    //Tag der Arbeit
    document.getElementById('favicon').href = "images/logos/arbeit_logo.jpg";
}
if (time == 201) {
    //Mondlandung
    document.getElementById('favicon').href = "images/logos/mond_logo.jpg";
}
if (time == 276) {
    //Tag der deutschen Einheit
    document.getElementById('favicon').href = "images/logos/einheit_logo.jpg";
}
if (time == 282) {
    //Wahl in Niedersachsen
    document.getElementById('favicon').href = "https://media4.giphy.com/media/Ll87Robob2v7W7GJVD/giphy.gif?cid=ecf05e472uqbdifw1b8wsezjrzv46cq4oly8kclrywxwfw93&rid=giphy.gif&ct=g";
}
if (time == 112) {
    //Earth Day
    document.getElementById('favicon').href = "images/logos/world_logo.jpg";
}
if (time == 133) {
    //Retro Hoffsite
    document.getElementById('favicon').href = "images/logos/klima_logo.jpg";
}
