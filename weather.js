class Weather {
    constructor() {
        this.apiKey = "9c65e0a54f178d8bf29ac221095e7e1e";
    }

    

    // Fetch weather from API
    async getWeather(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return {
            weather:responseData 
        }

    }
    // // Change weather location
    changeLocation(city) {
        this.city = city;

    }
}
