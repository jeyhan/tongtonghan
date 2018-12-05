const apikey = '39257a0657164b95ae3f8735d4ab335a'
const main = document.querySelector('main');

window.addEventListener('load', e => {
	updateGames();
})

async function updateGames() {
	const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-04&sortBy=publishedAt&apiKey=${apikey}')
	const json = await res.json();

	main.innerHTML = json.articles.map(createArticle).join('\n');
}

function createArticle(article){
	return `
	 <div class="article">
      <a href="${article.url}">
        <h2>${article.title}</h2>
        <img src="${article.urlToImage}" alt="${article.title}">
        <p>${article.description}</p>
      </a>
    </div>
    `;
}