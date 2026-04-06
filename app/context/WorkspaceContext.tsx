'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import type { Furniture, WorkspaceSetup, WorkspaceContextType } from '@/app/types/furniture';

type WorkspaceAction =
  | { type: 'SELECT_DESK'; payload: Furniture }
  | { type: 'SELECT_CHAIR'; payload: Furniture }
  | { type: 'ADD_ACCESSORY'; payload: Furniture }
  | { type: 'REMOVE_ACCESSORY'; payload: string }
  | { type: 'RESET' };

const initialState: WorkspaceSetup = {
  desk: null,
  chair: null,
  accessories: [],
};

function workspaceReducer(state: WorkspaceSetup, action: WorkspaceAction): WorkspaceSetup {
  switch (action.type) {
    case 'SELECT_DESK':
      return { ...state, desk: action.payload };
    case 'SELECT_CHAIR':
      return { ...state, chair: action.payload };
    case 'ADD_ACCESSORY':
      // Prevent duplicates
      if (state.accessories.some((acc) => acc.id === action.payload.id)) {
        return state;
      }
      return { ...state, accessories: [...state.accessories, action.payload] };
    case 'REMOVE_ACCESSORY':
      return {
        ...state,
        accessories: state.accessories.filter((acc) => acc.id !== action.payload),
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(undefined);

export function WorkspaceProvider({ children }: { children: ReactNode }) {
  const [setup, dispatch] = useReducer(workspaceReducer, initialState);

  const getTotalPrice = (): number => {
    let total = 0;
    if (setup.desk) total += setup.desk.price;
    if (setup.chair) total += setup.chair.price;
    setup.accessories.forEach((acc) => {
      total += acc.price;
    });
    return total;
  };

  const value: WorkspaceContextType = {
    setup,
    selectDesk: (desk) => dispatch({ type: 'SELECT_DESK', payload: desk }),
    selectChair: (chair) => dispatch({ type: 'SELECT_CHAIR', payload: chair }),
    addAccessory: (accessory) => dispatch({ type: 'ADD_ACCESSORY', payload: accessory }),
    removeAccessory: (accessoryId) => dispatch({ type: 'REMOVE_ACCESSORY', payload: accessoryId }),
    getTotalPrice,
    reset: () => dispatch({ type: 'RESET' }),
  };

  return <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>;
}

export function useWorkspace(): WorkspaceContextType {
  const context = useContext(WorkspaceContext);
  if (!context) {
    throw new Error('useWorkspace must be used within WorkspaceProvider');
  }
  return context;
}
