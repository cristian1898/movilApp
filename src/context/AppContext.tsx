import React, {
  createContext,
  useContext,
  ReactNode,
  useReducer,
  Dispatch,
} from 'react';
import {
  IAppContextAlert,
  IAppContextFilter,
} from '../interfaces/globalInterface';

// Definir el tipo para el estado
type AppState = {
  // Define las propiedades de tu estado aquí
  // Ejemplo:
  alert: IAppContextAlert | null;
  filter: IAppContextFilter | null;
};

// Definir las acciones disponibles
export type AppAction =
  | { type: 'SET_ALERT'; payload: IAppContextAlert }
  | { type: 'SET_FILTER'; payload: IAppContextFilter };

// Definir el tipo del contexto
type AppContextType = {
  state: AppState;
  dispatch: Dispatch<AppAction>;
};

// Crear el contexto inicializado con un objeto vacío
const AppContext = createContext<AppContextType | undefined>(undefined);

// Definir el proveedor del contexto
type AppContextProviderProps = { children: ReactNode };

const initialState: AppState = {
  alert: null,
  filter: null,
};

const appReducer = (state: AppState, act: AppAction): AppState => {
  switch (act.type) {
    case 'SET_ALERT':
      const { action, message } = act.payload;

      return {
        ...state,
        alert: { action, message },
      };
    case 'SET_FILTER':
      const { author, id } = act.payload;
      return { ...state, filter: { author, id } };
    default:
      return state;
  }
};

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Crear un hook personalizado para acceder al contexto
const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      'useAppContext debe ser utilizado dentro de un AppContextProvider',
    );
  }
  return context;
};

export { AppContextProvider, useAppContext };
