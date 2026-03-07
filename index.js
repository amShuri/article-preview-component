const btn = document.getElementById('share-button');
const shareIcons = document.getElementById('share-icons');
const firstIcon = document.getElementById('first-icon');

btn.addEventListener('click', (e) => {
  btn.classList.toggle('share__button--dark');
  shareIcons.classList.toggle('hidden');

  firstIcon.focus();
});
