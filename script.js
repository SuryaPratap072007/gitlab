const greetBtn = document.getElementById('greetBtn');
const message = document.getElementById('message');

greetBtn.addEventListener('click', () => {
  message.textContent = 'Repo is live on GitHub and ready to go!';
});
