const readline = require('readline')

const { fetchWeatherInfo } = require('./helpers/axioxUtils')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('What city weather do you want to check for? ', (answer) => {
  if (answer === '') {
    console.log('Sorry! you have to provide a city')
    rl.close()
  } else {
    fetchWeatherInfo(answer, (data) => {
      if (data.main) {
        console.log(`The temperature in ${answer} is ${(data.main.temp - 273.15)} degrees celsius.`)
        console.log('Have a good day')
      } else {
        console.log(`There was an error when trying to fetch data for ${answer}`)
      }

      rl.close()
    })
  }
})


