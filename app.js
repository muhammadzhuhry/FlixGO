const form = document.querySelector('form');
const input = document.querySelector('#searchBox')

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  const searchBox = input.value;
  console.log(searchBox)
}