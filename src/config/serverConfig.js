const dotenv = require('dotenv');
dotenv.config();


// console.log(process.env.PORT);

module.export = {
    PORT: process.env.PORT
};

// export default const PORT = process.env.PORT;