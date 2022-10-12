import rateLimit from 'express-rate-limit';
import setTime from '../../helpers/setTime.js';

const setLimiter = (times = 100, perMilliseconds = '5s') => {
   return rateLimit({
      windowMs: setTime(perMilliseconds),
      max: times,
      standardHeaders: true,
      legacyHeaders: false,
      keyGenerator: () => {},
   });
};

const limiter = {
   /* By pages */
   main: setLimiter(10, '2s'),

   /* By size */
   small: setLimiter(35, '2s'),
   medium: setLimiter(25, '4s'),
   large: setLimiter(15, '8s'),

   /* Resources */
   images: setLimiter(60, '3s'),

   errors: setLimiter(4, '2s'),
   default: setLimiter(),
};

export default limiter;
