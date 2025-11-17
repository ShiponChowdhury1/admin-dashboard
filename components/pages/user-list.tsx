'use client';

import { Card } from '@/components/ui/card';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', joinDate: 'Jan 15, 2024' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active', joinDate: 'Feb 10, 2024' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', status: 'Inactive', joinDate: 'Mar 5, 2024' },
  { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', status: 'Active', joinDate: 'Apr 12, 2024' },
  { id: 5, name: 'Tom Brown', email: 'tom@example.com', status: 'Active', joinDate: 'May 8, 2024' },
];

export function UserList() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground">User List</h1>
        <p className="text-muted-foreground mt-2">Manage all users in your system.</p>
      </div>

      <Card className="bg-card border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-sidebar/50">
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Name</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Email</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Status</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Join Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-border hover:bg-sidebar/30 transition-colors">
                  <td className="px-6 py-4 text-foreground font-medium">{user.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active' ? 'bg-accent/20 text-accent' : 'bg-muted text-muted-foreground'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{user.joinDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
