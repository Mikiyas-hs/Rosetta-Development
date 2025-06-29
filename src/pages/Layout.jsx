
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-[#1a2e28] text-stone-300 font-sans">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
