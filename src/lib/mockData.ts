import { Child, Parent, Alert, DashboardStats, ActivityStat } from '@/types';

export const mockParent: Parent = {
  id: '1',
  name: 'María González',
  email: 'maria@example.com',
  phone: '+34 666 777 888',
  children: ['child1', 'child2', 'child3'],
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
    name: 'Sofía',
    age: 8,
    profilePicture: '👧',
    qrCode: 'QR_SOFIA_123456',
    location: {
      latitude: 40.4168,
      longitude: -3.7038,
      timestamp: new Date(),
    },
    activityLevel: 'high',
    lastSeen: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
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
  {
    id: 'child2',
    name: 'Diego',
    age: 12,
    profilePicture: '👦',
    qrCode: 'QR_DIEGO_789012',
    location: {
      latitude: 40.4200,
      longitude: -3.7100,
      timestamp: new Date(),
    },
    activityLevel: 'medium',
    lastSeen: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
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
        id: 'zone3',
        name: 'Instituto',
        latitude: 40.4200,
        longitude: -3.7100,
        radius: 200,
        isActive: true,
      },
    ],
  },
  {
    id: 'child3',
    name: 'Emma',
    age: 5,
    profilePicture: '👧',
    qrCode: 'QR_EMMA_345678',
    location: {
      latitude: 40.4168,
      longitude: -3.7038,
      timestamp: new Date(),
    },
    activityLevel: 'low',
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
        id: 'zone4',
        name: 'Guardería',
        latitude: 40.4150,
        longitude: -3.7050,
        radius: 80,
        isActive: true,
      },
    ],
  },
];

export const mockAlerts: Alert[] = [
  {
    id: 'alert1',
    childId: 'child2',
    type: 'location',
    severity: 'medium',
    title: 'Diego salió de zona segura',
    message: 'Diego ha salido del área del instituto hace 10 minutos',
    timestamp: new Date(Date.now() - 10 * 60 * 1000),
    isRead: false,
    location: {
      latitude: 40.4250,
      longitude: -3.7150,
    },
  },
  {
    id: 'alert2',
    childId: 'child1',
    type: 'activity',
    severity: 'low',
    title: 'Sofía muy activa',
    message: 'Sofía ha estado muy activa hoy, ¡genial por el ejercicio!',
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
    isRead: false,
  },
  {
    id: 'alert3',
    childId: 'child3',
    type: 'safety',
    severity: 'high',
    title: 'Emma llegó segura',
    message: 'Emma ha llegado a casa de forma segura',
    timestamp: new Date(Date.now() - 2 * 60 * 1000),
    isRead: true,
  },
];

const mockWeeklyActivity: ActivityStat[] = [
  { date: '2024-06-01', steps: 8500, activeMinutes: 120, safeZoneTime: 480 },
  { date: '2024-06-02', steps: 9200, activeMinutes: 135, safeZoneTime: 510 },
  { date: '2024-06-03', steps: 7800, activeMinutes: 95, safeZoneTime: 450 },
  { date: '2024-06-04', steps: 10500, activeMinutes: 160, safeZoneTime: 520 },
  { date: '2024-06-05', steps: 8900, activeMinutes: 110, safeZoneTime: 480 },
  { date: '2024-06-06', steps: 9800, activeMinutes: 145, safeZoneTime: 500 },
  { date: '2024-06-07', steps: 8200, activeMinutes: 100, safeZoneTime: 460 },
];

export const mockDashboardStats: DashboardStats = {
  totalChildren: 3,
  activeAlerts: 2,
  safeChildren: 3,
  weeklyActivity: mockWeeklyActivity,
  alertsThisWeek: mockAlerts,
};

// QR Code examples
export const qrExamples = [
  {
    childId: 'child1',
    childName: 'Sofía',
    qrData: 'QR_SOFIA_123456',
    description: 'Código QR de Sofía para emergencias',
  },
  {
    childId: 'child2',
    childName: 'Diego',
    qrData: 'QR_DIEGO_789012',
    description: 'Código QR de Diego para emergencias',
  },
  {
    childId: 'child3',
    childName: 'Emma',
    qrData: 'QR_EMMA_345678',
    description: 'Código QR de Emma para emergencias',
  },
]; 