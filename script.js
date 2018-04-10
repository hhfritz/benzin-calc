var liter = document.querySelector("#liter");
var km = document.querySelector("#km");
var button = document.querySelector("#berechnen");
var ergebnis = document.querySelector("#erg");


function benzinVerbrauch () {
	if (Number(liter.value) > 0 && Number(km.value) > 0) {
		ergebnis.innerText = (Number(liter.value) / Number(km.value) * 100).toFixed(1) + " Liter pro 100km";
	} else {
		ergebnis.innerText = "Keine gültigen Werte";
	}
} 

button.addEventListener("click", benzinVerbrauch);

