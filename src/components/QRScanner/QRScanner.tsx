'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Camera, QrCode, Download, Scan, CheckCircle, X, Users, Shield } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { mockChildren } from '@/lib/mockData';

const QRScanner = () => {
  const { state, dispatch } = useApp();
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [selectedChild, setSelectedChild] = useState<string>('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Función para generar códigos QR SVG simplificados
  const generateQRCode = (data: string) => {
    // Código QR simplificado como SVG para demostración
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <rect width="200" height="200" fill="white" />
        <g fill="black">
          {/* Patrón de ejemplo de código QR */}
          <rect x="20" y="20" width="20" height="20" />
          <rect x="60" y="20" width="20" height="20" />
          <rect x="100" y="20" width="20" height="20" />
          <rect x="140" y="20" width="20" height="20" />
          <rect x="20" y="60" width="20" height="20" />
          <rect x="60" y="60" width="20" height="20" />
          <rect x="100" y="60" width="20" height="20" />
          <rect x="140" y="60" width="20" height="20" />
          <rect x="20" y="100" width="20" height="20" />
          <rect x="60" y="100" width="20" height="20" />
          <rect x="100" y="100" width="20" height="20" />
          <rect x="140" y="100" width="20" height="20" />
          <rect x="20" y="140" width="20" height="20" />
          <rect x="60" y="140" width="20" height="20" />
          <rect x="100" y="140" width="20" height="20" />
          <rect x="140" y="140" width="20" height="20" />
          
          {/* Esquinas de posicionamiento */}
          <rect x="10" y="10" width="40" height="40" fill="none" stroke="black" strokeWidth="4" />
          <rect x="150" y="10" width="40" height="40" fill="none" stroke="black" strokeWidth="4" />
          <rect x="10" y="150" width="40" height="40" fill="none" stroke="black" strokeWidth="4" />
          
          {/* Centro */}
          <rect x="85" y="85" width="30" height="30" fill="none" stroke="black" strokeWidth="3" />
          
          {/* Texto del ID */}
          <text x="100" y="195" textAnchor="middle" fontSize="10" fill="black">
            {data}
          </text>
        </g>
      </svg>
    );
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
      setIsScanning(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('No se pudo acceder a la cámara');
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsScanning(false);
    setScanResult(null);
  };

  const handleScanExample = (childId: string) => {
    const child = mockChildren.find(c => c.id === childId);
    if (child) {
      setScanResult(`QR escaneado: ${child.name} (ID: ${child.id})`);
      setTimeout(() => {
        setScanResult(null);
      }, 3000);
    }
  };

  const downloadQR = (childId: string, childName: string) => {
    // Simulación de descarga
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, 200, 200);
      ctx.fillStyle = 'black';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(`QR: ${childName}`, 100, 100);
      ctx.fillText(`ID: ${childId}`, 100, 120);
      
      const link = document.createElement('a');
      link.download = `qr-${childName.toLowerCase().replace(' ', '-')}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="space-y-8">
      {/* Encabezado */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="p-3 rounded-2xl bg-primary/10">
            <QrCode className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            Escáner QR
          </h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Escanea códigos QR para verificar la ubicación de tus hijos o genera nuevos códigos personalizados.
        </p>
      </div>

      {/* Códigos QR de ejemplo */}
      <div className="glass-effect rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Users className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Códigos QR de tus Hijos</h2>
        </div>

        {state.children.length === 0 ? (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground text-lg">
              No hay hijos registrados
            </p>
            <p className="text-muted-foreground text-sm">
              Ve a "Mis Hijos" para agregar tu primer hijo
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {state.children.map((child) => (
              <div
                key={child.id}
                className="bg-accent/30 rounded-xl p-6 hover:bg-accent/50 transition-all duration-300 border border-border/50 group"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-primary">
                      {child.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{child.name}</h3>
                    <p className="text-sm text-muted-foreground">{child.age} años</p>
                  </div>

                  {/* Código QR */}
                  <div className="w-32 h-32 mx-auto bg-white rounded-lg p-2 shadow-lg">
                    <Image 
                      src="/qr-code.png" 
                      alt={`QR Code para ${child.name}`}
                      width={112}
                      height={112}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="space-y-2">
                    <button
                      onClick={() => handleScanExample(child.id)}
                      className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Scan className="h-4 w-4" />
                      <span>Probar Escaneo</span>
                    </button>
                    
                    <button
                      onClick={() => downloadQR(child.id, child.name)}
                      className="w-full px-4 py-2 bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/90 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Download className="h-4 w-4" />
                      <span>Descargar QR</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Escáner de cámara */}
      <div className="glass-effect rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Camera className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Escáner en Tiempo Real</h2>
        </div>

        <div className="space-y-4">
          {!isScanning ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Camera className="h-12 w-12 text-primary" />
              </div>
              <p className="text-muted-foreground text-lg mb-4">
                Haz clic para activar la cámara y escanear códigos QR
              </p>
              <button
                onClick={startCamera}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
              >
                <Camera className="h-5 w-5" />
                <span>Activar Cámara</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative bg-black rounded-xl overflow-hidden">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 border-2 border-primary/50 rounded-xl flex items-center justify-center">
                  <div className="w-48 h-48 border-2 border-primary border-dashed rounded-lg flex items-center justify-center">
                    <QrCode className="h-12 w-12 text-primary animate-pulse" />
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  onClick={stopCamera}
                  className="px-6 py-3 bg-destructive text-destructive-foreground rounded-xl hover:bg-destructive/90 transition-all flex items-center justify-center space-x-2 mx-auto"
                >
                  <X className="h-5 w-5" />
                  <span>Detener Escáner</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Resultado del escaneo */}
      {scanResult && (
        <div className="glass-effect rounded-2xl p-6 border-2 border-primary/50">
          <div className="flex items-center space-x-3 mb-4">
            <CheckCircle className="h-6 w-6 text-green-400" />
            <h3 className="text-xl font-bold text-foreground">Escaneo Exitoso</h3>
          </div>
          <div className="bg-accent/50 rounded-xl p-4">
            <p className="text-foreground font-medium">{scanResult}</p>
            <p className="text-muted-foreground text-sm mt-2">
              El código QR ha sido verificado correctamente
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRScanner; 