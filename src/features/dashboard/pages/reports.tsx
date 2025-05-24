import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/reports')({
  component: Reports,
});

function Reports() {
  const reports = [
    {
      id: 1,
      name: 'Monthly Sales Report',
      description: 'Comprehensive sales analysis for the current month',
      lastGenerated: '2024-01-15',
      status: 'Ready',
      type: 'Sales',
    },
    {
      id: 2,
      name: 'User Activity Report',
      description: 'Analysis of user engagement and activity patterns',
      lastGenerated: '2024-01-14',
      status: 'Processing',
      type: 'Analytics',
    },
    {
      id: 3,
      name: 'Financial Summary',
      description: 'Quarterly financial performance overview',
      lastGenerated: '2024-01-13',
      status: 'Ready',
      type: 'Finance',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports</h1>
          <p className="text-muted-foreground">
            Generate and manage your business reports
          </p>
        </div>
        <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-card-foreground">
            Quick Stats
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Total Reports
              </span>
              <span className="text-lg font-semibold text-card-foreground">
                24
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Generated Today
              </span>
              <span className="text-lg font-semibold text-card-foreground">
                3
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Processing</span>
              <span className="text-lg font-semibold text-card-foreground">
                1
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-card-foreground">
            Report Types
          </h3>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Sales</span>
              <span className="text-sm font-medium text-blue-600">8</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Analytics</span>
              <span className="text-sm font-medium text-green-600">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Finance</span>
              <span className="text-sm font-medium text-purple-600">4</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-card-foreground">
            Recent Activity
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-start space-x-2">
              <div className="mt-1 h-2 w-2 rounded-full bg-green-500"></div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Sales report generated
                </p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Analytics exported
                </p>
                <p className="text-xs text-muted-foreground">4 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card">
        <div className="border-b border-border p-6">
          <h2 className="text-lg font-semibold text-card-foreground">
            Available Reports
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {reports.map(report => (
              <div
                key={report.id}
                className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-sm font-semibold text-card-foreground">
                      {report.name}
                    </h3>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        report.status === 'Ready'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}
                    >
                      {report.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {report.description}
                  </p>
                  <div className="mt-2 flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>Type: {report.type}</span>
                    <span>Last generated: {report.lastGenerated}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent">
                    View
                  </button>
                  <button className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary/90">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
