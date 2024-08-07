const { StatusCodes } = require('http-status-codes');

const { AirportService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /airports
 * req-body {name: 'IGI', cityId: 5, code: 'DEL}
 */
async function createAirport(req, res) {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId

        });
        SuccessResponse.data = airport;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

/**
 * GET : /airports
 * req-body {}
 */

async function getAirports(req, res) {
    try{
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

/**
 * GET : /airports/:id
 * req-body {}
 */
async function getAirport(req, res) {
    try{
        const airports = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airports;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

/**
 * DELETE : /airports/:id
 * req-body {}
 */
async function destroyAirport(req, res) {
    try{
        const airports = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airports;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

/**
 * PATCH : /airports/:id
 * req-body {modelNumber: 'airbus320', capacity: 200}
 */
async function updateAirport(req, res) {
    try{
        const bodyReq = req.body;
        const bodyData = {}
        if(bodyReq.name){
            bodyData.name = bodyReq.name;
        }
        if(bodyReq.code){
            bodyData.code = bodyReq.code;
        }
        if(bodyReq.address){
            bodyData.address = bodyReq.address;
        }
        if(bodyReq.cityId){
            bodyData.cityId = bodyReq.cityId;
        }
        const airport = await AirportService.updateAirport(req.params.id, bodyData);
        SuccessResponse.data = airport;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}