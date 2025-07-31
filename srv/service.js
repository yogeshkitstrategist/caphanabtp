const cds = require('@sap/cds');

const { stringify } = require('querystring');
const { serialize } = require('v8');

module.exports = cds.service.impl(async function(srv) {
srv.on('printhelloworld', req => {
      console.log(req.data.input); //print the request coming from server
      return '$(req.data.input) world'   
      })

srv.on('addition', req => {
      console.log(req.data)
      let result = req.data.num1 + req.data.num2;
       return result 
                        }

     )

     srv.on('multiply', req => {
      console.log(req.data)
      let result = req.data.num1 * req.data.num2;
       return result 
                        })

     srv.on('MyFucntion', req => {

    let result = {}
    if(req.data.category == 1) {
      result.product = 'BMW',
      result.price   = '1200 USD',
      result.location = 'New DELhi'
     } else {
             result.product = 'Audi'
             result.stock = 120,
             result.priceArray = [
                  {
                        "Price": 4567,
                        "discount": "20 %"
                  }
             ]

    
             } 
             console.log(result)
             return result;
            }

//    } 
//}

     )


     
})

