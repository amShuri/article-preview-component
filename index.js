const btn = document.getElementById('share-button');
const shareIcons = document.getElementById('share-icons');

btn.addEventListener('click', (e) => {
  btn.classList.toggle('share__button--dark');
  shareIcons.classList.toggle('hidden');
});
