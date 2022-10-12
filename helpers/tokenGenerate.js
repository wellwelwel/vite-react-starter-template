import { randomBytes } from 'crypto';

const tokenGenerate = (size = 32) => randomBytes(size).toString('hex');

export default tokenGenerate;
