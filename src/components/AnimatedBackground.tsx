import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Base Background Color */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 transition-colors duration-500" />

      {/* Light Mode Wave Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover dark:hidden opacity-60 mix-blend-multiply"
      >
        <source src="/wave-light.mp4" type="video/mp4" />
      </video>

      {/* Dark Mode Wave Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden dark:block opacity-60 mix-blend-screen"
      >
        <source src="/wave-dark.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default AnimatedBackground;
