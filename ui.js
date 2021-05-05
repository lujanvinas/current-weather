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
        const section = document.getElementsByClassName('section');
        // const snow = document.getElementById("snow");
        // const rain = document.getElementById("rain");
        // const clouds = document.getElementById("clouds");
        // const clear = document.getElementById("clear");

        // Check if condition matches id, and add/remove class accordingly
        let items = document.getElementById('video-container').children;
    
        items = Array.from(items);
        // console.log(items[0].id);

        for(let i = 0; i < items.length; i++){
            if(items[i].id === condition) {
                items[i].classList.add('active');
                console.log(items[i].id)
            } else {
                items[i].classList.remove('active');
            }
        }

        // switch(condition) {
        //     case 'Rain':
        //         // rain.classList.add('active');
        //         // clouds.classList.remove('active');
        //         // snow.classList.remove('active');
        //         // clear.classList.remove('active');
        //         toggleClass();
        //         break;
        //     case 'Clouds':
        //         // clouds.classList.add('active');
        //         // rain.classList.remove('active');
        //         // snow.classList.remove('active');
        //         // clear.classList.remove('active');
        //         toggleClass();
        //         break;
        //     case 'Clear':
        //         // clear.classList.add('active');
        //         // clouds.classList.remove('active');
        //         // rain.classList.remove('active');
        //         // snow.classList.remove('active');
        //         toggleClass();
        //         break;
        //     case 'Snow':
        //         // snow.classList.add('active');
        //         // clouds.classList.remove('active');
        //         // rain.classList.remove('active');
        //         // clear.classList.remove('active');
        //         toggleClass();
        //         break;
        //     default:
        //         section.style.backgroundColor = 'white'; 
        // }
//     }
// }
    }}
