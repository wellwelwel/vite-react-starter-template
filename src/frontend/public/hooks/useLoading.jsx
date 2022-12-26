import { useState, useCallback } from 'react';

const useLoading = () => {
   const [loading, setLoading] = useState({
      show: false,
      persist: false,
   });

   const changeLoading = useCallback((options = { show: false, persist: false }, cb = () => {}) => {
      const { show } = options;
      const persist = options?.persist || false;

      if (show) document.activeElement.blur();

      // Show (Default and/or Force) || Hide (Force)
      if (show || (!show && persist)) setLoading({ show, persist });
      else if (!show && !persist)
         setLoading((previous) => {
            // Ignore if forced  show is active
            if (previous.persist) return previous;
            // Hide (Default)
            return { show, persist };
         });

      typeof cb === 'function' && cb();
   }, []);

   return { loading, setLoading: changeLoading };
};

export default useLoading;
