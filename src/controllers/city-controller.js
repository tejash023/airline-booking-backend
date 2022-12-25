const { CityServices, CityServices } = require('../services/index');

const cityServices = new CityServices();

const create = async (req, res) => {

  try{
    const city = await cityServices.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: 'City added successfully',
      err: {}
    })

  }catch(error){
    console.log(error);
    return res.status(500).json({
      data:{},
      success: false,
      message: 'Error in adding city',
      err: error.message
    })
  }

}

const destroy = async (req, res) => {

  try{
    const response = await cityServices.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: 'City deleted successfully',
      err: {}
    })

  }catch(error){
    console.log(error);
    return res.status(500).json({
      data:{},
      success: false,
      message: 'Error in deleting city',
      err: error.message
    })
  }
  
}

const update = async (req, res) => {

  try{
    const city = await cityServices.updateCity(req.params.id, req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: 'City updated successfully',
      err: {}
    })

  }catch(error){
    console.log(error);
    return res.status(500).json({
      data:{},
      success: false,
      message: 'Error in updating city',
      err: error.message
    })
  }
  
}

const get = async (req, res) => {

  try{
    const city = await cityServices.getCity(req.params.id);
    return res.status(201).json({
      data: city,
      success: true,
      message: 'City fetched successfully',
      err: {}
    })

  }catch(error){
    console.log(error);
    return res.status(500).json({
      data:{},
      success: false,
      message: 'Error in fetching city',
      err: error.message
    })
  }
  
}

module.exports = {
  create,
  destroy,
  update,
  get
}