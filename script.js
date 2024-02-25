const apiKey = '84690ef817c34b7d9b69f65447dfa016';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

function displayNews(articles) {
  const blogContainer = document.getElementById('blog-container');
  blogContainer.innerHTML = '';

  articles.forEach(article => {
    const blogCard = document.createElement('div');
    blogCard.classList.add('blog-card');

    const image = document.createElement('img');
    image.src = article.urlToImage ? article.urlToImage : 'https://via.placeholder.com/600x400';
    image.alt = 'Article Image';

    const title = document.createElement('h2');
    title.textContent = article.title;

    const description = document.createElement('p');
    description.textContent = article.description || 'No description available';

    blogCard.appendChild(image);
    blogCard.appendChild(title);
    blogCard.appendChild(description);

    blogContainer.appendChild(blogCard);
  });
}

document.getElementById('search-button').addEventListener('click', async () => {
  const searchTerm = document.getElementById('search-input').value;
  const searchUrl = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`;
  const articles = await fetchNews(searchUrl);
  displayNews(articles);
});

window.addEventListener('load', async () => {
  const articles = await fetchNews(apiUrl);
  displayNews(articles);
});

function displayNews(articles) {
    const blogContainer = document.getElementById('blog-container');
    blogContainer.innerHTML = '';
  
    articles.forEach(article => {
      const blogCard = document.createElement('a'); // Change here
      blogCard.classList.add('blog-card');
      blogCard.href = article.url; // Change here
  
      const image = document.createElement('img');
      image.src = article.urlToImage ? article.urlToImage : 'https://via.placeholder.com/600x400';
      image.alt = 'Article Image';
  
      const title = document.createElement('h2');
      title.textContent = article.title;
  
      const description = document.createElement('p');
      description.textContent = article.description || 'No description available';
  
      blogCard.appendChild(image);
      blogCard.appendChild(title);
      blogCard.appendChild(description);
  
      blogContainer.appendChild(blogCard);
    });
  }
  