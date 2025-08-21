'use client';

import { ArrowLeftIcon, CalendarIcon, ClockIcon, CheckIcon, UserGroupIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function BookDemo() {
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
        
        <div className="relative mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              Book Your{' '}
              <span className="text-[#00cc88]">Demo</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Schedule a personalized demo of Wiranium&apos;s return management platform to see how we can help reduce your refunds and increase profits.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#00cc88]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <VideoCameraIcon className="w-8 h-8 text-[#00cc88]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Demo</h3>
              <p className="text-gray-600 text-sm">
                See Wiranium in action with a personalized walkthrough of your specific use case.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#00cc88]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-8 h-8 text-[#00cc88]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">
                Get answers to all your questions from our return management specialists.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#00cc88]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-[#00cc88]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">30 Minutes</h3>
              <p className="text-gray-600 text-sm">
                Quick, focused demo that fits into your busy schedule.
              </p>
            </div>
          </div>

          {/* Calendly Integration */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-[#00cc88]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarIcon className="w-10 h-10 text-[#00cc88]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Preferred Time</h2>
              <p className="text-gray-600 mb-6">
                Click the button below to open the calendar and schedule your demo.
              </p>
              
              {/* Direct Calendly Link Button */}
              <a
                href="https://calendly.com/wiranium/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#00c792] hover:bg-[#00b377] transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
              >
                <CalendarIcon className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-gray-50 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What to Expect</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <CheckIcon className="w-5 h-5 text-[#00cc88] mt-0.5 flex-shrink-0" />
                  <span>Platform overview and key features</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckIcon className="w-5 h-5 text-[#00cc88] mt-0.5 flex-shrink-0" />
                  <span>ROI calculation for your business</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckIcon className="w-5 h-5 text-[#00cc88] mt-0.5 flex-shrink-0" />
                  <span>Implementation timeline</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckIcon className="w-5 h-5 text-[#00cc88] mt-0.5 flex-shrink-0" />
                  <span>Q&A session</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 