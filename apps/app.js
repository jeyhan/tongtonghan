const apikey = '4e413a7f1dd6462ea3582844506d94b9'
const main = document.querySelector('main');

window.addEventListener('load', e => {
	updateGames();
})

async function updateGames() {
	const res = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2018-12-04&to=2018-12-04&sortBy=popularity&apiKey=${apikey}`)
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