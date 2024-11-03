import React, { useState } from 'react';
import { Scene } from './components/Scene';
import { MorphControls } from './components/MorphControls';
import { RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';

function App() {
  const [morphTargets, setMorphTargets] = useState<Record<string, number>>({});

  const handleMorphTargetChange = (name: string, value: number) => {
    setMorphTargets(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800 relative">
      <div className="absolute inset-0">
        <Scene morphTargets={morphTargets} />
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all">
          <ZoomIn size={24} />
        </button>
        <button className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all">
          <ZoomOut size={24} />
        </button>
        <button 
          className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all"
          onClick={() => setMorphTargets({})}
        >
          <RotateCcw size={24} />
        </button>
      </div>
      
      <div className="absolute top-8 left-8">
        <h1 className="text-white text-2xl font-bold">3D Avatar Editor</h1>
        <p className="text-white/60">Powered by Ready Player Me</p>
      </div>

      <MorphControls 
        morphTargets={morphTargets}
        onMorphTargetChange={handleMorphTargetChange}
      />
    </div>
  );
}

export default App;