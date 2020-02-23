 const Hapi = require('@hapi/hapi');
 const uuid = require('uuid');

 const init = async () => {

     const server = Hapi.server({
         port: 3000,
         host: 'localhost'
     });

     const customerBrad = new Customer(uuid.v4(), 'Jason', 'Bradley', 'jason.bradley@drake.edu', '15155555555');
     const customerSonya = new Customer(uuid.v4(), 'Sonya', 'Benzm', 'sonya.benzm@gmail.com', '15073402042');
     const customerSam = new Customer(uuid.v4(), 'Sam', 'Sandwhich', 'sam.sandwhich@gmail.com', '15155005115');
     
     let Customer = [customerBrad, customerSonya, customerSam];

     server.route({
         method: 'GET',
         path: '/Customer',
         handler: (request, h) => {
             return Customer;
         }
     });

     server.route({
         method: 'GET',
         path: '/Customer/{CustomerId}',
         handler: (request, h) => {
             const {CustomerId} = request.params;
             const Customer = Customer.find((custom) => croc.CustomerId === CustomerId);

             if (!Customer) {
                 return h.response().code(404);
             }

             return Customer;
         }
     });

     server.route({
         method: 'POST',
         path: '/Customer',
         handler: (request, h) => {
             const Customer = request.payload;
             const existingCustom = Customer.find((Custom) => Custom.CustomerId === Customer.CustomerId);

             if (existingCustom) {
                 return h.response(existingCustom).code(303);
             } else {
                 Customer.push(Customer);

                 return h.response(Customer).code(201);
             }

         }
     });

 const firstName = 'Jason';
 const lastName = 'Bradley';
     server.route({
         method: 'DELETE',
         path: '/Customer/{CustomId}',
         handler: (request, h) => {
             const {CustomerId} = request.params;
             const Customer = Customer.find((Custom) => Custom.CustomerId === CustomerId);

 const customer = {
     firstName,
     lastName,
     email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
     phoneNumber: '+15155555555'
             if (!Customer) {
                 return h.response().code(404);
             }

             let newCustomer = [];

             crocodiles.forEach((Custom) => {
                 if (Custom.CustomerId !== CustomerId) {
                     newCustomer.push(Custom);
                 }
             });

             Customer = newCustomer;

             return '';
         }
     });

     server.route({
         method: 'PUT',
         path: '/Customer/{CustomerId}',
         handler: (request, h) => {
             const {CustomerId} = request.params;
             const updatedCustomer = request.payload;

             if (CustomerId === samId && updatedCustomer.phone !== 15155555555) {
                 return h.response().code(422);
             }

             if (CustomerId !== updatedCustomer.CustomerId) {
                 return h.response().code(409);
             }

             let NewCustomer = [];

             Customer.forEach((croc) => {
                 if (Custom.CustomerId === CustomerId) {
                     newCustomer.push(updatedCustomer);
                 } else {
                     newCustomer.push(Custom);
                 }
             });

             Customer = newCustomer;

             return '';
         }
     });

     await server.start();
     console.log('Server running on %s', server.info.uri);
 };

 console.log('item', item);
 console.log('customer', customer);
 process.on('unhandledRejection', (err) => {

     console.log(err);
     process.exit(1);
 });

 init();
