const {City} = require('../models/index');

//modal name singular
//table name plural

class Cityrepository {
    async createCity({name}) {//{name:"delhi"}
        try{
            const city = await City.create({
                name
            });
        }catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }

    async deleteCity(cityId) {
        try{
            await City.destroy({
                where: {
                    id : cityId
                }
            });
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }

    async updateCity(cityId , data) {
        try {
            const city = await cityId.update(data , {
                where: {
                    id: cityId,
                }
            })
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }
} 


module.exports = Cityrepository;