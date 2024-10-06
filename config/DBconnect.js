const mongoose=require('mongoose');

const DBconnection=mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((conn) => console.log(`The database is connected to ${conn.connection.host}`))
  .catch((err) => console.error('Database connection failed:', err));

  module.exports=DBconnection;