const { City } = require('../models/index');

class CityRepository {

  //creating a city
  async createCity( {name}) {
    try{
      const city = await City.create({ name });
      return city;

    }catch(error){
      console.log('Something went wrong in City Repository');
      throw {error};
    }
  }

  //updating a city
  async updateCity(cityId, data){

    try{
      // const city = await City.update(data,{
      //   where:{
      //     id: cityId
      //   }
      // });
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;

    }catch(error){
      console.log('Something went wrong in City Repository');
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
      return true;

    }catch(error){
      console.log('Something went wrong in City Repository');
      throw {error};
    }
  }

  //get city
  async getCity(cityId){

    try{
      const city = await City.findByPk(cityId);
      return city;

    }catch(error){
      console.log('Something went wrong in City Repository');
      throw {error};
    }
  }
}

module.exports = CityRepository;