'use client';

import React, { useState } from 'react';
import { 
  Users, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  MapPin, 
  Clock, 
  Shield,
  Activity,
  Camera,
  User
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { Child } from '@/types';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

const ChildrenPage = () => {
  const { state, dispatch } = useApp();
  const [selectedChild, setSelectedChild] = useState<Child | null>(null);
  const [isAddingChild, setIsAddingChild] = useState(false);
  const [isEditingChild, setIsEditingChild] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    profilePicture: '👶'
  });

  const avatars = ['👶', '🧒', '👧', '👦', '🙋‍♀️', '🙋‍♂️', '👨‍🎓', '👩‍🎓'];

  const handleAddChild = () => {
    if (!formData.name || !formData.age) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    const newChild: Child = {
      id: `child-${Date.now()}`,
      name: formData.name,
      age: parseInt(formData.age),
      profilePicture: formData.profilePicture,
      qrCode: `QR-${formData.name.replace(' ', '')}-${Date.now()}`,
      activityLevel: 'medium',
      lastSeen: new Date(),
      safeZones: []
    };

    dispatch({ type: 'ADD_CHILD', payload: newChild });
    setFormData({ name: '', age: '', profilePicture: '👶' });
    setIsAddingChild(false);
  };

  const handleUpdateChild = () => {
    if (!selectedChild || !formData.name || !formData.age) return;

    const updatedChild: Child = {
      ...selectedChild,
      name: formData.name,
      age: parseInt(formData.age),
      profilePicture: formData.profilePicture
    };

    dispatch({ type: 'UPDATE_CHILD', payload: updatedChild });
    setSelectedChild(null);
    setIsEditingChild(false);
    setFormData({ name: '', age: '', profilePicture: '👶' });
  };

  const handleDeleteChild = (childId: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar este hijo? Esta acción no se puede deshacer.')) {
      dispatch({ type: 'REMOVE_CHILD', payload: childId });
    }
  };

  const startEdit = (child: Child) => {
    setSelectedChild(child);
    setFormData({
      name: child.name,
      age: child.age.toString(),
      profilePicture: child.profilePicture || '👶'
    });
    setIsEditingChild(true);
  };

  const cancelEdit = () => {
    setSelectedChild(null);
    setIsEditingChild(false);
    setIsAddingChild(false);
    setFormData({ name: '', age: '', profilePicture: '👶' });
  };

  const getActivityLevelText = (level: 'low' | 'medium' | 'high') => {
    switch (level) {
      case 'high': return 'Muy Activo';
      case 'medium': return 'Moderado';
      case 'low': return 'Tranquilo';
    }
  };

  const getActivityLevelColor = (level: 'low' | 'medium' | 'high') => {
    switch (level) {
      case 'high': return 'text-green-400 bg-green-500/10';
      case 'medium': return 'text-yellow-400 bg-yellow-500/10';
      case 'low': return 'text-blue-400 bg-blue-500/10';
    }
  };

  return (
    <div className="space-y-8">
      {/* Encabezado */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="p-3 rounded-2xl bg-primary/10">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            Mis Hijos
          </h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Gestiona los perfiles de tus hijos, configura zonas seguras y monitorea su actividad.
        </p>
      </div>

      {/* Botón para agregar hijo */}
      <div className="flex justify-center">
        <button
          onClick={() => setIsAddingChild(true)}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all hover:scale-105 flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Agregar Hijo</span>
        </button>
      </div>

      {/* Modal para agregar/editar hijo */}
      {(isAddingChild || isEditingChild) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="glass-effect rounded-2xl p-6 w-full max-w-md border border-border/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">
                {isAddingChild ? 'Agregar Nuevo Hijo' : 'Editar Hijo'}
              </h3>
              <button
                onClick={cancelEdit}
                className="p-2 rounded-xl hover:bg-accent transition-colors"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-accent/50 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Nombre del hijo"
                />
              </div>

              {/* Edad */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Edad *
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full px-4 py-3 bg-accent/50 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Edad en años"
                  min="1"
                  max="30"
                />
              </div>

              {/* Avatar */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Avatar
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {avatars.map((avatar) => (
                    <button
                      key={avatar}
                      onClick={() => setFormData({ ...formData, profilePicture: avatar })}
                      className={`p-3 rounded-xl border-2 transition-all hover:scale-110 ${
                        formData.profilePicture === avatar
                          ? 'border-primary bg-primary/10'
                          : 'border-border bg-accent/30 hover:border-primary/50'
                      }`}
                    >
                      <span className="text-2xl">{avatar}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Botones */}
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={cancelEdit}
                  className="flex-1 px-4 py-3 bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/90 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={isAddingChild ? handleAddChild : handleUpdateChild}
                  className="flex-1 px-4 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>{isAddingChild ? 'Agregar' : 'Guardar'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lista de hijos */}
      <div className="glass-effect rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Shield className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Hijos Registrados</h2>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            {state.children.length}
          </span>
        </div>

        {state.children.length === 0 ? (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground text-lg mb-2">
              No hay hijos registrados aún
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              Agrega a tu primer hijo para comenzar a usar Safely AI
            </p>
            <button
              onClick={() => setIsAddingChild(true)}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all hover:scale-105 flex items-center space-x-2 mx-auto"
            >
              <Plus className="h-5 w-5" />
              <span>Agregar Primer Hijo</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {state.children.map((child) => (
              <div
                key={child.id}
                className="bg-accent/30 rounded-xl p-6 hover:bg-accent/50 transition-all duration-300 border border-border/50 group"
              >
                {/* Header del hijo */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl">
                        {child.profilePicture || child.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{child.name}</h3>
                      <p className="text-sm text-muted-foreground">{child.age} años</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => startEdit(child)}
                      className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteChild(child.id)}
                      className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Información del hijo */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Visto {formatDistanceToNow(child.lastSeen, { 
                        addSuffix: true, 
                        locale: es 
                      })}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {child.location ? 'Ubicación conocida' : 'Sin ubicación'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Actividad:</span>
                    </div>
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getActivityLevelColor(child.activityLevel)}`}>
                      {getActivityLevelText(child.activityLevel)}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {child.safeZones.length} zonas seguras configuradas
                    </span>
                  </div>
                </div>

                {/* Código QR */}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-2">Código QR</p>
                    <div className="bg-white rounded-lg p-2 inline-block">
                      <div className="w-16 h-16 bg-gray-800 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-mono">QR</span>
                      </div>
                    </div>
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

export default ChildrenPage; 