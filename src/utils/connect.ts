import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

export default async () => {
    const dbUri = config.get<string>('dbUri');

    try {
        await mongoose.connect(dbUri);
        logger.info('DB is connected');

    } catch (error) {
        console.error('Connection to db has failed');
        process.exit(1);
    }
}