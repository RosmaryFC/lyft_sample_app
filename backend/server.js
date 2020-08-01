//DEPENDENCIES
require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/test');


//GLOBAL VARIABLES
const PORT = process.env.PORT; 
const NODE_ENV = process.env.NODE_ENV;

// CORS SECURITY CONFIGURATIONS
const whitelist = ["http://localhost:3000/", "http://example2.com"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(
        new Error("Not allowed by CORS, domain needs to be added to whitelist")
      );
    }
  },
};

// MIDDLEWARE
NODE_ENV === "development" ? app.use(cors()) : app.use(cors(corsOptions));
app.use(express.json()); 
app.use(morgan("dev")); 


// ROUTES AND ROUTERS
app.use('/', router);


// LISTENER
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });