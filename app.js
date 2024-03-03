async function weather(location) {
  let source = await fetch(`https://api.weatherapi.com/v1/current.json?key=7d9c8c298c404131a76112436242602&q=${location}`, {mode: 'cors'})
  let response = await source.json()
  console.log(response)
}

weather('london')


