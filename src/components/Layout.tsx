import React from 'react';
import Header from './Header';
import Footer from './Footer';
import EmailCapturePopup from './EmailCapturePopup'; // Import the new EmailCapturePopup

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-j2k-white text-j2k-black">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <EmailCapturePopup /> {/* Render the EmailCapturePopup */}
    </div>
  );
};

export default Layout;