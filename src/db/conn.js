const mongoose = require("mongoose"); // Import the mongoose module

// Set up a connection to the database
mongoose.connect("mongodb://127.0.0.1:27017/userRegistration", {
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`connection failed`)
})

