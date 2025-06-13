import React from 'react';
import { useSettings } from '../../contexts/settings';
import { useNotifications } from '../../contexts/notifications';
import { Switch } from '../../components/ui/switch';
import { Select } from '../../components/ui/select';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

export function SettingsPage() {
  const { settings, updateSettings, resetSettings } = useSettings();
  const { addNotification } = useNotifications();

  const handleSettingChange = (category, key, value) => {
    updateSettings({
      [category]: {
        ...settings[category],
        [key]: value,
      },
    });

    // Show toast notification for important changes
    if (category === 'notifications' || category === 'privacy') {
      addNotification({
        title: 'Settings Updated',
        message: `Your ${category} settings have been updated.`,
        type: 'success',
        isToast: true,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Settings</h1>
        <Button variant="outline" onClick={resetSettings}>
          Reset to Default
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="display">Display</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">General Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium">Language</label>
                  <p className="text-sm text-muted-foreground">Select your preferred language</p>
                </div>
                <Select
                  value={settings.language}
                  onValueChange={(value) => updateSettings({ language: value })}
                  options={[
                    { value: 'en', label: 'English' },
                    { value: 'es', label: 'Spanish' },
                    { value: 'fr', label: 'French' },
                  ]}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium">Timezone</label>
                  <p className="text-sm text-muted-foreground">Set your local timezone</p>
                </div>
                <Select
                  value={settings.timezone}
                  onValueChange={(value) => updateSettings({ timezone: value })}
                  options={[
                    { value: 'UTC', label: 'UTC' },
                    { value: 'America/New_York', label: 'Eastern Time' },
                    { value: 'America/Chicago', label: 'Central Time' },
                    { value: 'America/Denver', label: 'Mountain Time' },
                    { value: 'America/Los_Angeles', label: 'Pacific Time' },
                  ]}
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Notification Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium">Enable Notifications</label>
                  <p className="text-sm text-muted-foreground">Receive notifications in the dashboard</p>
                </div>
                <Switch
                  checked={settings.notifications.enabled}
                  onCheckedChange={(checked) => handleSettingChange('notifications', 'enabled', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium">Sound Alerts</label>
                  <p className="text-sm text-muted-foreground">Play sound for new notifications</p>
                </div>
                <Switch
                  checked={settings.notifications.sound}
                  onCheckedChange={(checked) => handleSettingChange('notifications', 'sound', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium">Desktop Notifications</label>
                  <p className="text-sm text-muted-foreground">Show notifications on your desktop</p>
                </div>
                <Switch
                  checked={settings.notifications.desktop}
                  onCheckedChange={(checked) => handleSettingChange('notifications', 'desktop', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium">Email Notifications</label>
                  <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                </div>
                <Switch
                  checked={settings.notifications.email}
                  onCheckedChange={(checked) => handleSettingChange('notifications', 'email', checked)}
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="display" className="space-y-4">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Display Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium">Display Density</label>
                  <p className="text-sm text-muted-foreground">Adjust the spacing of elements</p>
                </div>
                <Select
                  value={settings.display.density}
                  onValueChange={(value) => handleSettingChange('display', 'density', value)}
                  options={[
                    { value: 'compact', label: 'Compact' },
                    { value: 'comfortable', label: 'Comfortable' },
                    { value: 'spacious', label: 'Spacious' },
                  ]}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium">Font Size</label>
                  <p className="text-sm text-muted-foreground">Adjust the text size</p>
                </div>
                <Select
                  value={settings.display.fontSize}
                  onValueChange={(value) => handleSettingChange('display', 'fontSize', value)}
                  options={[
                    { value: 'small', label: 'Small' },
                    { value: 'medium', label: 'Medium' },
                    { value: 'large', label: 'Large' },
                  ]}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium">Show Breadcrumbs</label>
                  <p className="text-sm text-muted-foreground">Display navigation breadcrumbs</p>
                </div>
                <Switch
                  checked={settings.display.showBreadcrumbs}
                  onCheckedChange={(checked) => handleSettingChange('display', 'showBreadcrumbs', checked)}
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Privacy Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium">Activity Tracking</label>
                  <p className="text-sm text-muted-foreground">Track your activity for better recommendations</p>
                </div>
                <Switch
                  checked={settings.privacy.activityTracking}
                  onCheckedChange={(checked) => handleSettingChange('privacy', 'activityTracking', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium">Data Collection</label>
                  <p className="text-sm text-muted-foreground">Allow collection of usage data</p>
                </div>
                <Switch
                  checked={settings.privacy.dataCollection}
                  onCheckedChange={(checked) => handleSettingChange('privacy', 'dataCollection', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium">Analytics</label>
                  <p className="text-sm text-muted-foreground">Enable analytics tracking</p>
                </div>
                <Switch
                  checked={settings.privacy.analytics}
                  onCheckedChange={(checked) => handleSettingChange('privacy', 'analytics', checked)}
                />
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 