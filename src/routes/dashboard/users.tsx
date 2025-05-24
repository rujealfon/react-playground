import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/users')({
  component: Users,
});

function Users() {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
      avatar: '/api/placeholder/32/32',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: 'Active',
      avatar: '/api/placeholder/32/32',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'User',
      status: 'Inactive',
      avatar: '/api/placeholder/32/32',
    },
    {
      id: 4,
      name: 'Alice Brown',
      email: 'alice@example.com',
      role: 'Moderator',
      status: 'Active',
      avatar: '/api/placeholder/32/32',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Users</h1>
          <p className="text-muted-foreground">
            Manage and monitor user accounts
          </p>
        </div>
        <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          Add User
        </button>
      </div>

      <div className="rounded-lg border border-border bg-card">
        <div className="border-b border-border p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-card-foreground">
              User Management
            </h2>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search users..."
                className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/50 focus:outline-none"
              />
              <button className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent">
                Filter
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {users.map(user => (
                <tr
                  key={user.id}
                  className="transition-colors hover:bg-muted/50"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                        <span className="text-sm font-medium text-muted-foreground">
                          {user.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-card-foreground">
                          {user.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        user.status === 'Active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-sm text-primary hover:text-primary/80">
                        Edit
                      </button>
                      <button className="text-sm text-destructive hover:text-destructive/80">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t border-border p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing 4 of 24 users
            </p>
            <div className="flex items-center space-x-2">
              <button className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent disabled:opacity-50">
                Previous
              </button>
              <button className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
