const items = [];

document.querySelectorAll('.toevoegen').forEach(knop => {
  knop.addEventListener('click', async function() {
    const id = this.id;    
    
    items.push(id);
    updateList(items);
    
    let origineleTekst = knop.value;
    knop.value = "Toegevoegd!";
    
    setTimeout(() => {
      knop.value = origineleTekst;
    }, 2000);
  })
})

document.querySelector('.items-table').addEventListener('click', function(event) {
  if (event.target.classList.contains('delete')) {
    items.splice(items.lastIndexOf(event.target.classList[0]), 1);
    updateList(items);
    console.log(event.target.classList[0]);
  }

  if (event.target.classList.contains('add')) {
    items.push(event.target.classList[0]);
    updateList(items);
  }

  console.log(items);
});

function updateList(arr = []) {
  const counts = {};
  
  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  } 
  
  const items = document.querySelector('.items-table');
  items.innerHTML = '<tr><th>Aantal</th><th>Item</th><th>Prijs</th></tr>';
  
  Object.entries(counts).forEach(([key, value]) => {
    const title = document.querySelector(`.${key}`).closest('.card').querySelector('.titel').innerHTML.trim();
    const prijs = parseFloat(document.querySelector(`.${key}`).querySelector('.prijs').innerHTML.split(' ')[1]) * value;

    const tr = document.createElement('tr');
    tr.className = `item ${key}`;
    
    const addLink = `<a href='#' class='${key} add' onclick='return false;'> + </a>`;
    const deleteLink = `<a href='#' class='${key} delete' onclick='return false;'> - </a>`;

    tr.innerHTML = `<td>${value}x <span>${addLink} ${deleteLink}</span></td> <td>${title}</td> <td>€ ${prijs.toFixed(2)}</td>`;
    items.appendChild(tr);

  });

  const totaalPrijs = calculateTotalPrice(counts);
  document.querySelector('.totaal-prijs').innerHTML = `Totaalprijs: €${totaalPrijs}`;
}

function calculateTotalPrice(counts) {
  if (!Object.keys(counts).length) return "-,--";

  let price = 0;
  Object.entries(counts).forEach(([key, value]) => {
    const itemPrice = parseFloat(document.querySelector(`.${key}`).querySelector('.prijs').innerHTML.split(' ')[1]) * value;

    console.log(itemPrice, value);

    price += itemPrice;
  });

  return price.toFixed(2);
}


const toonMeerKnop = document.getElementById("toonMeer");
const cards = document.querySelectorAll('.card');
const cardsToToggle = Array.from(cards).slice(-14); // Neem de laatste 14 kaarten

toonMeerKnop.addEventListener("click", function () {
  cardsToToggle.forEach(card => {
    card.style.display = (card.style.display === "flex") ? "none" : "flex";
  });

  const allesZichtbaar = Array.from(cardsToToggle).some(card => card.style.display === "flex");
  toonMeerKnop.innerHTML = allesZichtbaar ? 'Toon minder <i class="bi bi-caret-up"></i>' : 'Toon meer <i class="bi bi-caret-down"></i>';
});
