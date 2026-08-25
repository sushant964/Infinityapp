/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  LayoutGrid,
  FileText,
  Globe,
  Users,
  ArrowRightLeft,
  Link as LinkIcon,
  Plug,
  BarChart2,
  Calendar,
  HelpCircle,
  Bell,
  Send,
  Plus,
  Upload,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ArrowUp,
  ArrowDown,
  Menu,
  X,
  AlertCircle,
  Search,
  Filter,
  Download,
  MoreHorizontal
} from 'lucide-react';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Connect');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isActionDowntimeOpen, setIsActionDowntimeOpen] = useState(false);
  const [showGoogleError, setShowGoogleError] = useState(false);

  const navItems = [
    { name: 'Dashboard', icon: LayoutGrid, id: 'Dashboard' },
    { name: 'Invoicing', icon: FileText, id: 'Invoicing' },
    { name: 'Global accounts', icon: Globe, id: 'Global accounts' },
    { name: 'Clients', icon: Users, id: 'Clients' },
    { name: 'Transactions', icon: ArrowRightLeft, id: 'Transactions' },
    { name: 'Quick Links', icon: LinkIcon, id: 'Quick Links' },
    { name: 'Connect', icon: Plug, id: 'Connect' },
    { name: 'Insights', icon: BarChart2, id: 'Insights' },
  ];

  const globalAccounts = [
    { flag: '🇺🇸', amount: '597.50', currency: 'US Dollar', active: true },
    { flag: '🇨🇦', amount: '0.00', currency: 'Canadian Dollar', active: false },
    { flag: '🇬🇧', amount: '0.00', currency: 'Pound Sterling', active: false },
    { flag: '🇪🇺', amount: '0.00', currency: 'Euro', active: false },
    { flag: '🇦🇺', amount: '0.00', currency: 'Australian', active: false },
    { flag: '🇯🇵', amount: '0.00', currency: 'Japanese Yen', active: false },
    { flag: '🇨🇭', amount: '0.00', currency: 'Swiss Franc', active: false },
    { flag: '🇭🇰', amount: '0.00', currency: 'Hong Kong Dollar', active: false },
    { flag: '🇨🇳', amount: '0.00', currency: 'Chinese Yuan', active: false },
    { flag: '🇸🇬', amount: '0.00', currency: 'Singapore Dollar', active: false },
  ];

  const transactions = [
    { id: 'TX-2948', time: '14:23', date: 'Aug 4', clientInitials: 'MB', clientBg: 'bg-blue-100', clientColor: 'text-blue-700', clientName: 'Mason Brooks', status: 'Success', statusColor: 'text-emerald-700 bg-emerald-50', dotColor: 'bg-emerald-500', desc: 'Invoice Approved', amount: 'USD 99.50', method: 'Bank Transfer' },
    { id: 'TX-2949', time: '09:41', date: 'Aug 4', clientInitials: 'LP', clientBg: 'bg-purple-100', clientColor: 'text-purple-700', clientName: 'Logan Prescott', status: 'Success', statusColor: 'text-emerald-700 bg-emerald-50', dotColor: 'bg-emerald-500', desc: 'Invoice Approved', amount: 'USD 99.50', method: 'Credit Card' },
    { id: 'TX-2950', time: '11:15', date: 'Aug 7', clientInitials: 'EH', clientBg: 'bg-[#fce7f3]', clientColor: 'text-pink-700', clientName: 'Everett Hayes', status: 'Success', statusColor: 'text-emerald-700 bg-emerald-50', dotColor: 'bg-emerald-500', desc: 'Invoice Approved', amount: 'USD 99.50', method: 'Wire Transfer' },
    { id: 'TX-2951', time: '16:05', date: 'Aug 12', clientInitials: 'WC', clientBg: 'bg-orange-100', clientColor: 'text-orange-700', clientName: 'Wyatt Callahan', status: 'Success', statusColor: 'text-emerald-700 bg-emerald-50', dotColor: 'bg-emerald-500', desc: 'Invoice Approved', amount: 'USD 99.50', method: 'Bank Transfer' },
    { id: 'TX-2952', time: '08:30', date: 'Aug 19', clientInitials: 'HR', clientBg: 'bg-indigo-100', clientColor: 'text-indigo-700', clientName: 'Hudson Reed', status: 'Success', statusColor: 'text-emerald-700 bg-emerald-50', dotColor: 'bg-emerald-500', desc: 'Invoice Approved', amount: 'USD 99.50', method: 'Credit Card' },
    { id: 'TX-2953', time: '13:45', date: 'Aug 23', clientInitials: 'NM', clientBg: 'bg-teal-100', clientColor: 'text-teal-700', clientName: 'Nolan Mercer', status: 'Success', statusColor: 'text-emerald-700 bg-emerald-50', dotColor: 'bg-emerald-500', desc: 'Invoice Approved', amount: 'USD 99.50', method: 'Bank Transfer' },
  ];

  const connectPlatforms = [
    {
      id: 'upwork',
      logo: (
        <div className="text-[#14a800] font-bold text-[28px] tracking-tighter leading-none" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          upwork
        </div>
      ),
      desc: 'Freelance marketplace where client payments are handled for you.',
      tags: ['Freelancing', 'Platform Payments']
    },
    {
      id: 'freelancer',
      logo: (
        <div className="flex items-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
            <path d="M2.5 14L11 3L14.5 12L2.5 14Z" fill="#29b2fe"/>
            <path d="M14.5 12L22 4L15 15L14.5 12Z" fill="#29b2fe"/>
            <path d="M2.5 14L14.5 12L15 15L2.5 14Z" fill="#1b98ea"/>
          </svg>
          <div className="text-[#0a1e2f] font-extrabold text-[22px] tracking-tighter italic" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>freelancer</div>
        </div>
      ),
      desc: 'Bid-based freelancing with clearly defined milestone-driven payouts.',
      tags: ['Freelancing', 'Milestone Payments']
    },
    {
      id: 'deel',
      logo: (
        <div className="flex items-baseline">
          <div className="text-black font-bold text-[32px] tracking-tighter leading-none" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            deel
          </div>
          <div className="w-2.5 h-2.5 bg-[#2b6fed] rounded-full ml-0.5"></div>
        </div>
      ),
      desc: 'Employer-led salary and contractor payouts across multiple countries.',
      tags: ['Freelancing', 'Salary Payments']
    },
    {
      id: 'contra',
      logo: (
        <div className="flex items-center gap-1.5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
          </svg>
          <div className="text-black font-bold text-[28px] tracking-tight leading-none" style={{ fontFamily: 'Georgia, serif' }}>
            contra
          </div>
        </div>
      ),
      desc: 'Independent freelancing with fully direct client payment flows.',
      tags: ['Freelancing', 'Direct Payments']
    }
  ];

  if (showGoogleError) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 font-sans text-slate-800 text-center">
        <div className="w-16 h-16 bg-red-50 border border-red-100 rounded-full flex items-center justify-center mb-6">
          <AlertCircle className="w-8 h-8 text-red-500 stroke-[1.5]" />
        </div>
        <h1 className="text-[24px] font-bold text-slate-900 mb-8">Error Code: 404</h1>
        <button 
          onClick={() => setShowGoogleError(false)} 
          className="px-6 py-3 bg-[#165a60] hover:bg-[#0f4347] text-white font-medium rounded-lg transition-colors text-[15px] w-full max-w-[300px]"
        >
          Return to Homepage
        </button>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 font-sans text-slate-800">
        <div className="w-full max-w-[400px] flex flex-col items-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src="https://res.cloudinary.com/ermw5sr0/image/upload/v1787586366/ai_repair_20260824000723741.png" alt="Infinity Logo" className="h-14 object-contain" />
          </div>

          {/* Headings */}
          <h1 className="text-[22px] font-semibold text-slate-900 mb-2 text-center">Log-in to your Infinity account</h1>
          <p className="text-[15px] text-slate-600 mb-8 text-center">Enter your email to receive a one-time sign-in code</p>

          {/* Form */}
          <form 
            className="w-full flex flex-col gap-5" 
            onSubmit={(e) => { e.preventDefault(); setIsAuthenticated(true); }}
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-medium text-slate-900">E-mail</label>
              <input 
                type="email" 
                placeholder="name@email.com" 
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[15px] focus:outline-none focus:border-[#0f4347] focus:ring-1 focus:ring-[#0f4347] transition-all placeholder:text-gray-400"
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-3.5 bg-[#165a60] hover:bg-[#0f4347] text-white font-medium rounded-lg transition-colors text-[15px] mt-1"
            >
              Continue
            </button>
          </form>

          {/* Divider */}
          <div className="w-full text-center my-6 text-[14px] font-medium text-slate-500">
            OR
          </div>

          {/* Google Sign In */}
          <button 
            type="button"
            onClick={() => setShowGoogleError(true)}
            className="w-full py-3.5 bg-white border border-gray-300 hover:bg-gray-50 text-slate-800 font-medium rounded-lg transition-colors text-[15px] flex items-center justify-center gap-2.5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Sign in with Google
          </button>

          {/* Links */}
          <p className="mt-8 text-[15px] text-slate-600 text-center">
            Don't have an account? <a href="#" className="text-[#165a60] font-medium hover:underline">Sign up</a>
          </p>

          <p className="mt-12 text-[13px] text-slate-500 text-center max-w-[320px] leading-relaxed">
            By continuing you agree to our <a href="#" className="text-[#165a60] hover:underline">Privacy Policy</a> and <a href="#" className="text-[#165a60] hover:underline">Terms and condition</a>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex">
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 z-20 lg:hidden backdrop-blur-sm" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`w-[240px] flex-shrink-0 border-r border-gray-200 flex flex-col h-screen fixed left-0 top-0 bg-white z-30 transition-transform duration-200 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="h-[72px] flex items-center justify-between px-6 border-b border-gray-100 lg:border-transparent">
          <button 
            onClick={() => setActiveTab('Dashboard')}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img src="https://res.cloudinary.com/ermw5sr0/image/upload/v1787586366/ai_repair_20260824000723741.png" alt="Infinity Logo" className="h-12 object-contain" />
          </button>
          <button 
            className="lg:hidden p-1 -mr-2 text-slate-500 hover:text-slate-700 rounded-md hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors ${
                activeTab === item.id 
                  ? 'bg-[#eef2f3] text-[#0f4347]' 
                  : 'text-slate-600 hover:bg-gray-50 hover:text-slate-900'
              }`}
            >
              <item.icon className="w-5 h-5 stroke-[1.5]" />
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col w-full lg:ml-[240px] min-w-0">
        {/* Top Navbar */}
        <header className="h-[72px] border-b border-gray-100 bg-white flex items-center justify-between px-4 lg:px-8 sticky top-0 z-10">
          <div className="flex items-center lg:hidden w-1/3">
            <button 
              className="p-2 -ml-2 rounded-md text-slate-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-7 h-7 stroke-[1.5]" />
            </button>
          </div>
          
          {/* Mobile Brand */}
          <div className="flex items-center justify-center w-1/3 lg:w-auto lg:hidden">
            <button 
              onClick={() => setActiveTab('Dashboard')}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img src="https://res.cloudinary.com/ermw5sr0/image/upload/v1787586366/ai_repair_20260824000723741.png" alt="Infinity Logo" className="h-10 object-contain" />
            </button>
          </div>

          <div className="hidden lg:flex flex-1"></div>

          <div className="flex items-center justify-end w-1/3 lg:w-auto gap-4 lg:gap-6">
            {/* Desktop Only Utilities */}
            <div className="hidden lg:flex items-center gap-4 text-slate-500">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-slate-700 shadow-sm cursor-pointer hover:bg-gray-50 mr-2">
                <span className="text-base leading-none">🇪🇺</span>
                <span>EUR/INR 108.21</span>
              </div>
              <button className="hover:text-slate-700 transition-colors">
                <Calendar className="w-5 h-5 stroke-[1.5]" />
              </button>
              <button className="hover:text-slate-700 transition-colors">
                <HelpCircle className="w-5 h-5 stroke-[1.5]" />
              </button>
              <button className="hover:text-slate-700 transition-colors relative">
                <Bell className="w-5 h-5 stroke-[1.5]" />
                <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
            </div>

            {/* User Avatar */}
            <button 
              onClick={() => setIsProfileModalOpen(true)}
              className="w-10 h-10 rounded-xl bg-[#f0e6e9] text-[#4f323a] flex items-center justify-center font-medium text-lg cursor-pointer hover:bg-[#e8dadf] transition-colors"
            >
              D
            </button>
          </div>
        </header>

        {/* Page Content */}
        {activeTab === 'Dashboard' && (
          <div className="p-4 sm:p-6 lg:p-8 max-w-[1200px] w-full mx-auto">
            {/* Header & Actions */}
            <div className="flex flex-col gap-5 lg:gap-6 mb-8 lg:mb-10">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Welcome, Deeshan</h1>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <button 
                  onClick={() => setIsActionDowntimeOpen(true)}
                  className="w-full sm:w-auto justify-center flex items-center gap-2 bg-[#0f4347] hover:bg-[#0a2e31] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  Send details
                </button>
                <div className="flex w-full sm:w-auto gap-2.5 sm:gap-3">
                  <button 
                    onClick={() => setIsActionDowntimeOpen(true)}
                    className="flex-1 sm:flex-none justify-center flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-300 text-slate-700 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm whitespace-nowrap"
                  >
                    <Plus className="w-4 h-4" />
                    Create invoice
                  </button>
                  <button 
                    onClick={() => setIsActionDowntimeOpen(true)}
                    className="flex-1 sm:flex-none justify-center flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-300 text-slate-700 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm whitespace-nowrap"
                  >
                    <Upload className="w-4 h-4" />
                    Upload invoice
                  </button>
                </div>
              </div>
            </div>

            {/* Global Accounts */}
            <section className="mb-8 lg:mb-10">
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-slate-900">Global accounts</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {globalAccounts.slice(0, 4).map((account, index) => (
                  <div key={index} className="relative bg-white border border-gray-200 rounded-xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between h-[120px] overflow-hidden group hover:border-gray-300 transition-colors cursor-pointer">
                    {/* Active Indicator Line */}
                    {account.active && (
                      <div className="absolute left-0 top-6 bottom-6 w-1 bg-[#0f4347] rounded-r-md"></div>
                    )}
                    
                    {/* Decorative background pattern (subtle lines) */}
                    <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M60 10C32.3858 10 10 32.3858 10 60" stroke="black" strokeWidth="2"/>
                         <path d="M60 25C40.67 25 25 40.67 25 60" stroke="black" strokeWidth="2"/>
                         <path d="M60 40C48.9543 40 40 48.9543 40 60" stroke="black" strokeWidth="2"/>
                      </svg>
                    </div>

                    <div className="flex justify-between items-start z-10">
                      <span className="text-2xl leading-none">{account.flag}</span>
                      <button className="p-1 bg-[#f0f4f5] rounded-full text-[#0f4347] opacity-80 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="z-10 mt-2">
                      <div className="text-xl font-bold text-slate-900 leading-tight">{account.amount}</div>
                      <div className="text-[13px] text-slate-500 font-medium mt-0.5">{account.currency}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent Transactions */}
            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-4">Recent transactions</h2>
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                      <tr className="border-b border-gray-200 bg-white">
                        <th className="py-3 px-4 sm:px-5 text-[13px] font-medium text-slate-500 w-[12%] whitespace-nowrap">
                          <div className="flex items-center gap-1 cursor-pointer hover:text-slate-700">
                            Date
                            <div className="flex flex-col -space-y-[6px]">
                              <ArrowUp className="w-3 h-3" />
                              <ArrowDown className="w-3 h-3 text-gray-300" />
                            </div>
                          </div>
                        </th>
                        <th className="py-3 px-4 sm:px-5 text-[13px] font-medium text-slate-500 w-[30%]">Client name</th>
                        <th className="py-3 px-4 sm:px-5 text-[13px] font-medium text-slate-500 w-[18%]">
                          <div className="flex items-center gap-1 cursor-pointer hover:text-slate-700">
                            Status
                            <div className="flex flex-col -space-y-[6px]">
                              <ArrowUp className="w-3 h-3" />
                              <ArrowDown className="w-3 h-3 text-gray-300" />
                            </div>
                          </div>
                        </th>
                        <th className="py-3 px-4 sm:px-5 text-[13px] font-medium text-slate-500 w-[20%]">Description</th>
                        <th className="py-3 px-4 sm:px-5 text-[13px] font-medium text-slate-500 text-right w-[20%]">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {transactions.map((tx, index) => (
                        <tr key={index} className="hover:bg-[#fafafa] transition-colors group">
                          <td className="py-3 sm:py-4 px-4 sm:px-5 text-[14px] text-slate-900 font-medium whitespace-nowrap">
                            {tx.date}
                          </td>
                          <td className="py-3 sm:py-4 px-4 sm:px-5">
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-[11px] font-bold ${tx.clientBg} ${tx.clientColor}`}>
                                {tx.clientInitials}
                              </div>
                              <span className="text-[14px] text-slate-900 font-medium truncate">{tx.clientName}</span>
                            </div>
                          </td>
                          <td className="py-3 sm:py-4 px-4 sm:px-5">
                            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-medium ${tx.statusColor} whitespace-nowrap`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${tx.dotColor}`}></span>
                              {tx.status}
                            </div>
                          </td>
                          <td className="py-3 sm:py-4 px-4 sm:px-5 text-[14px] text-slate-600">
                            {tx.desc}
                          </td>
                          <td className="py-3 sm:py-4 px-4 sm:px-5 text-right whitespace-nowrap">
                            <div className="flex flex-col items-end justify-center h-full">
                              {tx.amountSub ? (
                                <>
                                  <span className="text-[14px] font-bold text-slate-900 leading-tight">{tx.amount}</span>
                                  <span className="text-[13px] text-slate-500 font-medium mt-0.5">{tx.amountSub}</span>
                                </>
                              ) : (
                                <span className="text-[14px] font-bold text-slate-900">{tx.amount}</span>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Connect Page */}
        {activeTab === 'Connect' && (
          <div className="w-full flex flex-col pb-8">
            {/* Main Container */}
            <div className="p-4 sm:p-6 lg:p-8 max-w-[800px] w-full mx-auto mt-2">
              <h1 className="text-[28px] leading-tight font-bold text-slate-900 mb-6">Connect platforms</h1>
              
              <div className="flex flex-col gap-4">
                {connectPlatforms.map((platform) => (
                  <div 
                    key={platform.id} 
                    className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors cursor-pointer bg-white shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-3">
                      {platform.logo}
                      <ChevronRight className="w-5 h-5 text-slate-600 mt-1" />
                    </div>
                    <p className="text-[15px] text-slate-600 mb-4 leading-relaxed max-w-[90%]">
                      {platform.desc}
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {platform.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2.5 py-1 bg-[#f0f2f4] text-slate-800 text-[13px] font-medium rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Global Accounts Page */}
        {activeTab === 'Global accounts' && (
          <div className="p-4 sm:p-6 lg:p-8 max-w-[1200px] w-full mx-auto">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 lg:mb-8">Global accounts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {globalAccounts.map((account, index) => (
                <div key={index} className="relative bg-white border border-gray-200 rounded-xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between h-[120px] overflow-hidden group hover:border-gray-300 transition-colors cursor-pointer">
                  {/* Active Indicator Line */}
                  {account.active && (
                    <div className="absolute left-0 top-6 bottom-6 w-1 bg-[#0f4347] rounded-r-md"></div>
                  )}
                  
                  {/* Decorative background pattern (subtle lines) */}
                  <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M60 10C32.3858 10 10 32.3858 10 60" stroke="black" strokeWidth="2"/>
                       <path d="M60 25C40.67 25 25 40.67 25 60" stroke="black" strokeWidth="2"/>
                       <path d="M60 40C48.9543 40 40 48.9543 40 60" stroke="black" strokeWidth="2"/>
                    </svg>
                  </div>

                  <div className="flex justify-between items-start z-10">
                    <span className="text-2xl leading-none">{account.flag}</span>
                    <button className="p-1 bg-[#f0f4f5] rounded-full text-[#0f4347] opacity-80 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="z-10 mt-2">
                    <div className="text-xl font-bold text-slate-900 leading-tight">{account.amount}</div>
                    <div className="text-[13px] text-slate-500 font-medium mt-0.5">{account.currency}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Transactions Page */}
        {activeTab === 'Transactions' && (
          <div className="p-4 sm:p-6 lg:p-8 max-w-[1200px] w-full mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 lg:mb-8">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">Transactions</h1>
                <p className="text-sm text-slate-500 font-medium">View and manage all your inbound and outbound payments.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#0f4347] focus:ring-1 focus:ring-[#0f4347] transition-all w-full sm:w-[240px]"
                  />
                </div>
                <button className="p-2 bg-white border border-gray-200 rounded-lg text-slate-600 hover:bg-gray-50 hover:text-slate-900 transition-colors shadow-sm">
                  <Filter className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap">
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Export</span>
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse min-w-[900px]">
                  <thead>
                    <tr className="border-b border-gray-200 bg-slate-50/50">
                      <th className="py-3.5 px-4 sm:px-5 text-[13px] font-medium text-slate-500 w-[12%] whitespace-nowrap">
                        <div className="flex items-center gap-1 cursor-pointer hover:text-slate-700">
                          Date & Time
                          <div className="flex flex-col -space-y-[6px]">
                            <ArrowUp className="w-3 h-3" />
                            <ArrowDown className="w-3 h-3 text-gray-300" />
                          </div>
                        </div>
                      </th>
                      <th className="py-3.5 px-4 sm:px-5 text-[13px] font-medium text-slate-500 w-[12%]">Transaction ID</th>
                      <th className="py-3.5 px-4 sm:px-5 text-[13px] font-medium text-slate-500 w-[22%]">Client name</th>
                      <th className="py-3.5 px-4 sm:px-5 text-[13px] font-medium text-slate-500 w-[14%]">
                        <div className="flex items-center gap-1 cursor-pointer hover:text-slate-700">
                          Status
                        </div>
                      </th>
                      <th className="py-3.5 px-4 sm:px-5 text-[13px] font-medium text-slate-500 w-[15%]">Method</th>
                      <th className="py-3.5 px-4 sm:px-5 text-[13px] font-medium text-slate-500 text-right w-[18%]">Amount</th>
                      <th className="py-3.5 px-4 sm:px-5 text-[13px] font-medium text-slate-500 w-[7%]"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {transactions.map((tx, index) => (
                      <tr key={index} className="hover:bg-[#fafafa] transition-colors group">
                        <td className="py-3 sm:py-4 px-4 sm:px-5 whitespace-nowrap">
                          <div className="text-[14px] text-slate-900 font-medium">{tx.date}</div>
                          <div className="text-[13px] text-slate-500 mt-0.5">{tx.time}</div>
                        </td>
                        <td className="py-3 sm:py-4 px-4 sm:px-5 text-[14px] text-slate-600 font-medium whitespace-nowrap">
                          {tx.id}
                        </td>
                        <td className="py-3 sm:py-4 px-4 sm:px-5">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-[11px] font-bold ${tx.clientBg} ${tx.clientColor}`}>
                              {tx.clientInitials}
                            </div>
                            <span className="text-[14px] text-slate-900 font-medium truncate">{tx.clientName}</span>
                          </div>
                        </td>
                        <td className="py-3 sm:py-4 px-4 sm:px-5">
                          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-medium ${tx.statusColor} whitespace-nowrap`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${tx.dotColor}`}></span>
                            {tx.status}
                          </div>
                        </td>
                        <td className="py-3 sm:py-4 px-4 sm:px-5 text-[14px] text-slate-600 whitespace-nowrap">
                          {tx.method}
                        </td>
                        <td className="py-3 sm:py-4 px-4 sm:px-5 text-right whitespace-nowrap">
                          <span className="text-[14px] font-bold text-slate-900">{tx.amount}</span>
                        </td>
                        <td className="py-3 sm:py-4 px-4 sm:px-5 text-right">
                          <button className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-gray-100 rounded-md transition-colors opacity-0 group-hover:opacity-100">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-t border-gray-100 bg-white">
                <span className="text-[13px] text-slate-500">Showing <span className="font-medium text-slate-900">1</span> to <span className="font-medium text-slate-900">6</span> of <span className="font-medium text-slate-900">6</span> results</span>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 border border-gray-200 rounded-md text-[13px] font-medium text-slate-400 cursor-not-allowed">
                    Previous
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center bg-[#f0f4f5] text-[#0f4347] rounded-md text-[13px] font-medium">
                    1
                  </button>
                  <button className="px-3 py-1.5 border border-gray-200 rounded-md text-[13px] font-medium text-slate-400 cursor-not-allowed">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Downtime Pages */}
        {['Invoicing', 'Quick Links', 'Insights', 'Clients'].includes(activeTab) && (
          <div className="flex-1 flex flex-col items-center justify-center p-6 min-h-[60vh] text-center">
            <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center mb-5">
              <AlertCircle className="w-8 h-8 text-slate-400 stroke-[1.5]" />
            </div>
            <p className="text-[15px] font-medium text-slate-600 max-w-[320px] leading-relaxed">
              We’re currently experiencing temporary downtime. Please try again shortly.
            </p>
          </div>
        )}
      </main>

      {/* Profile Modal / Bottom Sheet */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-[1px] transition-opacity"
            onClick={() => setIsProfileModalOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white w-full sm:w-[400px] sm:rounded-2xl rounded-t-3xl pb-8 pt-3 px-5 sm:px-6 flex flex-col z-10 animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:fade-in-0 duration-200">
            {/* Handle */}
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
            
            <button 
              onClick={() => setIsProfileModalOpen(false)}
              className="absolute right-5 top-5 p-1 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5 stroke-[2]" />
            </button>

            <div className="bg-[#f0f4f7] rounded-xl p-6 flex flex-col items-center mt-2 mb-6">
              <div className="w-[42px] h-[42px] rounded-lg bg-[#faeef2] text-[#4f323a] flex items-center justify-center font-medium text-lg mb-3">
                D
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-0.5">Deeshan</h3>
              <p className="text-[14px] text-slate-500 font-medium">deeshana374@gmail.com</p>
            </div>

            <div className="h-[1px] w-full bg-gray-100 mb-6"></div>

            <button 
              onClick={() => {
                setIsAuthenticated(false);
                setIsProfileModalOpen(false);
              }}
              className="w-full py-2.5 border border-[#0f4347] text-[#0f4347] font-medium rounded-lg hover:bg-[#f6f8f9] transition-colors text-[15px]"
            >
              Sign out
            </button>
          </div>
        </div>
      )}

      {/* Action Downtime Modal */}
      {isActionDowntimeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-[1px] transition-opacity"
            onClick={() => setIsActionDowntimeOpen(false)}
          ></div>
          <div className="relative bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center max-w-[400px] w-full z-10 animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsActionDowntimeOpen(false)}
              className="absolute right-4 top-4 p-1 text-slate-400 hover:text-slate-700 transition-colors"
            >
              <X className="w-5 h-5 stroke-[2]" />
            </button>
            <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center mb-5 mt-2">
              <AlertCircle className="w-8 h-8 text-slate-400 stroke-[1.5]" />
            </div>
            <p className="text-[15px] font-medium text-slate-600 leading-relaxed">
              We’re currently experiencing temporary downtime. Please try again shortly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
