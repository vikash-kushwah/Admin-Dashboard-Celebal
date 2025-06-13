import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { NotificationCenter } from '../../../components/ui/notification-center';
import { Switch } from '../../../components/ui/switch';
import { useNotifications } from '../../../contexts/notifications';
import { useSettings } from '../../../contexts/settings';

export default function Notifications() {
  const { notifications, clearNotification, clearAllNotifications } = useNotifications();
  const { settings, updateSettings } = useSettings();

  const handleNotificationSettingChange = (key, value) => {
    updateSettings({
      notifications: {
        ...settings.notifications,
        [key]: value,
      },
    });
  };

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Email Notifications</div>
                <div className="text-sm text-muted-foreground">
                  Receive email notifications for important updates
                </div>
              </div>
              <Switch
                checked={settings.notifications.email}
                onCheckedChange={(checked) => handleNotificationSettingChange('email', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Push Notifications</div>
                <div className="text-sm text-muted-foreground">
                  Get browser notifications for new messages and updates
                </div>
              </div>
              <Switch
                checked={settings.notifications.desktop}
                onCheckedChange={(checked) => handleNotificationSettingChange('desktop', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Sound Alerts</div>
                <div className="text-sm text-muted-foreground">
                  Play sound for new notifications
                </div>
              </div>
              <Switch
                checked={settings.notifications.sound}
                onCheckedChange={(checked) => handleNotificationSettingChange('sound', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Enable Notifications</div>
                <div className="text-sm text-muted-foreground">
                  Turn on/off all notifications
                </div>
              </div>
              <Switch
                checked={settings.notifications.enabled}
                onCheckedChange={(checked) => handleNotificationSettingChange('enabled', checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Notifications</CardTitle>
            <button
              onClick={clearAllNotifications}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Clear All
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <NotificationCenter
            notifications={notifications}
            onClear={clearNotification}
          />
        </CardContent>
      </Card>
    </div>
  );
}
