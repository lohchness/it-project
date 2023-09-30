import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const connectionString = process.env.ATLAS_URI || "";

 // Connect to database
async function connect() {
    mongoose
      .connect(
          connectionString,
        {
          // Options to ensure that the connection is done properly
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
        }
      )
      .then(() => {
        console.log("Successfully connected to MongoDB Atlas!");
      })
      .catch((error) => {
        console.log("Unable to connect to MongoDB Atlas!");
        console.error(error);
      });
  }

export default connect;

// const client = new MongoClient(connectionString);

// let conn;
// try {
//     console.log("Connecting to MongoDB Atlas...");
//     conn = await client.connect();
// } catch (e) {
//     console.error(e);
// }

// let db = conn.db("sample_training");

// export default db;