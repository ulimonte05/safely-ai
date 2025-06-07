import { Child, Parent, Alert, DashboardStats, ActivityStat } from '@/types';

export const mockParent: Parent = {
  id: '1',
  name: 'Carlos Fernández',
  email: 'carlos.fernandez@gmail.com',
  phone: '+54 11 4567 8910',
  children: ['child1'],
  notificationPreferences: {
    email: true,
    push: true,
    sms: false,
    locationAlerts: true,
    safetyAlerts: true,
    activityAlerts: true,
  },
};

export const mockChildren: Child[] = [
  {
    id: 'child1',
    name: 'Mi Hijo',
    age: 10,
    profilePicture: '👧',
    qrCode: 'QR_DEMO_123456',
    location: {
      latitude: 40.4168,
      longitude: -3.7038,
      timestamp: new Date(),
    },
    activityLevel: 'medium',
    lastSeen: new Date(Date.now() - 2 * 60 * 1000), // 2 minutes ago
    safeZones: [
      {
        id: 'zone1',
        name: 'Casa',
        latitude: 40.4168,
        longitude: -3.7038,
        radius: 100,
        isActive: true,
      },
      {
        id: 'zone2',
        name: 'Colegio',
        latitude: 40.4200,
        longitude: -3.7100,
        radius: 150,
        isActive: true,
      },
    ],
  },
];

export const mockAlerts: Alert[] = [
  {
    id: 'alert1',
    childId: 'child1',
    type: 'safety',
    severity: 'low',
    title: 'Sistema Safely AI Activado',
    message: 'La protección para "Mi Hijo" se ha configurado correctamente. Safely AI está monitoreando de forma segura.',
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    isRead: false,
  },
  {
    id: 'alert2',
    childId: 'child1',
    type: 'activity',
    severity: 'low',
    title: 'Configuración Completa',
    message: 'Tu hijo ha sido agregado exitosamente al sistema de protección familiar.',
    timestamp: new Date(Date.now() - 10 * 60 * 1000),
    isRead: true,
  },
];

const mockWeeklyActivity: ActivityStat[] = [
  { date: '2024-01-20', steps: 0, activeMinutes: 0, safeZoneTime: 0 },
  { date: '2024-01-21', steps: 0, activeMinutes: 0, safeZoneTime: 0 },
  { date: '2024-01-22', steps: 0, activeMinutes: 0, safeZoneTime: 0 },
  { date: '2024-01-23', steps: 0, activeMinutes: 0, safeZoneTime: 0 },
  { date: '2024-01-24', steps: 0, activeMinutes: 0, safeZoneTime: 0 },
  { date: '2024-01-25', steps: 3200, activeMinutes: 45, safeZoneTime: 420 },
  { date: '2024-01-26', steps: 4100, activeMinutes: 52, safeZoneTime: 480 },
];

export const mockDashboardStats: DashboardStats = {
  totalChildren: 1,
  activeAlerts: 1,
  safeChildren: 1,
  weeklyActivity: mockWeeklyActivity,
  alertsThisWeek: mockAlerts,
};

// QR Code examples
export const qrExamples = [
  {
    childId: 'child1',
    childName: 'Mi Hijo',
    qrData: 'QR_DEMO_123456',
    description: 'Código QR de Mi Hijo para emergencias',
  },
]; 