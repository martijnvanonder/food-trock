const date = new Date();
const day = date.getDay();

const currentTableDay = document.querySelector(`.information-table table tr:nth-child(${day + 1})`); 
// + 1 omdat er een table head is
currentTableDay.style.backgroundColor = 'rgba(0, 191, 255, 0.1)';

const kaart = document.querySelector('.kaart');
const titleText = kaart.querySelector('h2').innerHTML;
const title = `<h2>${titleText}</h2>`;

// iframe voor markt
const marktMap = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.416810462714!2d6.291207607946328!3d51.964975034908726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c784c91b1e7779%3A0xb5a554629ca4e23a!2sGemeentehuis%20Doetinchem!5e0!3m2!1snl!2snl!4v1741956115850!5m2!1snl!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

// iframe voor jumbo
const jumboMap = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2458.052044863528!2d6.2937790761879695!3d51.96947597192205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c784cfe66aa995%3A0x26c733e5efba83d9!2sJumbo!5e0!3m2!1snl!2snl!4v1741956210323!5m2!1snl!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

// aanpassen map
switch (day) {
  case 1:
  case 2:
  case 4:
  case 5:
    kaart.innerHTML = title + jumboMap;
    break;
  default:
    kaart.innerHTML = title + marktMap;
}