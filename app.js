const form = document.querySelector('form');
const input = document.querySelector('#searchBox')

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
    console.log(results);
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

async function movieTemplate(movie) {
  return `
  <div class="card col-$4">
    <img class="card-img-top" src="${movie.Poster}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${movie.Title}</h5>
      <p class="card-text">${movie.Year}</p>
    </div>
  </div>`;
}