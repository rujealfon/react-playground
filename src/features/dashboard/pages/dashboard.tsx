import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/')({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your dashboard</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-card-foreground">
            Total Users
          </h3>
          <p className="mt-2 text-3xl font-bold text-blue-600">1,234</p>
          <p className="mt-1 text-sm text-muted-foreground">
            +12% from last month
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-card-foreground">
            Revenue
          </h3>
          <p className="mt-2 text-3xl font-bold text-green-600">$45,678</p>
          <p className="mt-1 text-sm text-muted-foreground">
            +8% from last month
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-card-foreground">Orders</h3>
          <p className="mt-2 text-3xl font-bold text-purple-600">567</p>
          <p className="mt-1 text-sm text-muted-foreground">
            +23% from last month
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-card-foreground">
            Conversion
          </h3>
          <p className="mt-2 text-3xl font-bold text-orange-600">3.4%</p>
          <p className="mt-1 text-sm text-muted-foreground">
            +0.5% from last month
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold text-card-foreground">
            Recent Activity
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-muted-foreground">
                New user registered
              </span>
              <span className="ml-auto text-xs text-muted-foreground">
                2 min ago
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span className="text-sm text-muted-foreground">
                Order #1234 completed
              </span>
              <span className="ml-auto text-xs text-muted-foreground">
                5 min ago
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
              <span className="text-sm text-muted-foreground">
                Payment processed
              </span>
              <span className="ml-auto text-xs text-muted-foreground">
                10 min ago
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold text-card-foreground">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="rounded-lg border border-border p-3 text-left transition-colors hover:bg-accent">
              <div className="text-sm font-medium text-card-foreground">
                Add User
              </div>
              <div className="text-xs text-muted-foreground">
                Create new user account
              </div>
            </button>
            <button className="rounded-lg border border-border p-3 text-left transition-colors hover:bg-accent">
              <div className="text-sm font-medium text-card-foreground">
                View Reports
              </div>
              <div className="text-xs text-muted-foreground">
                Access detailed analytics
              </div>
            </button>
            <button className="rounded-lg border border-border p-3 text-left transition-colors hover:bg-accent">
              <div className="text-sm font-medium text-card-foreground">
                Manage Settings
              </div>
              <div className="text-xs text-muted-foreground">
                Configure application
              </div>
            </button>
            <button className="rounded-lg border border-border p-3 text-left transition-colors hover:bg-accent">
              <div className="text-sm font-medium text-card-foreground">
                Export Data
              </div>
              <div className="text-xs text-muted-foreground">
                Download CSV reports
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
