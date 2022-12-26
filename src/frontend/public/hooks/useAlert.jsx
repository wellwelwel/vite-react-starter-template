import React, { useState, useCallback } from 'react';

const useAlert = () => {
   const [Alert, setAlert] = useState([]);

   const createAlert = useCallback((options = { status: '', title: '', messages: [] }, cb = () => {}) => {
      const { status, title } = options;
      const hasMessages = options?.messages?.length > 0 || false;

      const removeAlert = ({ target }) => {
         setAlert((previous) => {
            const toRemove = +target.dataset.key;
            const toKeep = previous.filter((alert) => +alert.key !== toRemove);

            return toKeep;
         });

         typeof cb === 'function' && cb();
      };

      document.activeElement.blur();

      setAlert((previous) => {
         const getKey = previous.length + 1;

         return [
            ...previous,
            <div className={status} key={getKey}>
               <h1>{title}</h1>
               {hasMessages
                  ? options.messages.map((message, id) => (
                       <p className='message' key={`msg-${id}`}>
                          {message}
                       </p>
                    ))
                  : null}
               <button onClick={removeAlert} data-order={getKey}>
                  Fechar
               </button>
            </div>,
         ];
      });
   }, []);

   return { Alert, setAlert: createAlert };
};

export default useAlert;
