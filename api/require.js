const data = require('../test.js');
module.exports = async (request, response) => {
    response.status(200).send({ data: data });
};