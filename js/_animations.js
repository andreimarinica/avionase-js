// Anything related to standalone animations will go in here
//
//
//
//

if (movingPlane % 3 === 0) {
    document.getElementById('fighter').innerHTML = `<img src="../img/fighter.png" alt="" width="${fighterWidth}" height="${fighterHeight}" class="fighter">`;
    document.getElementById('clouds-right').innerHTML = `<img src="../img/clouds${cloudRand}.png" alt="" width="${cloudWidth}" height="${cloudsHeight}" class="clouds-right">`;
    cloudRand = Math.floor(Math.random() * 4 + 1); // 1 - 4
    document.getElementById('clouds-right-2').innerHTML = `<img src="../img/clouds${cloudRand}.png" alt="" width="${cloudWidth}" height="${cloudsHeight}" class="clouds-right-2">`;
    cloudRand = Math.floor(Math.random() * 4 + 1); // 1 - 4
    document.getElementById('clouds-left').innerHTML = `<img src="../img/clouds${cloudRand}.png" alt="" width="${cloudWidth}" height="${cloudsHeight}" class="clouds-left">`;
    cloudRand = Math.floor(Math.random() * 4 + 1); // 1 - 4
    document.getElementById('clouds-left-2').innerHTML = `<img src="../img/clouds${cloudRand}.png" alt="" width="${cloudWidth}" height="${cloudsHeight}" class="clouds-left-2">`;
}

function animationOn() {
    animationMode = true;
    document.getElementById("loading-sign").style.display = "inherit";
    document.getElementById("fighter").style.display = "inherit";
    document.getElementById("clouds-right").style.display = "inherit";
    document.getElementById("clouds-right-2").style.display = "inherit";
    document.getElementById("clouds-left").style.display = "inherit";
    document.getElementById("clouds-left-2").style.display = "inherit";
    closeModal();
}

function animationOff() {
    animationMode = false;
    document.getElementById("loading-sign").style.display = "none";
    document.getElementById("fighter").style.display = "none";
    document.getElementById("clouds-right").style.display = "none";
    document.getElementById("clouds-right-2").style.display = "none";
    document.getElementById("clouds-left").style.display = "none";
    document.getElementById("clouds-left-2").style.display = "none";
    closeModal();
}