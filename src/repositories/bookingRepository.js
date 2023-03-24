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
            await Booking.update(data,
                {
                    where:{
                        id
                    }
                });
            const booking = await Booking.findByPk(id);
            return booking
        } catch (error) {
            throw {error:'Error in Repo layer!'}
        }
    }
}


module.exports = BookingRepository;