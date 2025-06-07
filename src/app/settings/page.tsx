'use client';

import React, { useState } from 'react';
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Moon, 
  Sun, 
  Smartphone, 
  Mail, 
  Lock,
  Save,
  Edit,
  Eye,
  EyeOff,
  Info,
  Zap,
  Database,
  HelpCircle
} from 'lucide-react';
import { useApp } from '@/context/AppContext';

const SettingsPage = () => {
  const { state, dispatch } = useApp();
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Usuario Principal',
    email: 'usuario@familyguard.com',
    phone: '+34 612 345 678'
  });

  const [notifications, setNotifications] = useState({
    emergencyAlerts: true,
    locationUpdates: true,
    dailyReports: false,
    systemUpdates: true,
    marketingEmails: false
  });

  const handleSaveProfile = () => {
    // Aquí se guardarían los datos del perfil
    setIsEditingProfile(false);
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="space-y-8">
      {/* Encabezado */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="p-3 rounded-2xl bg-primary/10">
            <Settings className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            Configuración
          </h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Personaliza tu experiencia en Safely AI y gestiona las preferencias y notificaciones.
        </p>
      </div>

      {/* Perfil del Usuario */}
      <div className="glass-effect rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <User className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Perfil de Usuario</h2>
          </div>
          <button
            onClick={() => setIsEditingProfile(!isEditingProfile)}
            className="p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            <Edit className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Nombre Completo
              </label>
              {isEditingProfile ? (
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-accent/50 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              ) : (
                <div className="px-4 py-3 bg-accent/30 border border-border rounded-xl text-foreground">
                  {profileData.name}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Correo Electrónico
              </label>
              {isEditingProfile ? (
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-accent/50 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              ) : (
                <div className="px-4 py-3 bg-accent/30 border border-border rounded-xl text-foreground">
                  {profileData.email}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Teléfono
              </label>
              {isEditingProfile ? (
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-accent/50 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              ) : (
                <div className="px-4 py-3 bg-accent/30 border border-border rounded-xl text-foreground">
                  {profileData.phone}
                </div>
              )}
            </div>

            {isEditingProfile && (
              <div className="flex space-x-3">
                <button
                  onClick={() => setIsEditingProfile(false)}
                  className="flex-1 px-4 py-3 bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/90 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveProfile}
                  className="flex-1 px-4 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Guardar</span>
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
              <User className="h-16 w-16 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Notificaciones */}
      <div className="glass-effect rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Bell className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Preferencias de Notificación</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-accent/30 rounded-xl border border-border/50">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-red-500/10">
                <Zap className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Alertas de Emergencia</h3>
                <p className="text-sm text-muted-foreground">Notificaciones críticas de seguridad</p>
              </div>
            </div>
            <button
              onClick={() => handleNotificationChange('emergencyAlerts', !notifications.emergencyAlerts)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                notifications.emergencyAlerts ? 'bg-primary' : 'bg-accent'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  notifications.emergencyAlerts ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-accent/30 rounded-xl border border-border/50">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Shield className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Actualizaciones de Ubicación</h3>
                <p className="text-sm text-muted-foreground">Cambios en la ubicación de tus hijos</p>
              </div>
            </div>
            <button
              onClick={() => handleNotificationChange('locationUpdates', !notifications.locationUpdates)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                notifications.locationUpdates ? 'bg-primary' : 'bg-accent'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  notifications.locationUpdates ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-accent/30 rounded-xl border border-border/50">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-green-500/10">
                <Mail className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Reportes Diarios</h3>
                <p className="text-sm text-muted-foreground">Resumen diario de actividades</p>
              </div>
            </div>
            <button
              onClick={() => handleNotificationChange('dailyReports', !notifications.dailyReports)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                notifications.dailyReports ? 'bg-primary' : 'bg-accent'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  notifications.dailyReports ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-accent/30 rounded-xl border border-border/50">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-orange-500/10">
                <Settings className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Actualizaciones del Sistema</h3>
                <p className="text-sm text-muted-foreground">Nuevas funciones y mejoras</p>
              </div>
            </div>
            <button
              onClick={() => handleNotificationChange('systemUpdates', !notifications.systemUpdates)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                notifications.systemUpdates ? 'bg-primary' : 'bg-accent'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  notifications.systemUpdates ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-accent/30 rounded-xl border border-border/50">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <Mail className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Emails de Marketing</h3>
                <p className="text-sm text-muted-foreground">Ofertas y consejos de seguridad</p>
              </div>
            </div>
            <button
              onClick={() => handleNotificationChange('marketingEmails', !notifications.marketingEmails)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                notifications.marketingEmails ? 'bg-primary' : 'bg-accent'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  notifications.marketingEmails ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Seguridad y Privacidad */}
      <div className="glass-effect rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Lock className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Seguridad y Privacidad</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button className="p-4 bg-accent/30 rounded-xl border border-border/50 hover:bg-accent/50 transition-all duration-300 text-left">
            <div className="flex items-center space-x-3 mb-2">
              <Lock className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Cambiar Contraseña</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Actualiza tu contraseña de acceso
            </p>
          </button>

          <button className="p-4 bg-accent/30 rounded-xl border border-border/50 hover:bg-accent/50 transition-all duration-300 text-left">
            <div className="flex items-center space-x-3 mb-2">
              <Smartphone className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Autenticación 2FA</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Configura la verificación en dos pasos
            </p>
          </button>

          <button className="p-4 bg-accent/30 rounded-xl border border-border/50 hover:bg-accent/50 transition-all duration-300 text-left">
            <div className="flex items-center space-x-3 mb-2">
              <Eye className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Privacidad de Datos</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Gestiona el uso de tus datos personales
            </p>
          </button>

          <button className="p-4 bg-accent/30 rounded-xl border border-border/50 hover:bg-accent/50 transition-all duration-300 text-left">
            <div className="flex items-center space-x-3 mb-2">
              <Database className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Exportar Datos</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Descarga una copia de tu información
            </p>
          </button>
        </div>
      </div>

      {/* Información de la App */}
      <div className="glass-effect rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Info className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Información de la App</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-accent/20 rounded-lg">
              <span className="text-muted-foreground">Versión</span>
              <span className="text-foreground font-semibold">2.1.4</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-accent/20 rounded-lg">
              <span className="text-muted-foreground">Última actualización</span>
              <span className="text-foreground font-semibold">15 Ene 2024</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-accent/20 rounded-lg">
              <span className="text-muted-foreground">Desarrollador</span>
              <span className="text-foreground font-semibold">Safely AI</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <button className="w-full p-3 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-colors flex items-center justify-center space-x-2">
              <HelpCircle className="h-4 w-4" />
              <span>Centro de Ayuda</span>
            </button>
            <button className="w-full p-3 bg-secondary/10 text-secondary-foreground rounded-xl hover:bg-secondary/20 transition-colors flex items-center justify-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Contactar Soporte</span>
            </button>
            <button className="w-full p-3 bg-accent/30 text-foreground rounded-xl hover:bg-accent/50 transition-colors flex items-center justify-center space-x-2">
              <Info className="h-4 w-4" />
              <span>Términos y Privacidad</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage; 