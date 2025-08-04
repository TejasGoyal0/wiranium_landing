'use client';

import { ArrowLeftIcon, CheckCircleIcon, ClockIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LaunchingSoon() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Email validation function
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Navigation */}
      <nav className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-[#00cc88] transition-colors">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative px-4 py-20 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#00cc88]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00cc88]/3 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-[#00cc88]/10 border border-[#00cc88]/20 rounded-full text-sm font-medium text-[#00cc88] mb-8">
            <ClockIcon className="w-4 h-4 mr-2" />
            Launching Soon
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
            <span className="text-[#00cc88]">Wiranium</span> is coming to{' '}
            <span className="text-gray-900">Shopify</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Be the first to know when we launch. Join our waitlist and get{' '}
            <span className="font-semibold text-[#00cc88]">early access</span> with exclusive benefits.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-[#00cc88]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-6 h-6 text-[#00cc88]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Early Access</h3>
              <p className="text-sm text-gray-600">Get notified first when we launch</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-[#00cc88]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-6 h-6 text-[#00cc88]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Exclusive Discount</h3>
              <p className="text-sm text-gray-600">Special pricing for waitlist members</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-[#00cc88]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-6 h-6 text-[#00cc88]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Priority Support</h3>
              <p className="text-sm text-gray-600">Direct access to our team</p>
            </div>
          </div>

          {/* Waitlist Form */}
          {!isSubmitted ? (
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                      <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00cc88] focus:border-transparent outline-none transition-all placeholder-gray-500 text-gray-900"
                    />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#00cc88] hover:bg-[#00b377] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Joining Waitlist...
                    </>
                  ) : (
                    'Join the Waitlist'
                  )}
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-4">
                We&apos;ll only use your email to notify you about the launch. No spam, ever.
              </p>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-[#00cc88]/10 border border-[#00cc88]/20 rounded-xl p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-[#00cc88] rounded-full flex items-center justify-center">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">You&apos;re on the list!</h3>
                <p className="text-gray-600 mb-4">
                  Thanks for joining our waitlist. We&apos;ll notify you as soon as Wiranium launches on Shopify.
                </p>
                                  <div className="text-sm text-gray-500">
                    <p>What happens next?</p>
                    <ul className="mt-2 space-y-1">
                      <li>• We&apos;ll send you launch updates</li>
                      <li>• You&apos;ll get early access when we go live</li>
                      <li>• Exclusive discount codes will be sent to your email</li>
                    </ul>
                  </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center mb-4">
            <Image 
              src="/wirelogo.png" 
              alt="Wiranium" 
              width={150}
              height={150}
              style={{
                height: '150px !important', 
                width: 'auto !important', 
                minHeight: '150px !important',
                maxHeight: 'none !important',
                border: '3px solid green'
              }}
            />
          </div>
          <p className="text-gray-600 text-sm">
            Protecting your Shopify store&apos;s revenue with intelligent return management.
          </p>
        </div>
      </footer>
    </div>
  );
} 