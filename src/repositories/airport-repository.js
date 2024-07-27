const CrudRepository = require('./crud-repository');
const { Airport } = require('../models');


class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport); // Super keyword is used to class the parent's constructor and here we are passing the airplane model to the parent class.
    }
}

module.exports = AirportRepository;