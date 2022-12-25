const { City } = require('../models/index');

class CityRepository {

  //creating a city
  async createCity( {name}) {
    try{
      const city = await City.create({ name });
      return city;

    }catch(error){
      throw {error};
    }
  }

  //deleting a city
  async deleteCity( cityId ) {
    try{
      await City.destroy({
        where: {
          id: cityId
        }
      });

    }catch(error){
      throw {error};
    }
  }
}

module.exports = CityRepository;