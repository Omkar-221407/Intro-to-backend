import mongoose from 'mongoose';

/**
 * Connect to MongoDB Database
 * Supports MongoDB Atlas cloud cluster and local MongoDB connections.
 */
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
      console.warn('⚠️  WARNING: MONGO_URI is not defined in your .env file.');
      console.warn('👉 Please set MONGO_URI in .env to your MongoDB Atlas connection string.');
      console.warn('   Example: MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/backendTutorial?retryWrites=true&w=majority\n');
      return;
    }

    const conn = await mongoose.connect(mongoURI);

    console.log(`✅ MongoDB Connected Successfully: ${conn.connection.host}`);
    console.log(`📦 Database Name: ${conn.connection.name}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.error('💡 Tip: Verify your MongoDB Atlas username, password, and IP Whitelist (allow 0.0.0.0/0).');
    // We do not exit process immediately so server can still serve health check / helpful messages
  }
};

export default connectDB;
