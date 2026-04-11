"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation"

import {
  BarChart3,
  Box,
  FileText,
  House,
  Megaphone,
  PieChart,
  Plus,
  Users
} from 'lucide-react'

function Sidebar() {

  const pathname = usePathname()

  return (

    <aside className="sidebar">

      <ul className="menuList">

        {/* Dashboard */}
        <li className="sideTabs">
          <Link
            href="/"
            className={`tabLink ${pathname === "/" ? "activeTab" : ""}`}
          >
            <House size={18} />
            <span>Dashboard</span>
          </Link>
        </li>

        {/* Leads */}
        <li className="sideTabs">
          <Link
            href="/leads"
            className={`tabLink ${pathname === "/leads" ? "activeTab" : ""}`}
          >
            <Users size={18} />
            <span>Leads</span>
          </Link>
        </li>

        {/* Sales */}
        <li className="sideTabs">
          <Link
            href="/sales"
            className={`tabLink ${pathname === "/sales" ? "activeTab" : ""}`}
          >
            <BarChart3 size={18} />
            <span>Sales</span>
          </Link>
        </li>

        {/* Reports */}
        <li className="sideTabs">
          <Link
            href="/reports"
            className={`tabLink ${pathname === "/reports" ? "activeTab" : ""}`}
          >
            <FileText size={18} />
            <span>Reports</span>
          </Link>
        </li>

        {/* Products */}
        <li className="sideTabs">
          <Link
            href="/products"
            className={`tabLink ${pathname === "/products" ? "activeTab" : ""}`}
          >
            <Box size={18} />
            <span>Products</span>
          </Link>
        </li>

        {/* Campaigns */}
        <li className="sideTabs">
          <Link
            href="/campaigns"
            className={`tabLink ${pathname === "/campaigns" ? "activeTab" : ""}`}
          >
            <Megaphone size={18} />
            <span>Campaigns</span>
          </Link>
        </li>

        {/* Analytics */}
        <li className="sideTabs">
          <Link
            href="/analytics"
            className={`tabLink ${pathname === "/analytics" ? "activeTab" : ""}`}
          >
            <PieChart size={18} />
            <span>Analytics</span>
          </Link>
        </li>

      </ul>

      {/* Bottom Button */}
      <div className="bottomBox">
        <Link href="/deals" className="addDealBtn">
          <Plus size={16} />
          Add Deal
        </Link>
      </div>

    </aside>

  )
}

export default Sidebar