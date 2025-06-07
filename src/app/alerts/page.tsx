'use client';

import React from 'react';
import { 
  AlertTriangle, 
  Shield, 
  CheckCircle, 
  Clock, 
  Eye, 
  EyeOff,
  Filter,
  Search,
  Bell,
  Zap,
  X
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { Alert } from '@/types';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

const AlertsPage = () => {
  const { state, dispatch } = useApp();

  const handleMarkAsRead = (alertId: string) => {
    dispatch({ type: 'MARK_ALERT_READ', payload: alertId });
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'location':
        return Shield;
      case 'safety':
        return AlertTriangle;
      case 'activity':
        return Clock;
      default:
        return Bell;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'text-green-400 bg-green-500/10 border-green-500/20';
      case 'medium':
        return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'high':
        return 'text-orange-400 bg-orange-500/10 border-orange-500/20';
      case 'critical':
        return 'text-red-400 bg-red-500/10 border-red-500/20';
      default:
        return 'text-muted-foreground bg-accent border-border';
    }
  };

  const getSeverityText = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'Baja';
      case 'medium':
        return 'Media';
      case 'high':
        return 'Alta';
      case 'critical':
        return 'Crítica';
      default:
        return 'Desconocida';
    }
  };

  const unreadAlerts = state.alerts.filter(alert => !alert.isRead);
  const readAlerts = state.alerts.filter(alert => alert.isRead);

  return (
    <div className="space-y-8">
      {/* Encabezado */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="p-3 rounded-2xl bg-primary/10">
            <AlertTriangle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            Centro de Alertas
          </h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Administra todas las notificaciones y alertas de seguridad de tu familia en un solo lugar.
        </p>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">
                Total de Alertas
              </p>
              <p className="text-3xl font-bold text-foreground">
                {state.alerts.length}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-blue-500/10">
              <Bell className="h-6 w-6 text-blue-400" />
            </div>
          </div>
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-4 opacity-60" />
        </div>

        <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">
                Sin Leer
              </p>
              <p className="text-3xl font-bold text-foreground">
                {unreadAlerts.length}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-red-500/10">
              <EyeOff className="h-6 w-6 text-red-400" />
            </div>
          </div>
          <div className="h-1 w-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full mt-4 opacity-60" />
        </div>

        <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">
                Leídas
              </p>
              <p className="text-3xl font-bold text-foreground">
                {readAlerts.length}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-green-500/10">
              <CheckCircle className="h-6 w-6 text-green-400" />
            </div>
          </div>
          <div className="h-1 w-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-4 opacity-60" />
        </div>
      </div>

      {/* Alertas sin leer */}
      {unreadAlerts.length > 0 && (
        <div className="glass-effect rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-6">
            <EyeOff className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Alertas Sin Leer</h2>
            <span className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-sm font-medium">
              {unreadAlerts.length}
            </span>
          </div>

          <div className="space-y-4">
            {unreadAlerts.map((alert) => {
              const IconComponent = getAlertIcon(alert.type);
              const child = state.children.find(c => c.id === alert.childId);
              
              return (
                <div
                  key={alert.id}
                  className="bg-accent/30 rounded-xl p-4 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${getSeverityColor(alert.severity)}`}>
                            {getSeverityText(alert.severity)}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {child?.name || 'Hijo desconocido'}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-foreground font-semibold text-lg mb-2">
                        {alert.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {alert.message}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">
                          {formatDistanceToNow(alert.timestamp, { 
                            addSuffix: true, 
                            locale: es 
                          })}
                        </p>
                        <div className="flex items-center justify-end mt-1">
                          <Zap className="h-3 w-3 text-primary animate-pulse" />
                        </div>
                      </div>
                      <button
                        onClick={() => handleMarkAsRead(alert.id)}
                        className="p-2 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors"
                        title="Marcar como leída"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Todas las alertas */}
      <div className="glass-effect rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Bell className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Historial de Alertas</h2>
        </div>

        {state.alerts.length === 0 ? (
          <div className="text-center py-12">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground text-lg mb-2">
              No hay alertas registradas
            </p>
            <p className="text-muted-foreground text-sm">
              Tu familia está completamente segura por ahora
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {state.alerts.map((alert) => {
              const IconComponent = getAlertIcon(alert.type);
              const child = state.children.find(c => c.id === alert.childId);
              
              return (
                <div
                  key={alert.id}
                  className={`bg-accent/20 rounded-xl p-4 border border-border/50 hover:bg-accent/30 transition-all duration-300 ${
                    !alert.isRead ? 'ring-2 ring-primary/20' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 rounded-lg bg-accent/50">
                          <IconComponent className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${getSeverityColor(alert.severity)}`}>
                            {getSeverityText(alert.severity)}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {child?.name || 'Hijo desconocido'}
                          </span>
                          {alert.isRead && (
                            <CheckCircle className="h-4 w-4 text-green-400" />
                          )}
                        </div>
                      </div>
                      <h3 className="text-foreground font-medium mb-1">
                        {alert.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {alert.message}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">
                        {formatDistanceToNow(alert.timestamp, { 
                          addSuffix: true, 
                          locale: es 
                        })}
                      </p>
                      {!alert.isRead && (
                        <button
                          onClick={() => handleMarkAsRead(alert.id)}
                          className="mt-2 p-1 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors"
                          title="Marcar como leída"
                        >
                          <Eye className="h-3 w-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AlertsPage; 