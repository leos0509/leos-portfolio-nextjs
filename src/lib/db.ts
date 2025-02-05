import mongoose from 'mongoose';

const connectMongoDB = async () => {
    try {
        mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI?.toString() || '');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed', error);
    }
};

export default connectMongoDB;