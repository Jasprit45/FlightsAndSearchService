const {CityService} = require('../services/index');
/*
* POST   data ->req.body
*/

const cityService = new CityService();

const create= async (req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success: true,
            message: "Successfully created a City",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            message: "Not able to create a City",
            err: error,
        })
    }

}
// dELETE :- /city/:id

const destroy= async(req,res) => {
    try {
        const response = await cityService.deleteCity(req.param.id);
        return res.status(200).json({
            data : response,
            success: false,
            message: "Successfully deleted a City",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success: true,
            message: "Not able to delete a City",
            err: error,
        })
    }

}
// GET :- /city/:id

const get= async (req,res) => {
    try {
        const response = await cityService.getCity(res.param.id);
        return res.status(200).json({
            data : response,
            success: true,
            message: "Successfully fetched a City",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            message: "Not able to get a City",
            err: error,
        })
    }


}

// PATCH :- /city/:id -> req.body
const update= async (req,res) => {
    try {
        const response = await cityService.updateCity(res.param.id , req.body);
        return res.status(200).json({
            data : response,
            success: true,
            message: "Successfully updated a City",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            message: "Not able to update a City",
            err: error,
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
}