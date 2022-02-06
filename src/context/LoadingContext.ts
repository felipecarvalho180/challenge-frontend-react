import { createContext } from 'react';

interface LoadingContextInterface {
  isLoading: boolean;
  updateLoading: (loading: boolean) => void;
}

export const LoadingContext = createContext({} as LoadingContextInterface);

LoadingContext.displayName = 'LoadingContext';
