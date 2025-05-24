import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/analytics')({
  component: Analytics,
});

function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">
          Comprehensive analytics and insights for your application
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold text-card-foreground">
            Traffic Overview
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Page Views</span>
              <span className="font-medium">24,563</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Unique Visitors
              </span>
              <span className="font-medium">8,472</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Bounce Rate</span>
              <span className="font-medium">34.2%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Avg. Session Duration
              </span>
              <span className="font-medium">3m 24s</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold text-card-foreground">
            Top Pages
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">/dashboard</span>
              <span className="text-sm font-medium">2,543 views</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">/</span>
              <span className="text-sm font-medium">1,897 views</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">/about</span>
              <span className="text-sm font-medium">1,234 views</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">/auth/login</span>
              <span className="text-sm font-medium">987 views</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-4 text-lg font-semibold text-card-foreground">
          Performance Metrics
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">2.3s</div>
            <div className="text-sm text-muted-foreground">Avg. Load Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">99.8%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">92</div>
            <div className="text-sm text-muted-foreground">
              Performance Score
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
