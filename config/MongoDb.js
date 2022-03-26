const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected - ${process.env.MONGO_NAME}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDatabase;
