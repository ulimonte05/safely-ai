'use client';

import React, { useState } from 'react';
import { 
  Shield, 
  Eye, 
  Bell, 
  Lock, 
  Smartphone, 
  MessageCircle, 
  Phone, 
  AlertTriangle,
  CheckCircle,
  Star,
  Users,
  QrCode,
  ArrowRight,
  Play,
  Zap,
  Heart,
  Brain,
  Coffee
} from 'lucide-react';
import Link from 'next/link';

const LandingPage = () => {
  const [activeDemo, setActiveDemo] = useState(false);

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "IA Avanzada",
      description: "Detección inteligente de ciberacoso, grooming, apuestas y contenido peligroso en tiempo real"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Privacidad Total",
      description: "Los mensajes de tus hijos están completamente encriptados. Solo recibes alertas cuando es necesario"
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Alertas Inteligentes",
      description: "Recibe notificaciones inmediatas solo cuando detectamos situaciones de riesgo real"
    },
    {
      icon: <QrCode className="h-8 w-8" />,
      title: "Configuración Simple",
      description: "Solo escanea un código QR y el sistema se configura automáticamente en segundos"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      role: "Madre de 2 hijos",
      content: "Safely AI me dio la tranquilidad que necesitaba. Sé que mis hijos están protegidos sin invadir su privacidad.",
      rating: 5
    },
    {
      name: "Carlos Martínez",
      role: "Padre de adolescente",
      content: "La detección de grooming funcionó perfectamente. Me alertó de una situación peligrosa que no había notado.",
      rating: 5
    },
    {
      name: "Ana Rodríguez",
      role: "Madre soltera",
      content: "Fácil de usar y muy efectivo. Mi hija ni siquiera nota que está activo, pero yo duermo tranquila.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Header/Navigation */}
      <header className="glass-effect sticky top-0 z-50 border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-primary/20">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <span className="text-2xl font-bold text-foreground">Safely AI</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Características
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                Cómo Funciona
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Testimonios
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Precios
              </a>
            </nav>

            <Link href="/demo">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                <Play className="h-4 w-4" />
                <span>Ver Demo</span>
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Protección Familiar con IA</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Protege a tus hijos
              <span className="block text-primary">sin invadir su privacidad</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Safely AI supervisa llamadas y mensajes con inteligencia artificial para detectar 
              <span className="text-red-400"> ciberacoso, grooming, apuestas y drogas</span>, 
              mientras mantiene la privacidad total de tus hijos.
            </p>

            {/* Academic Certifications - Inline */}
            <div className="py-8">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12">
                <div className="flex flex-col items-center space-y-3">
                  <div className="glass-effect p-4 rounded-2xl border border-border/50 bg-white/5">
                    <img 
                      src="/universitycalifornia.png" 
                      alt="University of California" 
                      className="h-24 w-auto"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-foreground">UC Berkeley</h4>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3">
                  <div className="glass-effect p-4 rounded-2xl border border-border/50 bg-white/5">
                    <img 
                      src="/stanford.webp" 
                      alt="Stanford University" 
                      className="h-24 w-auto"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-foreground">Stanford</h4>
                  </div>
                </div>
              </div>
              
              
              <div className="mt-6">
                <p className="text-xl text-muted-foreground mb-3">
                  Basado en investigación académica peer-reviewed:
                </p>
                <a 
                  href="https://arxiv.org/pdf/2309.14517" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-accent/30 hover:bg-accent/50 px-4 py-2 rounded-lg border border-border/50 transition-all duration-300 text-xl"
                >
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-foreground font-medium">
                    "Watch Your Language: Investigating Content Moderation with Large Language Models"
                  </span>
                  <span className="text-muted-foreground">- Stanford & UC</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
              <Link href="/demo">
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold text-lg flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <Play className="h-5 w-5" />
                  <span>Probar Demo Gratis</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
              
              <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl hover:bg-secondary/90 transition-all duration-300 font-semibold text-lg flex items-center space-x-3">
                <MessageCircle className="h-5 w-5" />
                <span>Hablar con Experto</span>
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Setup en 2 minutos</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>100% Privado</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Detecta amenazas reales</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Protección Inteligente para Familias Modernas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nuestra IA analiza patrones de comunicación para detectar amenazas reales sin comprometer la privacidad de tus hijos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-effect p-8 rounded-2xl hover:bg-accent/50 transition-all duration-300 group">
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-accent/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Así de Simple Funciona
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              En menos de 2 minutos tendrás tu familia protegida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <QrCode className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground">1. Escanea el QR</h3>
                <p className="text-muted-foreground">
                  Tu hijo escanea un código QR en su teléfono. La app se instala automáticamente.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <Smartphone className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground">2. Configura tu Número</h3>
                <p className="text-muted-foreground">
                  Introduces tu número de teléfono para recibir las alertas importantes.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground">3. ¡Protegido!</h3>
                <p className="text-muted-foreground">
                  Safely AI protege silenciosamente a tu hijo y te alerta solo cuando es necesario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="glass-effect p-12 rounded-3xl max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  ¿Quieres ver cómo funciona?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Prueba nuestra demo interactiva y ve Safely AI en acción
                </p>
              </div>
              
              <div className="bg-accent/30 p-8 rounded-2xl border border-border/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-foreground">Onboarding de hijo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-foreground">Escaneo de QR</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-foreground">Sistema activo</span>
                  </div>
                </div>
                
                <Link href="/demo">
                  <button className="bg-primary text-primary-foreground px-10 py-5 rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold text-xl flex items-center space-x-4 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105">
                    <Play className="h-6 w-6" />
                    <span>Iniciar Demo Completa</span>
                    <ArrowRight className="h-6 w-6" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-accent/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Lo que dicen los padres
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Miles de familias ya confían en Safely AI para proteger a sus hijos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Precios Transparentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Protección familiar accesible para todos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="glass-effect p-8 rounded-2xl">
              <div className="text-center space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-foreground">Básico</h3>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">$6</div>
                  <div className="text-muted-foreground">por mes</div>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-foreground">1 hijo protegido</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-foreground">Detección básica</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-foreground">Alertas por email</span>
                </div>
              </div>
              <button className="w-full bg-secondary text-secondary-foreground py-3 rounded-xl hover:bg-secondary/90 transition-colors">
                Elegir Plan
              </button>
            </div>

            {/* Pro Plan */}
            <div className="glass-effect p-8 rounded-2xl border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Más Popular
                </div>
              </div>
              <div className="text-center space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-foreground">Pro</h3>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">$10</div>
                  <div className="text-muted-foreground">por mes</div>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-foreground">Hasta 3 hijos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-foreground">IA avanzada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-foreground">Alertas instantáneas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-foreground">Dashboard completo</span>
                </div>
              </div>
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl hover:bg-primary/90 transition-colors">
                Elegir Plan
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="glass-effect p-8 rounded-2xl">
              <div className="text-center space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-foreground">Familia</h3>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">$15</div>
                  <div className="text-muted-foreground">por mes</div>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-foreground">Hijos ilimitados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-foreground">IA premium</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-foreground">Soporte prioritario</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-foreground">Reportes avanzados</span>
                </div>
              </div>
              <button className="w-full bg-secondary text-secondary-foreground py-3 rounded-xl hover:bg-secondary/90 transition-colors">
                Elegir Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="glass-effect p-12 rounded-3xl max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  ¿Listo para proteger a tu familia?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Únete a miles de familias que ya protegen a sus hijos con Safely AI
                </p>
              </div>
              
                             <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                 <Link href="/demo">
                   <button className="bg-primary text-primary-foreground px-10 py-5 rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold text-xl flex items-center space-x-4 shadow-lg hover:shadow-xl transform hover:scale-105">
                     <Play className="h-6 w-6" />
                     <span>Probar Demo Gratis</span>
                     <ArrowRight className="h-6 w-6" />
                   </button>
                 </Link>
                
                <button className="bg-secondary text-secondary-foreground px-10 py-5 rounded-xl hover:bg-secondary/90 transition-all duration-300 font-semibold text-xl flex items-center space-x-4">
                  <MessageCircle className="h-6 w-6" />
                  <span>Hablar con Experto</span>
                </button>
              </div>

              <div className="flex items-center justify-center space-x-8 pt-4 text-sm text-muted-foreground">
                <span>✓ Sin compromiso</span>
                <span>✓ Setup gratuito</span>
                <span>✓ Soporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-primary/20">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xl font-bold text-foreground">Safely AI</span>
              </div>
              <p className="text-muted-foreground">
                Protección familiar inteligente que respeta la privacidad de tus hijos.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Producto</h4>
              <div className="space-y-2">
                <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Características
                </a>
                <a href="#how-it-works" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Cómo Funciona
                </a>
                <a href="#pricing" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Precios
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Soporte</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Centro de Ayuda
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Estado del Sistema
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Privacidad
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Términos
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-12 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Safely AI. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;