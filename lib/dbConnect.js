import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

async function dbConnect() {
  //   if (cached.conn) {
  //     return cached.conn;
  //   }

  //   if (!cached.promise) {
  //     // const opts = {
  //     //   useNewUrlParser: true,
  //     //   useUnifiedTopology: true,
  //     //   bufferCommands: false,

  //     // };

  //     cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
  //       return mongoose;
  //     });
  //   }
  //   cached.conn = await cached.promise;
  //   console.log(cached.conn, cached.promise);
  //   return cached.conn;
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.log(error.message);
  }
}

export default dbConnect;
