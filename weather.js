class Weather {
    constructor(city, country) {
        this.apiKey = "9c65e0a54f178d8bf29ac221095e7e1e";
        this.city = city;
        this.country = country;
    }

    

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return { // we want to return an object with different info
            weather: responseData
        }

    }
    // Change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;

    }
}
