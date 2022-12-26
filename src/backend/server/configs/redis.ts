import 'dotenv/config';
import Redis from 'ioredis';

const isProduction = process.env.NODE_ENV === 'production';
const login = {
   host: isProduction ? process.env?.REDIS_HOST || '127.0.0.1' : '127.0.0.1',
   port: isProduction ? 6379 : (process?.env?.REDIS_PORT && 6379) || 6379,
   password: process.env?.REDIS_PASS || '',
};

const redisClient = new Redis(login);

export default redisClient;
