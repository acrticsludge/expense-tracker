"use client";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [budget, setBudget] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("budget");
    if (saved) setBudget(Number(saved));
  }, []);

  useEffect(() => {
    const savedDark = localStorage.getItem("darkMode");
    const savedNotify = localStorage.getItem("notifications");
    if (savedDark) setDarkMode(savedDark === "true");
    if (savedNotify) setNotifications(savedNotify === "true");
  }, []);

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(e.target.value));
  };

  const handleSave = () => {
    localStorage.setItem("darkMode", darkMode.toString());
    localStorage.setItem("notifications", notifications.toString());
    localStorage.setItem("budget", budget.toString());
    alert("Settings saved!");
  };
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
            <Input
              type="number"
              placeholder="Enter your monthly budget"
              value={budget}
              onChange={handleBudgetChange}
            />
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
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>

          {/* Future toggles */}
          <div className="flex items-center justify-between">
            <Label className="text-base">Enable Notifications</Label>
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <Button className="w-full text-white cursor-pointer" onClick={handleSave}>
        Save Settings
      </Button>
    </div>
  );
}
