const times = {
   s: (time) => parseInt(time) * 1000,
   m: (time) => parseInt(time) * 1000 * 60,
   h: (time) => parseInt(time) * 1000 * 60 * 60,
};

const setTime = (time) => {
   if (+time) return time;

   const splitTime = time.match(/^([0-9]+)(h|m|s)$/);
   const number = splitTime?.[1];
   const method = splitTime?.[2];

   if (!number || !method)
      throw new Error(`setTime("${time}"): Time format invalid\nExamples of using: "5s", "5m", "5h"`);

   return times[String(method).toLowerCase()](number);
};

export default setTime;
