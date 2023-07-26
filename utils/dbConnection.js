import mongoose from 'mongoose'

export async function dbConnect() {
    
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise();
    }
    return await mongoose.connect(process.env.MONGODB_URI);
}