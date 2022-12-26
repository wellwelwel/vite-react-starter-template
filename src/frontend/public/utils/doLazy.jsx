import React, { Suspense, lazy } from 'react';

const doLazy = (resolveLazy = () => {}, fallback = null) => {
   const Lazy = lazy(() => resolveLazy());

   return (
      <Suspense fallback={fallback}>
         <Lazy />
      </Suspense>
   );
};

export default doLazy;
