const loc = document.getElementById('location')
const form = document.querySelector('form')
const header = document.querySelector('.header')
const locImage = document.getElementById('place')
const conImage = document.getElementById('condition')
const condition = document.querySelector('.condition h2')
const temp = document.querySelector('.temp')
const feelslike = document.querySelector('.feelslike')
const wind = document.querySelector('.wind')
const images = document.querySelector('.condition')


form.addEventListener('submit', (event) => {
  event.preventDefault()
  weather(loc.value)
  locImage.src = '';
  conImage.src = '';
  images.classList.add('loader');
})

async function weather(loc) {
  let source = await fetch(`https://api.weatherapi.com/v1/current.json?key=7d9c8c298c404131a76112436242602&q=${loc}`, {mode: 'cors'})
  let response = await source.json()
  changeLocation(loc)
  process(response)
}

function process(response) {
  let weatherData = {}
  console.log(response)
  weatherData.temp = response.current.temp_c
  weatherData.feelslike = response.current.feelslike_c
  weatherData.condition = response.current.condition.text
  weatherData.wind = response.current.wind_mph
  display(weatherData)
}

function display(weatherData) {
  console.log(weatherData)
  changeCondition(weatherData.condition)
  header.textContent = weatherData.condition
  temp.textContent = `Temp (celcius): ${weatherData.temp}`
  feelslike.textContent = `Feels like (celcius): ${weatherData.feelslike}`
  wind.textContent = `Wind (mph): ${weatherData.wind}`
}

// convert to fahrenheit option


function changeCondition(search) {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=4UYgZj6gGuxMW5n1VlS5O0aDmmMn5s55&s=${search}`, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    images.classList.remove('loader')
    conImage.src = response.data.images.original.url;
    console.log(response)
  });
}

function changeLocation(search) {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=4UYgZj6gGuxMW5n1VlS5O0aDmmMn5s55&s=${search}`, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    images.classList.remove('loader')
    locImage.src = response.data.images.original.url;
    console.log(response)
  })
}
