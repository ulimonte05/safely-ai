'use client';

import Image from 'next/image';
import React, { useState, useCallback } from 'react';
import { 
  Shield, 
  QrCode, 
  Smartphone, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Users,
  Bell,
  Eye,
  MessageCircle,
  AlertTriangle,
  Phone,
  User,
  Play,
  Clock,
  CheckCheck,
  Brain
} from 'lucide-react';
import Link from 'next/link';

interface DemoData {
  childName: string;
  parentPhone: string;
  isComplete: boolean;
}

interface StepProps {
  onNext: () => void;
  onPrev?: () => void;
  demoData: DemoData;
  setDemoData: (data: DemoData) => void;
  isLoading: boolean;
}

// Componente WelcomeStep fuera del render principal
const WelcomeStep: React.FC<Pick<StepProps, 'onNext'>> = ({ onNext }) => (
  <div className="text-center space-y-8">
    <div className="space-y-4">
      <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
        <Shield className="h-12 w-12 text-primary" />
      </div>
      <h2 className="text-4xl font-bold text-foreground">
        Bienvenido a Safely AI
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Esta demo te mostrará cómo proteger a tu familia en menos de 2 minutos.
        Simularemos todo el proceso de configuración paso a paso.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <div className="glass-effect p-6 rounded-xl">
        <QrCode className="h-8 w-8 text-primary mb-4 mx-auto" />
        <h3 className="font-semibold text-foreground mb-2">Paso 1: QR</h3>
        <p className="text-sm text-muted-foreground">Escaneo simple del código</p>
      </div>
      <div className="glass-effect p-6 rounded-xl">
        <Smartphone className="h-8 w-8 text-primary mb-4 mx-auto" />
        <h3 className="font-semibold text-foreground mb-2">Paso 2: Setup</h3>
        <p className="text-sm text-muted-foreground">Configuración automática</p>
      </div>
      <div className="glass-effect p-6 rounded-xl">
        <Shield className="h-8 w-8 text-primary mb-4 mx-auto" />
        <h3 className="font-semibold text-foreground mb-2">Paso 3: Protección</h3>
        <p className="text-sm text-muted-foreground">Sistema activo</p>
      </div>
    </div>
    
    <button
      onClick={onNext}
      className="bg-primary text-primary-foreground px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold text-lg flex items-center space-x-3 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105"
    >
      <Play className="h-5 w-5" />
      <span>Comenzar Demo</span>
      <ArrowRight className="h-5 w-5" />
    </button>
  </div>
);

// Componente AddChildStep fuera del render principal
const AddChildStep: React.FC<StepProps> = ({ onNext, demoData, setDemoData, isLoading }) => {
  const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDemoData({ ...demoData, childName: e.target.value });
  }, [demoData, setDemoData]);

  const handleNext = useCallback(() => {
    if (demoData.childName && !isLoading) {
      onNext();
    }
  }, [demoData.childName, isLoading, onNext]);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto">
          <Users className="h-10 w-10 text-blue-400" />
        </div>
        <h2 className="text-3xl font-bold text-foreground">
          Agregar Hijo a Proteger
        </h2>
        <p className="text-lg text-muted-foreground">
          Configuremos el perfil de tu hijo para comenzar la protección
        </p>
      </div>

      <div className="glass-effect p-8 rounded-2xl space-y-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Nombre del hijo
          </label>
          <input
            type="text"
            value={demoData.childName}
            onChange={handleNameChange}
            placeholder="Ej: María, Diego, Ana..."
            className="w-full px-4 py-3 bg-accent/50 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <div className="bg-accent/30 p-4 rounded-xl border border-border/50">
          <div className="flex items-center space-x-3 mb-3">
            <Shield className="h-5 w-5 text-green-400" />
            <h3 className="font-semibold text-foreground">Privacidad Garantizada</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Los mensajes de tu hijo están completamente encriptados. Safely AI solo analiza patrones de riesgo sin leer el contenido específico.
          </p>
        </div>

        <button
          onClick={handleNext}
          disabled={!demoData.childName || isLoading}
          className="w-full bg-primary text-primary-foreground py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Configurando...</span>
            </>
          ) : (
            <>
              <span>Continuar</span>
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

// Componente QRScanStep fuera del render principal
const QRScanStep: React.FC<Pick<StepProps, 'onNext' | 'demoData' | 'isLoading'>> = ({ onNext, demoData, isLoading }) => (
  <div className="max-w-2xl mx-auto space-y-8">
    <div className="text-center space-y-4">
      <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
        <QrCode className="h-10 w-10 text-green-400" />
      </div>
      <h2 className="text-3xl font-bold text-foreground">
        Código QR para {demoData.childName}
      </h2>
      <p className="text-lg text-muted-foreground">
        Tu hijo debe escanear este código QR con su teléfono
      </p>
    </div>

    <div className="glass-effect p-8 rounded-2xl text-center space-y-6">
      {/* QR Code Simulation */}
      <div className="w-64 h-64 mx-auto bg-white rounded-2xl flex items-center justify-center border-4 border-gray-200">
        <div className="text-center space-y-4">
          <Image src="/qr-code.png" alt="QR Code" width={200} height={200} className="mx-auto" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3 justify-center text-green-400">
          <CheckCircle className="h-5 w-5" />
          <span>Código QR generado correctamente</span>
        </div>
        
      </div>

      <button
        onClick={onNext}
        disabled={isLoading}
        className="w-full bg-primary text-primary-foreground py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold flex items-center justify-center space-x-3"
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Procesando escaneo...</span>
          </>
        ) : (
          <>
            <CheckCheck className="h-5 w-5" />
            <span>Simular Escaneo Exitoso</span>
          </>
        )}
      </button>
    </div>
  </div>
);

// Componente ParentSetupStep fuera del render principal
const ParentSetupStep: React.FC<StepProps> = ({ onNext, demoData, setDemoData, isLoading }) => {
  const handlePhoneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDemoData({ ...demoData, parentPhone: e.target.value });
  }, [demoData, setDemoData]);

  const handleNext = useCallback(() => {
    if (demoData.parentPhone && !isLoading) {
      onNext();
    }
  }, [demoData.parentPhone, isLoading, onNext]);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto">
          <Phone className="h-10 w-10 text-purple-400" />
        </div>
        <h2 className="text-3xl font-bold text-foreground">
          Configurar Alertas Parentales
        </h2>
        <p className="text-lg text-muted-foreground">
          Ingresa tu número de teléfono para recibir alertas importantes
        </p>
      </div>

      <div className="glass-effect p-8 rounded-2xl space-y-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Número de teléfono del padre/madre
          </label>
          <input
            type="tel"
            value={demoData.parentPhone}
            onChange={handlePhoneChange}
            placeholder="+34 612 345 678"
            className="w-full px-4 py-3 bg-accent/50 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-foreground flex items-center space-x-2">
            <Bell className="h-5 w-5 text-primary" />
            <span>Tipos de alertas que recibirás</span>
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
              <AlertTriangle className="h-5 w-5 text-red-400" />
              <div>
                <span className="font-medium text-foreground">Emergencias</span>
                <p className="text-sm text-muted-foreground">Ciberacoso, grooming, amenazas</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
              <Eye className="h-5 w-5 text-orange-400" />
              <div>
                <span className="font-medium text-foreground">Contenido Peligroso</span>
                <p className="text-sm text-muted-foreground">Drogas, apuestas, contenido adulto</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <MessageCircle className="h-5 w-5 text-blue-400" />
              <div>
                <span className="font-medium text-foreground">Patrones Sospechosos</span>
                <p className="text-sm text-muted-foreground">Comportamientos anómalos de comunicación</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={!demoData.parentPhone || isLoading}
          className="w-full bg-primary text-primary-foreground py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Configurando alertas...</span>
            </>
          ) : (
            <>
              <span>Activar Sistema</span>
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

// Componente SystemActiveStep fuera del render principal
const SystemActiveStep: React.FC<Pick<StepProps, 'demoData'>> = ({ demoData }) => (
  <div className="max-w-4xl mx-auto space-y-8">
    <div className="text-center space-y-4">
      <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
        <CheckCircle className="h-12 w-12 text-green-400" />
      </div>
      <h2 className="text-4xl font-bold text-foreground">
        ¡Sistema Activo!
      </h2>
      <p className="text-xl text-muted-foreground">
        Safely AI está protegiendo a {demoData.childName} silenciosamente
      </p>
    </div>

    <div className="glass-effect p-8 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
            <Shield className="h-8 w-8 text-green-400" />
          </div>
          <h3 className="font-semibold text-foreground">Protección Activa</h3>
          <p className="text-sm text-muted-foreground">
            IA monitoreando 24/7 sin comprometer la privacidad
          </p>
        </div>
        
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto">
            <Bell className="h-8 w-8 text-blue-400" />
          </div>
          <h3 className="font-semibold text-foreground">Alertas Configuradas</h3>
          <p className="text-sm text-muted-foreground">
            Recibirás notificaciones en {demoData.parentPhone}
          </p>
        </div>
        
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto">
            <Eye className="h-8 w-8 text-purple-400" />
          </div>
          <h3 className="font-semibold text-foreground">100% Privado</h3>
          <p className="text-sm text-muted-foreground">
            Los mensajes permanecen encriptados y privados
          </p>
        </div>
      </div>

      <div className="bg-accent/30 p-6 rounded-xl border border-border/50 mb-6">
        <h3 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
          <CheckCircle className="h-5 w-5 text-green-400" />
          <span>Demo Completada - ¿Qué sigue?</span>
        </h3>
        <hr className="my-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span className="text-sm text-foreground">Setup completo en 2 minutos</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span className="text-sm text-foreground">Protección inmediata</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span className="text-sm text-foreground">Privacidad total</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span className="text-sm text-foreground">Alertas inteligentes</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="flex-1">
          <button className="w-full bg-primary text-primary-foreground py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold flex items-center justify-center space-x-3">
            <Shield className="h-5 w-5" />
            <span>Ver Dashboard Completo</span>
          </button>
        </Link>
        
        <Link href="/landing" className="flex-1">
          <button className="w-full bg-secondary text-secondary-foreground py-4 rounded-xl hover:bg-secondary/90 transition-all duration-300 font-semibold flex items-center justify-center space-x-3">
            <ArrowLeft className="h-5 w-5" />
            <span>Volver a Landing</span>
          </button>
        </Link>
      </div>
    </div>
  </div>
);

// Componente principal DemoPage
const DemoPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [demoData, setDemoData] = useState<DemoData>({
    childName: '',
    parentPhone: '',
    isComplete: false
  });

  const steps = [
    { id: 'welcome', title: 'Bienvenido a Safely AI Demo', subtitle: 'Vamos a simular todo el proceso de configuración' },
    { id: 'add-child', title: 'Agregar Hijo', subtitle: 'Configuremos el perfil de tu hijo' },
    { id: 'qr-scan', title: 'Escanear Código QR', subtitle: 'Tu hijo escanea este código en su teléfono' },
    { id: 'parent-setup', title: 'Configurar Padre', subtitle: 'Ingresa tu número para recibir alertas' },
    { id: 'system-active', title: 'Sistema Activo', subtitle: 'Safely AI está protegiendo a tu familia' }
  ];

  const nextStep = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsLoading(false);
      }, 1500);
    }
  }, [currentStep, steps.length]);

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeStep onNext={nextStep} />;
      case 1:
        return (
          <AddChildStep 
            onNext={nextStep} 
            demoData={demoData} 
            setDemoData={setDemoData} 
            isLoading={isLoading} 
          />
        );
      case 2:
        return (
          <QRScanStep 
            onNext={nextStep} 
            demoData={demoData} 
            isLoading={isLoading} 
          />
        );
      case 3:
        return (
          <ParentSetupStep 
            onNext={nextStep} 
            demoData={demoData} 
            setDemoData={setDemoData} 
            isLoading={isLoading} 
          />
        );
      case 4:
        return <SystemActiveStep demoData={demoData} />;
      default:
        return <WelcomeStep onNext={nextStep} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark py-12 px-4">
      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-foreground">Demo Safely AI</h1>
          <span className="text-muted-foreground">
            Paso {currentStep + 1} de {steps.length}
          </span>
        </div>
        
        <div className="w-full bg-accent/30 rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {renderCurrentStep()}
      </div>

      {/* Navigation (only show back button when not on first or last step) */}
      {currentStep > 0 && currentStep < steps.length - 1 && (
        <div className="fixed bottom-8 left-8">
          <button
            onClick={prevStep}
            className="bg-secondary text-secondary-foreground p-3 rounded-xl hover:bg-secondary/90 transition-all duration-300 shadow-lg"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default DemoPage;