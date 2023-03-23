const { Booking } = require('../models/index');


class BookingRepository{
    async create(data){
        try {
            const booking = await Booking.create(data);
            return booking
        } catch (error) {
            throw {error:'Error in Repo layer!'}
        }
    }

    async update(data,id){
        try {
            const booking = await Booking.update(data,
                {
                    where:{
                        id
                    }
                })
            return booking
        } catch (error) {
            throw {error:'Error in Repo layer!'}
        }
    }
}


module.exports = BookingRepository;