# 🛡️ Safely AI - Protección Familiar Inteligente

Una aplicación moderna de control parental desarrollada con Next.js que permite a los padres mantener seguros a sus hijos mediante escaneo QR, dashboard de actividad y sistema de alertas en tiempo real.

## ✨ Características Principales

### 🔍 Escaneo de Códigos QR
- **Códigos QR únicos** para cada hijo
- **Escáner de cámara** en tiempo real
- **Ejemplos interactivos** para demostración
- **Descarga de códigos QR** personalizados
- **Verificación instantánea** de ubicación

### 👨‍👩‍👧‍👦 Gestión de Hijos
- **Perfiles completos** con foto, edad y datos
- **Zonas seguras** configurables
- **Seguimiento de actividad** en tiempo real
- **Historial de ubicaciones**
- **Configuración personalizada** por hijo

### 📊 Dashboard Inteligente
- **Estadísticas en tiempo real** de todos los hijos
- **Resumen de actividad** semanal
- **Estado de seguridad** actualizado
- **Gráficos y métricas** visuales
- **Vista general** del estado familiar

### 🚨 Sistema de Alertas
- **Notificaciones instantáneas** por ubicación
- **Alertas de seguridad** automáticas
- **Priorización por severidad** (baja, media, alta, crítica)
- **Historial completo** de alertas
- **Gestión de notificaciones** personalizable

### ⚙️ Configuración Avanzada
- **Perfil de padres** editable
- **Preferencias de notificación** granulares
- **Configuración de alertas** por tipo
- **Métodos de contacto** múltiples (email, push, SMS)

## 🚀 Tecnologías Utilizadas

- **Next.js 15** - Framework React de última generación
- **TypeScript** - Tipado estático para mayor robustez
- **Tailwind CSS** - Diseño responsive y moderno
- **React Context** - Gestión de estado global
- **Lucide React** - Iconografía consistente
- **date-fns** - Manipulación de fechas
- **HTML5 QR Code** - Funcionalidad de escaneo QR

## 🎨 Diseño UX/UI

### Principios de Diseño
- **Responsive First** - Optimizado para todos los dispositivos
- **Accesible** - Diseñado para todas las edades
- **Intuitivo** - Navegación simple y clara
- **Moderno** - Interfaz limpia y atractiva
- **Consistente** - Patrones de diseño unificados

### Características de Usabilidad
- **Navegación móvil** optimizada
- **Iconos descriptivos** para fácil reconocimiento
- **Colores semánticos** para estados y alertas
- **Retroalimentación visual** inmediata
- **Carga rápida** y transiciones suaves

## 📱 Instalación y Uso

### Requisitos Previos
- Node.js 18 o superior
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [url-del-repositorio]
cd family-guard

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

### Desarrollo
```bash
# Servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm run start

# Ejecutar linter
npm run lint
```

## 🗂️ Estructura del Proyecto

```
family-guard/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── alerts/            # Página de alertas
│   │   ├── children/          # Gestión de hijos
│   │   ├── scan/              # Escáner QR
│   │   ├── settings/          # Configuración
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx           # Página de inicio
│   ├── components/            # Componentes React
│   │   ├── Dashboard/         # Componentes del dashboard
│   │   ├── Layout/            # Componentes de layout
│   │   └── QRScanner/         # Componentes de escaneo
│   ├── context/               # Context API
│   ├── lib/                   # Utilidades y datos mock
│   └── types/                 # Definiciones TypeScript
├── public/                    # Archivos estáticos
└── README.md                  # Documentación
```

## 🎯 Funcionalidades Implementadas

### ✅ Completadas
- [x] Dashboard principal con estadísticas
- [x] Sistema de navegación responsive
- [x] Gestión completa de hijos
- [x] Escaneo de códigos QR
- [x] Sistema de alertas
- [x] Configuración de usuario
- [x] Datos de ejemplo
- [x] Interfaz multiidioma (español)
- [x] Diseño responsive
- [x] Gestión de estado global

### 🔄 En Desarrollo
- [ ] Integración con backend real
- [ ] Geolocalización real
- [ ] Notificaciones push
- [ ] Base de datos persistente
- [ ] Autenticación de usuarios

### 🎯 Futuras Mejoras
- [ ] Chat familiar integrado
- [ ] Modo offline
- [ ] Exportación de reportes
- [ ] Integración con wearables
- [ ] IA para detección de patrones

## 🛠️ Personalización

### Agregar Nuevos Hijos
1. Navegar a "Mis Hijos"
2. Hacer clic en "Agregar Hijo"
3. Completar información básica
4. Seleccionar avatar
5. Configurar zonas seguras

### Configurar Alertas
1. Ir a "Configuración"
2. Seleccionar tipos de alertas
3. Configurar métodos de notificación
4. Ajustar preferencias de contacto

### Personalizar Dashboard
- Las estadísticas se actualizan automáticamente
- Los gráficos reflejan la actividad semanal
- Las alertas se muestran en tiempo real

## 🌐 Compatibilidad

### Navegadores Soportados
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Navegadores móviles modernos

### Dispositivos
- Smartphones (iOS/Android)
- Tablets
- Computadoras de escritorio
- Laptops

## 📄 Licencia

Este proyecto está desarrollado como demostración de una aplicación de control parental moderna. 

## 🤝 Contribución

Si deseas contribuir al proyecto:
1. Fork el repositorio
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Soporte

Para soporte o preguntas:
- Email: soporte@familyguard.com
- GitHub Issues: [Crear issue]

---

**Safely AI** - Manteniendo a las familias conectadas y seguras 🛡️💙
