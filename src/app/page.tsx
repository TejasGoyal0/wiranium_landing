'use client';

import { PlayIcon, CheckCircleIcon, ArrowRightIcon, Bars3Icon, XMarkIcon, ShoppingCartIcon, ChartBarIcon, CogIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  


  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image 
                src="/wirelogo.png" 
                alt="Wiranium" 
                width={100}
                height={100}
                style={{
                  height: '100px !important',
                  width: 'auto !important',
                  minHeight: '100px !important',
                  maxHeight: 'none !important'
                }}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-[#00cc88] font-medium transition-colors duration-200 whitespace-nowrap">
                Home
              </a>
              <Link href="/pricing" className="text-gray-700 hover:text-[#00cc88] font-medium transition-colors duration-200 whitespace-nowrap">
                Pricing
              </Link>
              <Link href="/book-demo" className="text-gray-700 hover:text-[#00cc88] font-medium transition-colors duration-200 whitespace-nowrap">
                Book A Demo
              </Link>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Link href="/launching-soon" className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-[#00cc88] hover:bg-[#00b377] transition-colors duration-200 rounded-lg shadow-sm hover:shadow-md whitespace-nowrap">
                Install On Shopify
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#00cc88] hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-[#00cc88] font-medium transition-colors duration-200">
                  Home
                </a>
                <Link href="/pricing" className="block px-3 py-2 text-gray-700 hover:text-[#00cc88] font-medium transition-colors duration-200">
                  Pricing
                </Link>
                <Link href="/book-demo" className="block px-3 py-2 text-gray-700 hover:text-[#00cc88] font-medium transition-colors duration-200">
                  Book A Demo
                </Link>
                <div className="pt-4">
                  <Link href="/launching-soon" className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-[#00cc88] hover:bg-[#00b377] transition-colors duration-200 rounded-lg shadow-sm hover:shadow-md">
                    Install On Shopify
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#00cc88]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00cc88]/3 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-[#00cc88]/10 border border-[#00cc88]/20 rounded-full text-sm font-medium text-[#00cc88] mb-8">
            <div className="w-2 h-2 bg-[#00cc88] rounded-full mr-2"></div>
            Free plan available • No credit card required
          </div>
          
          {/* Value Proposition */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight mb-8">
            <span className="text-[#00cc88] font-extrabold">24%</span> of{' '}
            <span className="text-[#00cc88] font-extrabold">Shopify Store</span>&apos;s refunds are avoidable.{' '}
            <span className="text-gray-900 font-extrabold">Fix it today.</span>
          </h1>
          
          {/* Subtext */}
          <p className="max-w-4xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed mb-12">
            Reduce refund leaks and enable smarter automated decisions with Wiranium&apos;s Return Shield. 
            Protect your revenue and streamline your returns process with AI-powered insights.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircleIcon className="w-4 h-4 text-[#00cc88] mr-2" />
              <span>Zero setup required</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="w-4 h-4 text-[#00cc88] mr-2" />
              <span>Free 7-day trial</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="w-4 h-4 text-[#00cc88] mr-2" />
              <span>24/7 support</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/launching-soon" className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#00cc88] hover:bg-[#00b377] transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-105">
              Install on Shopify
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link href="/book-demo" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 rounded-xl">
              Book A Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Why Choose Wiranium?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to protect your revenue and streamline your returns process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-[#00cc88]/10 rounded-lg flex items-center justify-center mb-4">
                <ChartBarIcon className="w-6 h-6 text-[#00cc88]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Analytics</h3>
              <p className="text-gray-600">
                Advanced machine learning algorithms analyze return patterns and customer behavior to identify potential fraud and abuse.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-[#00cc88]/10 rounded-lg flex items-center justify-center mb-4">
                <CogIcon className="w-6 h-6 text-[#00cc88]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Workflows</h3>
              <p className="text-gray-600">
                Set up custom rules and automation to handle returns efficiently, reducing manual work and human error.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-[#00cc88]/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircleIcon className="w-6 h-6 text-[#00cc88]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Declines</h3>
              <p className="text-gray-600">
                Automatically decline suspicious returns while approving legitimate ones, protecting your bottom line.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-[#00cc88]/10 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCartIcon className="w-6 h-6 text-[#00cc88]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Segmentation</h3>
              <p className="text-gray-600">
                Categorize customers based on return behavior and create targeted strategies for different segments.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-[#00cc88]/10 rounded-lg flex items-center justify-center mb-4">
                <ArrowRightIcon className="w-6 h-6 text-[#00cc88]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Monitoring</h3>
              <p className="text-gray-600">
                Get instant alerts and insights about return patterns, allowing you to act quickly and decisively.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-[#00cc88]/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircleIcon className="w-6 h-6 text-[#00cc88]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Integration</h3>
              <p className="text-gray-600">
                Seamlessly integrates with your existing Shopify store. No complex setup or technical knowledge required.
              </p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/book-demo" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#00cc88] hover:bg-[#00b377] transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl">
              See Features in Action
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How To Use Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              How To Use?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get started with Wiranium in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="group text-center p-6 rounded-xl border border-gray-700/30 bg-gray-800/20 backdrop-blur-sm hover:border-[#00cc88]/50 hover:bg-gray-800/40 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-[#00cc88]/20 rounded-lg flex items-center justify-center group-hover:bg-[#00cc88]/30 transition-colors duration-300">
                    <ShoppingCartIcon className="w-6 h-6 text-[#00cc88]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#00cc88] rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-white">1</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Install on Shopify</h3>
              <p className="text-gray-300">
                Add Wiranium to your Shopify store with just one click. No complex setup required.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="group text-center p-6 rounded-xl border border-gray-700/30 bg-gray-800/20 backdrop-blur-sm hover:border-[#00cc88]/50 hover:bg-gray-800/40 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-[#00cc88]/20 rounded-lg flex items-center justify-center group-hover:bg-[#00cc88]/30 transition-colors duration-300">
                    <ChartBarIcon className="w-6 h-6 text-[#00cc88]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#00cc88] rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-white">2</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Wait for orders and returns</h3>
              <p className="text-gray-300">
                Let Wiranium monitor your store activity and analyze return patterns automatically.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="group text-center p-6 rounded-xl border border-gray-700/30 bg-gray-800/20 backdrop-blur-sm hover:border-[#00cc88]/50 hover:bg-gray-800/40 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-[#00cc88]/20 rounded-lg flex items-center justify-center group-hover:bg-[#00cc88]/30 transition-colors duration-300">
                    <CogIcon className="w-6 h-6 text-[#00cc88]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#00cc88] rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-white">3</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Use the Return Dashboard</h3>
              <p className="text-gray-300">
                Access powerful analytics and automate workflows to reduce refunds and increase profits.
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center">
            <Link href="/book-demo" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#00cc88] hover:bg-[#00b377] transition-colors duration-200 rounded-lg shadow-lg hover:shadow-xl">
              Get Free Onboarding Assistance
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <div className="flex items-center mb-4">
                <Image 
                  src="/wirelogo.png" 
                  alt="Wiranium" 
                  width={200}
                  height={200}
                  style={{
                    height: '200px !important',
                    width: 'auto !important',
                    minHeight: '200px !important',
                    maxHeight: 'none !important'
                  }}
                />
              </div>
              <p className="text-gray-600 text-sm">
                Protecting your Shopify store&apos;s revenue with intelligent return management.
              </p>
            </div>
            
            {/* Navigation Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-[#00cc88] transition-colors">Home</a></li>
                <li><Link href="/pricing" className="text-gray-600 hover:text-[#00cc88] transition-colors">Pricing</Link></li>
                <li><Link href="/book-demo" className="text-gray-600 hover:text-[#00cc88] transition-colors">Book A Demo</Link></li>
              </ul>
            </div>
            
            {/* Contact & Social */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact & Social</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:founder@wiranium.com" className="text-gray-600 hover:text-[#00cc88] transition-colors">
                    founder@wiranium.com
                  </a>
                </li>
                <li>
                  <a href="tel:+916375113465" className="text-gray-600 hover:text-[#00cc88] transition-colors">
                    +91 6375113465
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#00cc88] transition-colors">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              © 2024 Wiranium. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
