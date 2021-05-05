// Init storage object
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Init ui object
const ui = new UI();

// getWeather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

const modal = document.getElementById("modal");
const container = document.getElementById("row-weather");


// open modal 
function openModal(e) {
    container.style.display = "none";
    modal.style.display = "block";
}

// close modal 
function closeModal(e) {
    container.style.display = "block";
    modal.style.display = "none";
}

document.getElementById("loc-modal").addEventListener("click", openModal);


// Change Location Event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;

    
    // change location
    weather.changeLocation(city, country);
    
    // Set location in LS
    storage.setLocationData(city, country);
    
    // call getWeather function again
    getWeather();
    
    // Close modal - needs to be done in jQuery (but we actually dont need it)
    // $("#locModal").modal("hide");


    closeModal();

    document.getElementById("x").addEventListener("click", closeModal)


})




function getWeather() {
    // this will return a promise, bc of the async (we need to use the .then)
    weather.getWeather()
        .then(results => {
            console.log(results)
            // display results on ui
            ui.paint(results) 
        })
        .catch(err => console.log(err));
    }

