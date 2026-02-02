
import React from 'react';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-white text-gray-900 overflow-hidden">
      <Header />
      <main className="flex-1 overflow-hidden relative">
        <ChatInterface />
        
        {/* Subtle Decorative Elements */}
        <div className="fixed top-32 -left-20 w-[40rem] h-[40rem] bg-purple-100/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        <div className="fixed -bottom-20 -right-20 w-[30rem] h-[30rem] bg-indigo-100/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>
      </main>
    </div>
  );
};

export default App;
