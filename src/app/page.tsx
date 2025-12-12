"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Expense Tracker</h1>
      <p className="text-gray-600 mb-8">
        Track your expenses, manage your budget, and analyze your spending
        patterns with ease.
      </p>

      {/* Navigation Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link href="/dashboard">
          <Button className="w-full cursor-pointer">Dashboard</Button>
        </Link>
        <Link href="/analytics">
          <Button className="w-full cursor-pointer">Analytics</Button>
        </Link>
        <Link href="/add">
          <Button className="w-full cursor-pointer">Add Expense</Button>
        </Link>
        <Link href="/settings">
          <Button className="w-full cursor-pointer">Settings</Button>
        </Link>
      </div>

      {/* Optional Footer */}
      <p className="text-gray-400 mt-12 text-sm">
        &copy; 2025 Expense Tracker. All rights reserved.
      </p>
    </div>
  );
}
