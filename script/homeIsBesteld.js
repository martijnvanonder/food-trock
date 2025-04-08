if (sessionStorage.getItem('isBesteld')) {
  document.querySelector('.isBesteld').style.display = 'block';

  document.querySelector('#naam').innerHTML = `Op naam -> ${sessionStorage.getItem('naam')}`;
  document.querySelector('#tijd').innerHTML = `Op tijd -> ${sessionStorage.getItem('tijd')}`;
  document.querySelector('#nummer').innerHTML = `Op nummer -> ${sessionStorage.getItem('nummer')}`;
}