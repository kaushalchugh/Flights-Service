const CrudRepository = require('./crud-repository');
const { City } = require('../models');


class CityRepository extends CrudRepository {
    constructor() {
        super(City); // Super keyword is used to class the parent's constructor and here we are passing the airplane model to the parent class.
    }
}

module.exports = CityRepository;