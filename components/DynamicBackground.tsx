import React from 'react';
// Use the relative path to your actual component
import DynamicBackground from './DynamicBackground'; 
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* 1. The Background Layer */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <DynamicBackground />
      </div>

      {/* 2. The Navigation */}
      <Navbar />
      
      {/* 3. The Main Content */}
      <main style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
        {children}
      </main>

      {/* 4. The Footer */}
      <Footer />
    </div>
  );
};

export default Layout;