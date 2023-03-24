const BookingService = require('../services/bookingService');

const bookingService = new BookingService();

exports.create = async (req,res,next) =>{
    try {
        const response = await bookingService.create(req.body);
        res.status(200).json({
            status:'Success',
            message:'Booking created successfully!',
            data:response
        })
    } catch (error) {
        res.status(404).json({
            status:'Failed',
            message:'Something went wrong while creating booking',
            error
        })
    }
}