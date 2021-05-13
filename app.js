
// Init weather object
const weather = new Weather(city);

// Init ui object
const ui = new UI();

// Search location
const searchLocation = document.getElementById('w-change-btn');

// Search input event listener
searchLocation.addEventListener('click', searchWeather)

function searchWeather(e) {
    // Get input text
    const city = document.getElementById('city').value;

    if(city !== '') {
        // Make HTTP call
        weather.getWeather(city)
        .then(results => {
            if(results.weather.message === 'city not found') {
                // Show alert
                ui.showAlert('City Not Found', 'alert');
            } else {
                // Show weather
                console.log(results)
                ui.paint(results) 
                ui.clearInput();
                ui.showWeather(); 
            }
        })
    } else {
        // Show Alert
        ui.showAlert('You must enter a city', 'alert')
    }
}



// Change Location Event
document.getElementById('loc-modal').addEventListener('click', ui.changeLocation)

// Close modal
document.getElementById('close').addEventListener('click', ui.showWeather)

    
