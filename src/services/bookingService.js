const BookingRepository = require('../repositories/bookingRepository');
const axios = require('axios');
const { FLIGHT_SERVICE_PATH } = require('../config/serverConfig');

class BookingService{
    constructor(){
        this.bookingRepository = new BookingRepository();
    }

    async create(data){
        try {
            const flightId = data.flightId;
            const flightUrl = `${FLIGHT_SERVICE_PATH}/api/v1/flight/${flightId}`; 
            let flightDetails = await axios.get(flightUrl);
            flightDetails = flightDetails.data.data;
            const flightCost = flightDetails.price;
            if(flightDetails.totalSeats < data.noOfSeats) throw new Error('Insufficient Seats in the flight!');
            const totalCost = flightCost * data.noOfSeats;
            const bookingPayload = {...data,totalCost};
            let bookingDetails = await this.bookingRepository.create(bookingPayload);
            const remainingSeats = flightDetails.totalSeats - data.noOfSeats;
            await axios.patch(flightUrl,{totalSeats: remainingSeats});
            bookingDetails = await this.bookingRepository.update({status:"Booked"},bookingDetails.id);
            return bookingDetails
        } catch (error) {
            throw {error:'Error in Service Layer!'}
        }
    }
}

module.exports = BookingService;