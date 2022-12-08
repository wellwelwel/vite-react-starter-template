import React, { createContext } from 'react';
import cx from '#helpers/doClass';

import useLoading from '#hooks/useLoading';
import useAlert from '#hooks/useAlert';

export const Context = createContext();

export const Storage = ({ children }) => {
   const { loading, setLoading } = useLoading();
   const { Alert, setAlert } = useAlert();

   const hasAlerts = Alert.length > 0;

   return (
      <Context.Provider value={{ Loading: setLoading, Alert: setAlert }}>
         {children}
         <div id='loading-modal' className={cx(loading?.show && 'active')}>
            {/* Loading Modal content here */}
         </div>
         <div id='alerts-modal' className={cx(hasAlerts && 'active')}>
            {
               /**
                * Alerts Modal content here
                *  -> The Alert content is inside './hooks/useAlert.jsx'
                */
               hasAlerts ? Alert.map((ShowAlert) => ShowAlert) : null
            }
         </div>
      </Context.Provider>
   );
};
