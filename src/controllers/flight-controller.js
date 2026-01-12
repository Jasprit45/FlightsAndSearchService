const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async (req,res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplanId: req.body.airplanId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            depatureTime: req.body.depatureTime,
            price: req.body.price
        }

        const flight = await flightService.createFlight(flightRequestData);
        return res.status(201).json({
            data : flight,
            success : true,
            message : "Successfully created a Flight",
            err: {},        
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            message: "Not able to create a Flight",
            err: error,
        })
    }
}

const getAll = async (req,res) => {
    try {
        const flight = await flightService.getAllFlightData(req.query);
        return res.status(201).json({
            data : flight,
            success : true,
            message : "Successfully fetched the Flight",
            err: {},        
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            message: "Not able to fetch the Flights",
            err: error,
        })
    }
}

module.exports  = {
    create,
    getAll,
}

