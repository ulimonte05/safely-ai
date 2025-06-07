export interface Child {
  id: string;
  name: string;
  age: number;
  profilePicture?: string;
  qrCode: string;
  location?: {
    latitude: number;
    longitude: number;
    timestamp: Date;
  };
  activityLevel: 'low' | 'medium' | 'high';
  lastSeen: Date;
  safeZones: SafeZone[];
}

export interface Parent {
  id: string;
  name: string;
  email: string;
  phone: string;
  children: string[]; // Child IDs
  notificationPreferences: NotificationPreferences;
}

export interface SafeZone {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  radius: number; // meters
  isActive: boolean;
}

export interface Alert {
  id: string;
  childId: string;
  type: 'location' | 'safety' | 'activity' | 'schedule';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
  location?: {
    latitude: number;
    longitude: number;
  };
}

export interface NotificationPreferences {
  email: boolean;
  push: boolean;
  sms: boolean;
  locationAlerts: boolean;
  safetyAlerts: boolean;
  activityAlerts: boolean;
}

export interface ActivityStat {
  date: string;
  steps: number;
  activeMinutes: number;
  safeZoneTime: number;
}

export interface DashboardStats {
  totalChildren: number;
  activeAlerts: number;
  safeChildren: number;
  weeklyActivity: ActivityStat[];
  alertsThisWeek: Alert[];
} 