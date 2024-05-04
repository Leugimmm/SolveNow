const filterButton = document.getElementById('filterButton');
const filterOverlay = document.getElementById('filterOverlay');
const confirmButton = document.getElementById('confirmButton');

filterButton.addEventListener('click', () => {
  filterOverlay.style.display = 'block';
});

confirmButton.addEventListener('click', () => {
  filterOverlay.style.display = 'none';
});