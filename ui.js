// display results on UI
class UI {
    constructor() {
        this.location = document.getElementById("w-location");
        this.desc = document.getElementById("w-desc");
        this.string = document.getElementById("w-string");
        this.details = document.getElementById("w-details");
        this.icon = document.getElementById("w-icon");
        this.feelsLike = document.getElementById("w-feels-like");
        this.humidity = document.getElementById("w-humidity");
        this.wind = document.getElementById("w-wind");
    }
    
    
    paint(weather) {
        const temp = Math.round(weather.weather.main.temp);
        const feelsLike = Math.round(weather.weather.main.feels_like);
        const windSpeed = weather.weather.wind.speed.toFixed(1);

        this.location.textContent = `${weather.weather.name}, ${weather.weather.sys.country}`;
        this.desc.textContent = weather.weather.weather[0].description;
        this.string.textContent = `${temp} C°`;
        this.icon.setAttribute("src" , `https://openweathermap.org/img/wn/${weather.weather.weather[0].icon}@2x.png`);
        this.feelsLike.textContent = `Feels Like: ${feelsLike} C°`;
        this.humidity.textContent = `Humidity: ${weather.weather.main.humidity}%`; 
        this.wind.textContent = `Wind: ${windSpeed} km/h`;
        
        const condition = weather.weather.weather[0].main;

        // Check if condition matches id, and add/remove class accordingly
        let items = document.getElementById('video-container').children;
    
        items = Array.from(items);

        for(let i = 0; i < items.length; i++){
            if(items[i].id === condition) {
                items[i].classList.add('active');
            } else {
                items[i].classList.remove('active');
            }
        }
    }

    // Show alert msg
    showAlert(message, className) {  
        const alert = document.getElementById('alert');       
            alert.classList.add(className)
            alert.innerHTML += message;


            setTimeout((className) => {        
                if(alert) {
                    alert.classList.remove(className);
                    alert.innerHTML = '';
                }
            }, 2000);       
    }

    // Clear input after submit
    clearInput() {
        document.getElementById('city').value = '';
    }

    // Show weather
    // close search 
    showWeather() {
    const search = document.getElementById('search-container');
    const weathCont = document.getElementById('weather-container');
    search.style.display = 'none';
    weathCont.style.display = 'block';
    }

    changeLocation() {
    const search = document.getElementById('search-container');
    const weathCont = document.getElementById('weather-container');
    const close = document.getElementById('close');

    search.style.display = 'block';
    weathCont.style.display = 'none';
    close.style.display = 'block';

    }

}

