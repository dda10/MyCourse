const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/MyBlog_dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connect to MongoDB successfully!');
  } catch (error) {
    console.log('Error connecting to MongoDB!');
  }
}

module.exports = { connect };
