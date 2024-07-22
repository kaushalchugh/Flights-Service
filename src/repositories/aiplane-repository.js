const CrudRepository = require('./crud-repository');
const { Airplane } = require('../models');


class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane); // Super keyword is used to class the parent's constructor and here we are passing the airplane model to the parent class.
    }
}

module.exports = AirplaneRepository;