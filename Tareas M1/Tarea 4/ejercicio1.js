metros = prompt("Cuantos metros queres recorrer?");
if (metros >= 0 && metros < 1000) {
    alert("Te conviene ir a pie.");
}
else if (metros >= 1001 && metros < 10000) {
    alert("Te conviene ir en bicicleta.");
}
else if (metros >= 10001 && metros < 30000) {
    alert("Te conviene ir en colectivo.");
}
else if (metros >= 30001 && metros < 100000) {
    alert("Te conviene ir en auto.");
}
else {
    alert("Te conviene viajar en avion.");
}
