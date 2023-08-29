const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

const projectList = document.getElementById('project-list');

// Fetch GitHub repositories using the API
fetch('https://api.github.com/users/1ucaso1iveira/repos')
  .then(response => response.json())
  .then(repositories => {
    repositories.forEach(repo => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
      projectList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching GitHub repositories:', error));
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', event => {
      event.preventDefault(); 
      // Exibe um alerta quando o formulário é enviado
      alert('A sua mensagem foi enviada com sucesso!');
  
      // Limpa os campos do formulário
      form.reset();
    });
  });
  