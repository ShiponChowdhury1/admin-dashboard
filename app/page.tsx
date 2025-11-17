'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/sidebar';
import { Overview } from '@/components/pages/overview';
import { UserList } from '@/components/pages/user-list';
import { Package } from '@/components/pages/package';
import { Payment } from '@/components/pages/payment';

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'users':
        return <UserList />;
      case 'package':
        return <Package />;
      case 'payment':
        return <Payment />;
      default:
        return <Overview />;
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
