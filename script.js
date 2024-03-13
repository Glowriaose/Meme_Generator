const memeName = document.querySelector('.memes .meme-name');
const displayMeme = document.querySelector('.memes img');
const button = document.querySelector('.memes  button');

function memesDetails(url, name) {
  displayMeme.setAttribute('src', url);
  memeName.innerText = name;
}

const fetchMeme = () => {
  fetch('https://api.imgflip.com/get_memes')
    .then((response) => response.json())
    .then((data) => {
      const memes = data.data.memes;
      const randomMemesIndex = Math.floor(Math.random() * memes.length);
      const randomMeme = memes[randomMemesIndex];
      memesDetails(randomMeme.url, randomMeme.name);
    })
    .catch(errorFunction);
};

function errorFunction(error) {
  console.error(error, 'this is an error');
}

button.addEventListener('click', fetchMeme);

fetchMeme();
