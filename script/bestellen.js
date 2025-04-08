const items = sessionStorage.getItem("producten");
const prijs = sessionStorage.getItem("prijs");

// tijd options
const tijdSelect = document.querySelector("#tijd");
const closingHour = 21;
const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();

// minuten afronden naar kwartieren
if (minutes % 15 !== 0) {
  minutes = Math.ceil(minutes / 15) * 15;
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
}

for (; hours < closingHour; ) {
  const option = document.createElement("option");
  option.innerHTML = formatTime(hours, minutes);
  tijdSelect.appendChild(option);

  minutes += 15;
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
}

if (items.length >= 20) {
  tijdSelect.removeChild(tijdSelect.firstChild);
}

function formatTime(hours, minutes) {
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

// bestelling gelukt
const naamInput = document.querySelector('#naam');
const phoneInput = document.querySelector('#phone');
const tijdInput = document.querySelector('#tijd');
const errorField = document.querySelector('#error');
const form = document.querySelector('form');
const geluktScherm = document.querySelector('#gelukt');

document.querySelector('button#bestellen').addEventListener('click', () => {
  errorField.innerHTML = "";
  
  if (!naamInput.value || !phoneInput.value) {
    errorField.innerHTML = 'Onjuist informatie ingevuld';
    return;
  }

  const naam = naamInput.value;
  const nummer = Math.floor(Math.random() * 999) + 1;

  sessionStorage.setItem('nummer', nummer);
  sessionStorage.setItem('naam', naam);
  sessionStorage.setItem('tijd', tijdInput.value);
  sessionStorage.setItem('isBesteld', true);

  form.style.display = 'none';
  geluktScherm.style.display = 'flex';

  document.querySelector('#geluktNummer').innerHTML = `Uw nummer: ${nummer}`;
  document.querySelector('#geluktNaam').innerHTML = `Uw ingevoerde naam: ${naam}`;
})