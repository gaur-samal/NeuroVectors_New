import React from 'react';

const LoadingOverlay = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      gap: '16px'
    }}>
      <div style={{
        width: '64px',
        height: '64px',
        border: '4px solid var(--brand-primary)',
        borderTopColor: 'transparent',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <p style={{ color: 'var(--text-primary)', fontSize: '18px' }}>
        Waking up AI services...
      </p>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingOverlay;
