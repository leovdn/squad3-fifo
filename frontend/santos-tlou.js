const container = document.querySelector('.table-fifa');

const url = 'http://localhost:3333/santos/fila/names/The Last of Us';

const getPosts = async () => {
  const response = await fetch(url);  
  return response.json();  
};

const addPostsIntoTlou = async () => {
  const posts = await getPosts();

  const postsTemplate = posts.map((item, index) => `
    <tr>
      <td>${index + 1}º</td>
      <td><img class="foto" src="img/logo.png" alt=""></td>
      <td>${item.name}</td>
    </tr> 
  `).join("");

  container.innerHTML += postsTemplate;
};

// addPostsIntoTlou();

module.exports = {addPostsIntoTlou: addPostsIntoTlou};