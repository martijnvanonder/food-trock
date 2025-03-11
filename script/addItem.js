const items = [];

document.querySelectorAll('.toevoegen').forEach(knop => {
  knop.addEventListener('click', async function() {
    const id = this.id;    
    
    items.push(id);
    
    console.log(items);
    updateList(items);
    
    // const prijs = document.querySelector(`.${id}`).querySelector('.prijs').innerHTML;
    
    let origineleTekst = knop.value;
    knop.value = "Toegevoegd!";
    
    setTimeout(() => {
      knop.value = origineleTekst;
    }, 2000);
  })
})

document.querySelector('.items-list').addEventListener('click', function(event) {
  if (event.target.classList.contains('delete')) {
    items.splice(items.lastIndexOf(event.target.classList[1]));
    console.log('deleted')
    updateList(items);
  }
});


function updateList(arr = []) {
  const counts = {};
  
  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  } 
  
  const items = document.querySelector('.items-list');
  items.innerHTML = '';
  
  Object.entries(counts).forEach(([key, value]) => {
    console.log(key);
    const title = document.querySelector(`.${key}`).closest('.card').querySelector('.titel').innerHTML.trim();

    const li = document.createElement('li');
    li.className = `item ${title}`;
    
    li.innerHTML = `<p>${value}x ${title}</p> <a href='#' class='delete ${key}' onclick='return false;'>×</a>`;
    items.appendChild(li);
    // console.log(`${title}: ${value}`);
  });
}

