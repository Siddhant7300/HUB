const { mongoose } = require("mongoose");
module.exports = async () => {
    const uri = `mongodb://localhost:27017/campus`;
    try {
        await mongoose.connect(uri);
        console.log("Connected To Mongo");
    } catch (e) {
        console.log("Unable to Connect to Database : " + e);
        process.exit(1);
    }
};
