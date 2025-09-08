const {CityRepository} = require("../repository/index");

class CityService {
    constructor() {
        this.CityRepository = new CityRepository();
    }

    async createCity(dtaa) {
        try {
            const city = await this.CityRepository.createCity(data);
            return city;
            
        } catch (error) {
        console.log("Something went wrong in the service layer");
        throw(error);
        }
    }
    async deleteCirety(cityId) {
        try {
            const response = await this.CityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
        console.log("Something went wrong in the service layer");
        throw(error);
        }
    }
    async updateCity(cityId , data) {
        try {
            const city = await this.CityRepository.updateCity(cityId, data);
            return city;
            
        } catch (error) {
        console.log("Something went wrong in the service layer");
        throw(error);
        }
    }
    async getCity(cityId) {
        try {
            const city = await this.CityRepository.getCity(cityId);
            return city;
        } catch (error) {
        console.log("Something went wrong in the service layer");
        throw(error);
        }
    }
}

module.exports = CityService;