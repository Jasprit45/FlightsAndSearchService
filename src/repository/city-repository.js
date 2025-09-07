const {City} = require('../models/index');

//modal name singular
//table name plural

class Cityrepository {
    async createCity({name}) {
        try{
            const city = await City.create({name});
        }catch (error) {
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
            throw{error};
        }
    }



}


module.exports = Cityrepository;