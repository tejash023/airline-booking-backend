const { CityRepository } = require('../repository');

class CityService {

  constructor(){
    this.CityService = new CityRepository();
  }

  async createCity(data){

    try{

      const city = await this.CityRepository.createCity(data);
      return city;

    }catch(error){
      console.log('Something went wrong in services layer');
      throw {error};
    }

  }

  async deleteCity(cityId){

    try{
      const response = await this.CityRepository.deleteCity(cityId);
      return response;
    }catch(error){
      console.log('Something went wrong in services layer');
      throw {error};
    }
  }

  async updateCity(cityId, data){

    try{
      const city = await this.CityRepository.updateCity(cityId, data);
      return city;

    }catch(error){
      console.log('Something went wrong in services layer');
      throw {error};
    }

  }

  async getCity(cityId){

    try{
      const city = await this.CityRepository.getCity(cityId);
      return city;
    }catch(error){
      console.log('Something went wrong in services layer');
      throw {error};
    }

  }

}

module.exports = CityService;