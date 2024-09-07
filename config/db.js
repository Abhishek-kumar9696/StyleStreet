import mongoose from 'mongoose';
import colors from 'colors';

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to MONGODB database ${conn.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log(`error in MongoDB ${error}`.bgRed.white);
    }
};

export default connectDb;
