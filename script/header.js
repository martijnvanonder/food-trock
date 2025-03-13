const input = document.querySelector('#menu-toggle');
const sidebar = document.querySelector('.sidebar');

input.addEventListener('change', function() {
  if (this.checked) {
    sidebar.classList.add('is-active')
  } else {
    sidebar.classList.remove('is-active')
  }
});