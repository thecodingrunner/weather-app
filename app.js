const loc = document.getElementById('location')
const form = document.querySelector('form')



form.addEventListener('submit', (event) => {
  event.preventDefault()
  weather(loc.value)
})

async function weather(loc) {
  let source = await fetch(`https://api.weatherapi.com/v1/current.json?key=7d9c8c298c404131a76112436242602&q=${loc}`, {mode: 'cors'})
  let response = await source.json()
  process(response)
}

function process(response) {
  let weatherData = []
  console.log(response)
  weatherData.push(response.current.temp_c)
  weatherData.push(response.current.feelslike_c)
  weatherData.push(response.current.condition.text)
  weatherData.push(response.current.wind_mph)
  display(weatherData)
}

function display(weatherData) {
  console.log(weatherData)
}




