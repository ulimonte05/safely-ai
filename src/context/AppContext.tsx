'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Child, Parent, Alert, DashboardStats } from '@/types';

interface AppState {
  currentParent: Parent | null;
  children: Child[];
  alerts: Alert[];
  dashboardStats: DashboardStats | null;
  isLoading: boolean;
}

type AppAction =
  | { type: 'SET_PARENT'; payload: Parent }
  | { type: 'ADD_CHILD'; payload: Child }
  | { type: 'UPDATE_CHILD'; payload: Child }
  | { type: 'REMOVE_CHILD'; payload: string }
  | { type: 'ADD_ALERT'; payload: Alert }
  | { type: 'MARK_ALERT_READ'; payload: string }
  | { type: 'SET_DASHBOARD_STATS'; payload: DashboardStats }
  | { type: 'SET_LOADING'; payload: boolean };

const initialState: AppState = {
  currentParent: null,
  children: [],
  alerts: [],
  dashboardStats: null,
  isLoading: false,
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_PARENT':
      return { ...state, currentParent: action.payload };
    case 'ADD_CHILD':
      return { ...state, children: [...state.children, action.payload] };
    case 'UPDATE_CHILD':
      return {
        ...state,
        children: state.children.map(child =>
          child.id === action.payload.id ? action.payload : child
        ),
      };
    case 'REMOVE_CHILD':
      return {
        ...state,
        children: state.children.filter(child => child.id !== action.payload),
      };
    case 'ADD_ALERT':
      return { ...state, alerts: [action.payload, ...state.alerts] };
    case 'MARK_ALERT_READ':
      return {
        ...state,
        alerts: state.alerts.map(alert =>
          alert.id === action.payload ? { ...alert, isRead: true } : alert
        ),
      };
    case 'SET_DASHBOARD_STATS':
      return { ...state, dashboardStats: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp debe ser usado dentro de AppProvider');
  }
  return context;
}; 