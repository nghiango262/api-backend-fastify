// Import our Controllers
const carController = require('../controllers/carController')

// Import our Controllers
const productController = require('../controllers/productController')

// Import Swagger documentation
const documentation = require('./documentation/carApi')

const routes = [

  //api Sản phẩm
  {
    method: 'GET',
    url: '/api/products',
    handler: productController.getProducts
  },
  {
    method: 'GET',
    url: '/api/products/:id',
    handler: productController.getSingleProduct
  },
  {
    method: 'POST',
    url: '/api/products',
    handler: productController.addProduct
  },
  {
    method: 'PUT',
    url: '/api/products/:id',
    handler: productController.updateProduct
  },
  {
    method: 'DELETE',
    url: '/api/products/:id',
    handler: productController.deleteProduct
  },

  ////////////////
  {
    method: 'GET',
    url: '/api/cars',
    handler: carController.getCars
  },
  {
    method: 'GET',
    url: '/api/cars/:id',
    handler: carController.getSingleCar
  },
  {
    method: 'POST',
    url: '/api/cars',
    handler: carController.addCar,
    //schema: documentation.addCarSchema
  },
  {
    method: 'PUT',
    url: '/api/cars/:id',
    handler: carController.updateCar
  },
  {
    method: 'DELETE',
    url: '/api/cars/:id',
    handler: carController.deleteCar
  },
]

module.exports = routes
