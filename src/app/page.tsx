'use client';

import { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import DashboardHome from '@/components/Dashboard/DashboardHome';
import { mockParent, mockChildren, mockAlerts, mockDashboardStats } from '@/lib/mockData';

export default function Home() {
  const { state, dispatch } = useApp();

  useEffect(() => {
    // Initialize mock data if not already loaded
    if (!state.currentParent) {
      dispatch({ type: 'SET_PARENT', payload: mockParent });
    }
    
    if (state.children.length === 0) {
      mockChildren.forEach(child => {
        dispatch({ type: 'ADD_CHILD', payload: child });
      });
    }
    
    if (state.alerts.length === 0) {
      mockAlerts.forEach(alert => {
        dispatch({ type: 'ADD_ALERT', payload: alert });
      });
    }
    
    if (!state.dashboardStats) {
      dispatch({ type: 'SET_DASHBOARD_STATS', payload: mockDashboardStats });
    }
  }, [state.currentParent, state.children.length, state.alerts.length, state.dashboardStats, dispatch]);

  return <DashboardHome />;
}
