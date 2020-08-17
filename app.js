const form = document.querySelector('form');
const input = document.querySelector('#searchBox')
const resultSection = document.querySelector('#results');

const env = {
  API_URL: 'http://www.omdbapi.com/',
  API_KEY: 'f13d554d'
};

form.addEventListener('submit', submitForm);

async function submitForm(event) {
  event.preventDefault();
  const searchBox = input.value;
  
  try {
    const results = await getResult(searchBox);
    showResults(results);
  } catch (error) {
    console.log(error);
  }
}

async function getResult(searchBox) {
  const uri = `${env.API_URL}?apikey=${env.API_KEY}&s=${searchBox}`;
  
   const response = await fetch(uri);
   const data = await response.json();
   if (data.Error) {
     throw new Error(data.Error);
   }

   return data.Search;
}

function movieTemplate(movie) {
  return `
  <div class="card col-3 mt-3">
    <img class="card-img-top" src="${movie.Poster}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${movie.Title}</h5>
      <p class="card-text">${movie.Year}</p>
      <a target="_blank" href="https://www.imdb.com/title/${movie.imdbID}/" class="btn btn-secondary btn-block">Check on IMDB</a>
    </div>
  </div>`;
}

function showResults(response) {
  resultSection.innerHTML = response.reduce((html, movie) => {
    return html + movieTemplate(movie);
  }, '');
}