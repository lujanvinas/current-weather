class Storage {
    constructor() {
        this.city;
        this.country;
        this.defaultCity = "Toronto";
        this.defaultCountry = "Canada";
    }


    getLocationData() {
        if(localStorage.getItem("city") === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem("city");
        }
        if(localStorage.getItem("country") === null) {
            this.country = this.defaultCountry;
        } else {
            this.country = localStorage.getItem("country");
        }

        return {
            city: this.city,
            country: this.country
        }

    }

    // save in LS
    setLocationData(city, country) {
        //saving city and country in LS as city and country
        localStorage.setItem("city", city);
        localStorage.setItem("country", country);
    }
}