const express = require('express');
const { PORT } = require('./config/serverConfig');

const app = express();


const serverStartAndSetup = () =>{
    app.listen(PORT,()=>{
        console.log(`Server running at ${PORT}`);
    })
}

serverStartAndSetup();
