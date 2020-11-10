const container = document.querySelector('.container');

const url = 'http://localhost:3333/fila';

const getPosts = async () => {
  const response = await fetch(url);  
  return response.json();  
};

const addPostsIntoDOM = async () => {
  const posts = await getPosts();

  const postsTemplate = posts.map(({ name, game, id }) => `
    <div class="item">
      <div class="item-info">
        <h2 class="item-id">${id}</h2>
        <h2 class="item-title">${name}</h2>
        <p class="item-game">${game}</p>
      </div>    
    </div>  
  `).join("");

  container.innerHTML += postsTemplate;
};

addPostsIntoDOM();