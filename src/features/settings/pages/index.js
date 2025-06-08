import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Switch } from '../../../components/ui/switch';
import { useTheme } from '../../../contexts/theme';
import { 
  Bell, 
  Moon, 
  Sun, 
  Globe, 
  Shield, 
  Mail, 
  Smartphone, 
  Eye, 
  Key,
  AlertTriangle
} from 'lucide-react';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    inApp: true,
    updates: true,
    security: true
  });

  const [privacy, setPrivacy] = useState({
    isPublic: false,
    showOnline: true,
    showActivity: true,
    twoFactorAuth: false
  });

  const toggleNotification = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const togglePrivacy = (key) => {
    setPrivacy(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="space-y-6 pb-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground mt-2">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Appearance Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              {theme === 'light' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <div>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>
                  Customize how the dashboard looks and feels.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-base font-medium">Theme Preference</label>
                <p className="text-sm text-muted-foreground">
                  Choose between light and dark themes for your workspace.
                </p>
              </div>
              <Button
                variant="outline"
                onClick={toggleTheme}
                className="min-w-[120px] flex items-center"
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="mr-2 h-4 w-4" />
                    Dark
                  </>
                ) : (
                  <>
                    <Sun className="mr-2 h-4 w-4" />
                    Light
                  </>
                )}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-base font-medium">Reduced Motion</label>
                <p className="text-sm text-muted-foreground">
                  Minimize animations and transitions.
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Notifications Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <div>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                  Customize your notification preferences.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <label className="text-base font-medium">Email Notifications</label>
                  <p className="text-sm text-muted-foreground">Get emails about your account activity.</p>
                </div>
              </div>
              <Switch 
                checked={notifications.email}
                onCheckedChange={() => toggleNotification('email')}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <div>
                  <label className="text-base font-medium">Push Notifications</label>
                  <p className="text-sm text-muted-foreground">Receive push notifications in-browser.</p>
                </div>
              </div>
              <Switch 
                checked={notifications.push}
                onCheckedChange={() => toggleNotification('push')}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Smartphone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <label className="text-base font-medium">SMS Notifications</label>
                  <p className="text-sm text-muted-foreground">Get important updates via SMS.</p>
                </div>
              </div>
              <Switch 
                checked={notifications.sms}
                onCheckedChange={() => toggleNotification('sms')}
              />
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <div>
                <CardTitle>Privacy & Security</CardTitle>
                <CardDescription>
                  Manage your privacy and security settings.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <div>
                  <label className="text-base font-medium">Public Profile</label>
                  <p className="text-sm text-muted-foreground">Make your profile visible to everyone.</p>
                </div>
              </div>
              <Switch 
                checked={privacy.isPublic}
                onCheckedChange={() => togglePrivacy('isPublic')}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Eye className="h-5 w-5 text-muted-foreground" />
                <div>
                  <label className="text-base font-medium">Online Status</label>
                  <p className="text-sm text-muted-foreground">Show when you're active.</p>
                </div>
              </div>
              <Switch 
                checked={privacy.showOnline}
                onCheckedChange={() => togglePrivacy('showOnline')}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Key className="h-5 w-5 text-muted-foreground" />
                <div>
                  <label className="text-base font-medium">Two-Factor Authentication</label>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security.</p>
                </div>
              </div>
              <Switch 
                checked={privacy.twoFactorAuth}
                onCheckedChange={() => togglePrivacy('twoFactorAuth')}
              />
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <div>
                <CardTitle>Danger Zone</CardTitle>
                <CardDescription>
                  Irreversible and destructive actions.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between rounded-lg border border-destructive/20 p-4">
              <div>
                <h4 className="text-base font-medium">Delete Account</h4>
                <p className="text-sm text-muted-foreground">
                  Permanently remove your account and all associated data.
                </p>
              </div>
              <Button variant="destructive">
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;