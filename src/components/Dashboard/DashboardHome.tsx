'use client';

import React from 'react';
import { 
  Users, 
  Shield, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  MapPin,
  Activity,
  TrendingUp,
  Eye,
  Zap
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

const DashboardHome = () => {
  const { state } = useApp();
  
  const totalChildren = state.children.length;
  const activeChildren = state.children.filter(child => child.location).length;
  const totalAlerts = state.alerts.length;
  const unreadAlerts = state.alerts.filter(alert => !alert.isRead).length;
  const recentAlerts = state.alerts.slice(0, 3);

  const stats = [
    {
      title: 'Hijos Registrados',
      value: totalChildren,
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
      bg: 'bg-blue-500/10',
      iconColor: 'text-blue-400'
    },
    {
      title: 'Hijos Activos',
      value: activeChildren,
      icon: Shield,
      gradient: 'from-green-500 to-emerald-500',
      bg: 'bg-green-500/10',
      iconColor: 'text-green-400'
    },
    {
      title: 'Alertas Totales',
      value: totalAlerts,
      icon: AlertTriangle,
      gradient: 'from-orange-500 to-red-500',
      bg: 'bg-orange-500/10',
      iconColor: 'text-orange-400'
    },
    {
      title: 'Alertas Sin Leer',
      value: unreadAlerts,
      icon: Eye,
      gradient: 'from-red-500 to-pink-500',
      bg: 'bg-red-500/10',
      iconColor: 'text-red-400'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'text-green-400 bg-green-500/10';
      case 'medium':
        return 'text-yellow-400 bg-yellow-500/10';
      case 'high':
        return 'text-orange-400 bg-orange-500/10';
      case 'critical':
        return 'text-red-400 bg-red-500/10';
      default:
        return 'text-muted-foreground bg-accent';
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

  return (
    <div className="space-y-8">
      {/* Encabezado */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="p-3 rounded-2xl bg-primary/10">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            Safely AI
          </h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Dashboard principal de control parental. Mantén a tu familia segura con monitoreo en tiempo real.
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <Activity className="h-4 w-4 text-green-400" />
          <span>Sistema activo y funcionando</span>
        </div>
      </div>

      {/* Estadísticas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm font-medium">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-4 rounded-xl ${stat.bg} group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-6 w-6 ${stat.iconColor}`} />
                </div>
              </div>
              <div className={`h-1 w-full bg-gradient-to-r ${stat.gradient} rounded-full mt-4 opacity-60`} />
            </div>
          );
        })}
      </div>

      {/* Estado de los hijos */}
      <div className="glass-effect rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Users className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Estado de los Hijos</h2>
        </div>
        
        {state.children.length === 0 ? (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground text-lg">
              No hay hijos registrados aún
            </p>
            <p className="text-muted-foreground text-sm">
              Ve a "Mis Hijos" para agregar tu primer hijo
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {state.children.map((child) => (
              <div
                key={child.id}
                className="bg-accent/30 rounded-xl p-4 hover:bg-accent/50 transition-colors border border-border/50"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {child.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{child.name}</h3>
                    <p className="text-sm text-muted-foreground">{child.age} años</p>
                  </div>
                  <div className="ml-auto">
                    {child.location ? (
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    ) : (
                      <Clock className="h-5 w-5 text-orange-400" />
                    )}
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {child.location ? 'Ubicación conocida' : 'Ubicación desconocida'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      Visto {formatDistanceToNow(child.lastSeen, { 
                        addSuffix: true, 
                        locale: es 
                      })}
                    </span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Nivel de actividad</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3].map((level) => (
                        <div
                          key={level}
                          className={`w-2 h-2 rounded-full ${
                            level <= (child.activityLevel === 'high' ? 3 : child.activityLevel === 'medium' ? 2 : 1)
                              ? 'bg-primary'
                              : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Alertas recientes */}
      <div className="glass-effect rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Alertas Recientes</h2>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {unreadAlerts} sin leer
            </span>
          </div>
        </div>

        {recentAlerts.length === 0 ? (
          <div className="text-center py-12">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground text-lg">
              No hay alertas recientes
            </p>
            <p className="text-muted-foreground text-sm">
              Tu familia está segura por ahora
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {recentAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`bg-accent/30 rounded-xl p-4 border border-border/50 ${
                  !alert.isRead ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                        {getSeverityText(alert.severity)}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {state.children.find(c => c.id === alert.childId)?.name || 'Hijo desconocido'}
                      </span>
                    </div>
                    <p className="text-foreground font-medium mb-1">
                      {alert.title}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {alert.message}
                    </p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-xs text-muted-foreground">
                      {formatDistanceToNow(alert.timestamp, { 
                        addSuffix: true, 
                        locale: es 
                      })}
                    </p>
                    {!alert.isRead && (
                      <div className="flex items-center justify-end">
                        <Zap className="h-3 w-3 text-primary animate-pulse" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHome; 