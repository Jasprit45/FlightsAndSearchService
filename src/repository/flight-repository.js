const {Flights} = require('../models/index');
const {Op} = require('sequelize');

class FlightRepository{

    #createFilter(data) {
        // data = {
        //     data.flightNumber
        //     data.airplaneId
        //     data.arrivalAirportId
        //     data.departureAirportId
        //     data.arrivalTime
        //     data.departureTime
        //     data.price
        //     data.boardingGate
        //     data.totalSeats
        // }
        let filter = {}
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        
        // if(data.minPrice){
        //     Object.assign(filter,{price: {[Op.gte]: data.minPrice}});
        // }
        // if(data.maxPrice){
        //     Object.assign(filter,{price: {[Op.lte]: data.maxPrice}});
        // }
        // if(data.minPrice && data.maxPrice ){
        //     Object.assign(filter, {
        //         [Op.and]:[
        //         {price: {[Op.gte]: data.minPrice}},
        //         {price: {[Op.lte]: data.maxPrice}}
        //         ]
        //     } )
        // }

        let priceFilter = [];
        if(data.minPrice){
            priceFilter.push({price: {[Op.gte]: data.minPrice}});
        }
        if(data.maxPrice){
            priceFilter.push({price: {[Op.lte]: data.maxPrice}});
        }
        Object.assign(filter,{[Op.and]: priceFilter});
        console.log(filter);
        return filter;
    }


    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight-repository layer");
            throw{error};
        }
    }
    async getFlight(flightid) {
        try {
            const flight = await Flights.findByPk(flightid);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight-repository layer");
            throw{error};
        }
    }
    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight-repository layer");
            throw{error};
        }
    }

}

module.exports = FlightRepository;

/*
{
    where: {
        arrivalAirportId:2
    }
}
 */
