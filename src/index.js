const express = require('express');
const { PORT, SYNC_DB } = require('./config/serverConfig');
const routes = require('./routes/routes');
const db = require('./models/index');


const app = express();


const serverStartAndSetup = () =>{
    app.use(express.json());

    app.use('/bookingService/api/v1',routes);
    
    app.listen(PORT,()=>{
        if(SYNC_DB){
            db.sequelize.sync({alter:true});
        } 
        console.log(`Server running at ${PORT}`);
    })
}

serverStartAndSetup();
