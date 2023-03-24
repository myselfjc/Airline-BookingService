const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    FLIGHT_SERVICE_PATH: process.env.FLIGHT_SERVICE_PATH,
    SYNC_DB: process.env.SYNC_DB
}