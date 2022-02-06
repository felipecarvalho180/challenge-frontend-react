import React, { useCallback, useState } from 'react';
import { LoadingContext } from './LoadingContext';

const LoadingProvider: React.FC = ({ children }) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const updateLoading = useCallback(
    (value: boolean) => {
      setLoading(value);
    },
    [isLoading],
  );

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        updateLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
