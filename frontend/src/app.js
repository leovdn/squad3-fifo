const container = document.querySelector('.container');


const getPosts = async () => {
  const response = await fetch('http://localhost:3333/queues');  
  return response.json();  
};

const addPostsIntoDOM = async () => {
  const posts = await getPosts();

  const postsTemplate = posts.map(({ title, players, hour }) => `
    <div class="fila">
      <div class="fila-info">
        <h2 class="fila-title">${title}</h2>
        <p class="fila-body">Jogadores: ${players}</p>
        <p class="fila-body">Horário: ${hour}</p>
      </div>    
    </div>  
  `).join("");

  container.innerHTML += postsTemplate;
};

addPostsIntoDOM();