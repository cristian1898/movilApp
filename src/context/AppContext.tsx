import React, {
  createContext,
  useContext,
  ReactNode,
  useReducer,
  Dispatch,
} from 'react';
import {
  IAppContextActionView,
  IAppContextAlert,
  IAppContextFilter,
} from '../interfaces/globalInterface';
import { AuthorInterface } from '../interfaces/author';
import { BookInterface } from '../interfaces/book';

type AppState = {
  // Propiedades
  alert: IAppContextAlert | null;
  filter: IAppContextFilter | null;
  view: IAppContextActionView | null;
  author: AuthorInterface | null;
  listAuthors: Partial<AuthorInterface>[] | null;
  book: BookInterface | null;
};

// Type de acciones
export type AppAction =
  | { type: 'SET_ALERT'; payload: IAppContextAlert }
  | { type: 'SET_VIEW'; payload: IAppContextActionView }
  | { type: 'SET_AUTHOR'; payload: AuthorInterface }
  | { type: 'SET_LIST_AUTHORS'; payload: Partial<AuthorInterface>[] }
  | { type: 'SET_BOOK'; payload: BookInterface }
  | { type: 'SET_FILTER'; payload: IAppContextFilter };

// Typos del contexto
type AppContextType = {
  state: AppState;
  dispatch: Dispatch<AppAction>;
};

// Create context inital
const AppContext = createContext<AppContextType | undefined>(undefined);

// Definicion del proveedor
type AppContextProviderProps = { children: ReactNode };

const initialState: AppState = {
  alert: null,
  filter: null,
  view: null,
  author: null,
  book: null,
  listAuthors: null,
};

const appReducer = (state: AppState, act: AppAction): AppState => {
  switch (act.type) {
    case 'SET_ALERT':
      const { action, message } = act.payload;

      return {
        ...state,
        alert: { action, message },
      };
    case 'SET_VIEW':
      const value = act.payload;
      return { ...state, view: { ...value } };

    case 'SET_FILTER':
      const { author, id } = act.payload;
      return { ...state, filter: { author, id } };
    case 'SET_AUTHOR':
      const authorInfo = act.payload;
      return { ...state, author: { ...authorInfo } };
    case 'SET_LIST_AUTHORS':
      const authorList = act.payload;
      return { ...state, listAuthors: authorList };
    case 'SET_BOOK':
      const bookInfo = act.payload;
      return { ...state, book: { ...bookInfo } };

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

// Hook componentes
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
