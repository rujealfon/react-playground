import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/settings')({
  component: Settings,
});

function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">
          Manage your application preferences and configurations
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold text-card-foreground">
              Profile Settings
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-sm font-medium text-card-foreground"
                >
                  Full Name
                </label>
                <input
                  id="full-name"
                  type="text"
                  defaultValue="John Doe"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/50 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-card-foreground"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  defaultValue="john@example.com"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/50 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-card-foreground"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/50 focus:outline-none"
                />
              </div>
              <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                Save Profile
              </button>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold text-card-foreground">
              Security
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="current-password"
                  className="block text-sm font-medium text-card-foreground"
                >
                  Current Password
                </label>
                <input
                  id="current-password"
                  type="password"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/50 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="new-password"
                  className="block text-sm font-medium text-card-foreground"
                >
                  New Password
                </label>
                <input
                  id="new-password"
                  type="password"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/50 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-card-foreground"
                >
                  Confirm New Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/50 focus:outline-none"
                />
              </div>
              <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                Update Password
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold text-card-foreground">
              Preferences
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label
                    htmlFor="email-notifications"
                    className="text-sm font-medium text-card-foreground"
                  >
                    Email Notifications
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via email
                  </p>
                </div>
                <button
                  id="email-notifications"
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors"
                >
                  <span className="inline-block h-4 w-4 translate-x-6 transform rounded-full bg-white transition" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label
                    htmlFor="push-notifications"
                    className="text-sm font-medium text-card-foreground"
                  >
                    Push Notifications
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications in your browser
                  </p>
                </div>
                <button
                  id="push-notifications"
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors"
                >
                  <span className="inline-block h-4 w-4 translate-x-1 transform rounded-full bg-white transition" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label
                    htmlFor="marketing-emails"
                    className="text-sm font-medium text-card-foreground"
                  >
                    Marketing Emails
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Receive promotional content via email
                  </p>
                </div>
                <button
                  id="marketing-emails"
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors"
                >
                  <span className="inline-block h-4 w-4 translate-x-1 transform rounded-full bg-white transition" />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold text-card-foreground">
              Display
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="language"
                  className="block text-sm font-medium text-card-foreground"
                >
                  Language
                </label>
                <select
                  id="language"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-ring focus:ring-2 focus:ring-ring/50 focus:outline-none"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="timezone"
                  className="block text-sm font-medium text-card-foreground"
                >
                  Time Zone
                </label>
                <select
                  id="timezone"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-ring focus:ring-2 focus:ring-ring/50 focus:outline-none"
                >
                  <option>UTC-8 (Pacific Time)</option>
                  <option>UTC-5 (Eastern Time)</option>
                  <option>UTC+0 (Greenwich Time)</option>
                  <option>UTC+1 (Central European Time)</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="date-format"
                  className="block text-sm font-medium text-card-foreground"
                >
                  Date Format
                </label>
                <select
                  id="date-format"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-ring focus:ring-2 focus:ring-ring/50 focus:outline-none"
                >
                  <option>MM/DD/YYYY</option>
                  <option>DD/MM/YYYY</option>
                  <option>YYYY-MM-DD</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold text-card-foreground">
              Privacy
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="profile-visibility"
                  className="block text-sm font-medium text-card-foreground"
                >
                  Profile Visibility
                </label>
                <select
                  id="profile-visibility"
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-ring focus:ring-2 focus:ring-ring/50 focus:outline-none"
                >
                  <option>Public</option>
                  <option>Friends Only</option>
                  <option>Private</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label
                    htmlFor="activity-status"
                    className="text-sm font-medium text-card-foreground"
                  >
                    Activity Status
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Show when you&apos;re online
                  </p>
                </div>
                <button
                  id="activity-status"
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors"
                >
                  <span className="inline-block h-4 w-4 translate-x-6 transform rounded-full bg-white transition" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label
                    htmlFor="data-collection"
                    className="text-sm font-medium text-card-foreground"
                  >
                    Data Collection
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Allow analytics data collection
                  </p>
                </div>
                <button
                  id="data-collection"
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors"
                >
                  <span className="inline-block h-4 w-4 translate-x-1 transform rounded-full bg-white transition" />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold text-card-foreground">
              Danger Zone
            </h3>
            <div className="space-y-4">
              <div className="rounded-md border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
                <h4 className="text-sm font-medium text-red-800 dark:text-red-200">
                  Export Account Data
                </h4>
                <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                  Download a copy of all your account data.
                </p>
                <button className="mt-3 rounded-md border border-red-300 bg-white px-3 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-50 dark:border-red-700 dark:bg-red-900 dark:text-red-200 dark:hover:bg-red-800">
                  Export Data
                </button>
              </div>
              <div className="rounded-md border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
                <h4 className="text-sm font-medium text-red-800 dark:text-red-200">
                  Delete Account
                </h4>
                <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                  Permanently delete your account and all associated data.
                </p>
                <button className="mt-3 rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
