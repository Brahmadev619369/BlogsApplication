const mongoose = require("mongoose");

async function ConnectToMongo(url) {
    try {
        await mongoose.connect(url);
        console.log("Connected to DB");
    } catch (error) {
        console.error("Failed to Connect DB", error);
    }
}

module.exports = ConnectToMongo;


// const mongoose = require("mongoose");

// async function ConnectToMongo(url) {
//     try {
//         await mongoose.connect(url, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Connected to DB");
//     } catch (error) {
//         console.error("Failed to Connect DB", error);
//     }
// }

// module.exports = ConnectToMongo;