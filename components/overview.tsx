'use client';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const chartData = [
  { name: 'Jan', value: 400, users: 240 },
  { name: 'Feb', value: 300, users: 221 },
  { name: 'Mar', value: 200, users: 229 },
  { name: 'Apr', value: 278, users: 200 },
  { name: 'May', value: 189, users: 220 },
  { name: 'Jun', value: 239, users: 250 },
];

const stats = [
  { label: 'Total Users', value: '2,543', icon: '/total-user.png'  },
  { label: 'Free Users', value: '$45,231', icon: '/single-user.png' },
  { label: 'Paid Users', value: '1,234', icon:'/paid-user.png' },
  { label: 'Transactions', value: '3,456', icon: '/income.png' },
];

export function Overview() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h6 className="text-[24px]  font-semibold text-black">Overview</h6>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 bg-card border-border">
          <div className='flex justify-between items-center'>
                   <p className=" text-2xl font-semibold text-[#505050] ">{stat.label}</p>
              <Image src={stat.icon} alt={stat.label} width={40} height={40} />
          </div>
            <p className="text-3xl font-bold mt-2 text-black">{stat.value}</p>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      </div>
    </div>
  );
}
