import { createContext, useContext, useEffect, useState } from 'react';

export const RoutesContext = createContext<Context | null>(null);

export const RoutesProvider: React.FC = ({ children }) => {
  const [key, setKey] = useState<0 | 1>(0);

  const handleKey = () => setKey((prev) => (prev === 1 ? 0 : 1));

  const { pathname } = window.location;

  const pushState: HandleState = (path, state = null) => {
    const defPath = path.charAt(0) !== '/' ? `/${path}` : path;

    if (pathname !== defPath) {
      window.history.pushState(state, '', defPath);
      handleKey();
    }
  };

  const replaceState: HandleState = (path, state = null) => {
    const defPath = path.charAt(0) !== '/' ? `/${path}` : path;

    if (pathname !== defPath) {
      window.history.replaceState(state, '', defPath);
      handleKey();
    }
  };

  useEffect(() => {
    window.addEventListener('popstate', handleKey);

    return () => window.removeEventListener('popstate', handleKey);
  }, []);

  const { state } = window.history;

  const value: Context = {
    pushState,
    replaceState,
    state,
    pathname,
    key,
  };

  return (
    <RoutesContext.Provider value={value}>{children}</RoutesContext.Provider>
  );
};

export const useRoutes = () => {
  const context = useContext(RoutesContext);
  return context;
};

export interface Context {
  pushState: HandleState;
  replaceState: HandleState;
  state: any;
  pathname: string;
  key: 0 | 1;
}

interface HandleState {
  (path: string, state?: any): void;
}
