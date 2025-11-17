'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/sidebar';
import { Overview } from '@/components/overview';
import { UserList } from '@/components/user-list';
import { Package } from '@/components/package';
import { Payment } from '@/components/payment';

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'users':
     
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
}
