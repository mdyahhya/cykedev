import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

interface BikeViewer3DProps {
  modelPath: string;
  isMobile?: boolean;  // Add this line
}

const BikeViewer3D: React.FC<BikeViewer3DProps> = ({ modelPath, isMobile = false }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background

    // Camera
   const camera = new THREE.PerspectiveCamera(
  isMobile ? 50 : 70,
  mountRef.current.clientWidth / mountRef.current.clientHeight,
  0.1,
  1000
);
camera.position.set(
  isMobile ? 0.8 : 0.5,
  isMobile ? 0.2 : 0.1,
  isMobile ? 2.2 : 1
);




    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true // Enable transparency
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const frontLight = new THREE.DirectionalLight(0xffffff, 0.8);
    frontLight.position.set(-5, 5, 5);
    scene.add(frontLight);

    // Controls
   const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 2;
controls.target.set(0, isMobile ? -0.2 : -0.3, 0);
controls.update();                // ← ADD THIS
controlsRef.current = controls;


    // Load Model
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
       const model = gltf.scene;

// Responsive scale
if (isMobile) {
  model.scale.set(0.85, 0.85, 0.85);
}

// Center model
const box = new THREE.Box3().setFromObject(model);
const center = box.getCenter(new THREE.Vector3());
model.position.sub(center);

scene.add(model);

        setLoading(false);
      },
      undefined,
      (err) => {
        console.error('Error loading model:', err);
        setError('Failed to load 3D model');
        setLoading(false);
      }
    );

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!isPaused) {
        controls.update();
      }
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [modelPath, isPaused]);

  const togglePause = () => {
    setIsPaused(!isPaused);
    if (controlsRef.current) {
      controlsRef.current.autoRotate = isPaused;
    }
  };

  const resetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      
      {/* 3D Viewer - NO CONTAINER, transparent background */}
      <div 
        ref={mountRef} 
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent' // No background
        }}
      />

      {/* Loading State */}
      {loading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '4px solid #E5E7EB',
            borderTop: '4px solid #1E3A8A',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
          <p style={{ marginTop: '1rem', color: '#6B7280', fontWeight: 600 }}>
            Loading 3D Model...
          </p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#EF4444',
          fontWeight: 600
        }}>
          {error}
        </div>
      )}

      {/* Controls Panel - BELOW the bike */}
      {!loading && !error && (
        <div style={{
          position: 'absolute',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.75rem',
          background: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '50px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          border: '2px solid #E5E7EB',
          zIndex: 10
        }}>
          {/* Pause/Play Button */}
          <button
            onClick={togglePause}
            style={{
              background: isPaused ? '#EF4444' : '#1E3A8A',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1.25rem',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.875rem',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {isPaused ? '▶ Play' : '⏸ Pause'}
          </button>

          {/* Reset Button */}
          <button
            onClick={resetView}
            style={{
              background: 'white',
              color: '#1E3A8A',
              border: '2px solid #1E3A8A',
              padding: '0.5rem 1.25rem',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.875rem',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1E3A8A';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = '#1E3A8A';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            🔄 Reset View
          </button>
        </div>
      )}

      {/* ADD THIS NEW TEXT BELOW: */}
      {!loading && !error && (
        <div style={{
          position: 'absolute',
          bottom: '5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          background: 'rgba(30, 58, 138, 0.95)',
          color: 'white',
          padding: '0.75rem 2rem',
          borderRadius: '50px',
          fontSize: '0.875rem',
          fontWeight: 600,
          boxShadow: '0 4px 12px rgba(30, 58, 138, 0.3)',
          zIndex: 10,
          whiteSpace: 'nowrap'
        }}>
          🔄 Drag to rotate 360° and explore the bike
        </div>
      )}

      {/* Spin animation */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default BikeViewer3D;
