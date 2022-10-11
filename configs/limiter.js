import rateLimit from 'express-rate-limit';
import setTime from '../helpers/setTime.js';

const setLimiter = (times = 100, perMilliseconds = setTime('5s')) => {
   return rateLimit({
      windowMs: perMilliseconds,
      max: times,
      standardHeaders: true,
      legacyHeaders: false,
      keyGenerator: () => {},
   });
};

const limiter = {
   /* By pages */
   main: setLimiter(10, setTime('2s')),

   /* By size */
   small: setLimiter(35, setTime('2s')),
   medium: setLimiter(25, setTime('4s')),
   large: setLimiter(15, setTime('8s')),

   /* Resources */
   images: setLimiter(60, setTime('3s')),

   errors: setLimiter(4, setTime('2s')),
   default: setLimiter(),
};

export default limiter;
