"use client";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Profile Section */}
      <Card className="shadow-sm border bg-white mb-6">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-gray-600 text-sm">Logged in as</p>
            <p className="text-lg font-medium">User Name</p>
            <p className="text-gray-500 text-sm">email@example.com</p>
          </div>
        </CardContent>
      </Card>

      {/* Budget Section */}
      <Card className="shadow-sm border bg-white mb-6">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Monthly Budget
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Set Budget (₹)</Label>
            <Input type="number" placeholder="Enter your monthly budget" />
          </div>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card className="shadow-sm border bg-white mb-6">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between">
            <Label className="text-base">Dark Mode</Label>
            <Switch />
          </div>

          {/* Future toggles */}
          <div className="flex items-center justify-between">
            <Label className="text-base">Enable Notifications</Label>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <Button className="w-full text-white cursor-pointer">
        Save Settings
      </Button>
    </div>
  );
}
