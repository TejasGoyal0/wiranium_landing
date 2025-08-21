'use client';

import { ArrowLeftIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const plans = [
    {
      name: 'Basic',
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: 'Perfect for small stores',
      features: [
        'Up to 25 Returns Per Month',
        'AI Driven Customer Score',
        'Customer Segmentation Tags',
        'Automated Refund Declines'
      ],
      notIncluded: [],
      popular: false,
      isFree: true
    },
    {
      name: 'Business',
      monthlyPrice: 39.99,
      yearlyPrice: 399.99,
      description: 'Ideal for growing businesses',
      features: [
        'Up to 90 Returns Per Month',
        'AI Driven Customer Score',
        'Customer Segmentation Tags',
        'Automated Refund Declines'
      ],
      notIncluded: [],
      popular: true,
      isFree: false
    },
    {
      name: 'Enterprise',
      monthlyPrice: 89.99,
      yearlyPrice: 799.99,
      description: 'For large-scale operations',
      features: [
        'Up to 300 Returns Per Month',
        'AI Driven Customer Score',
        'Customer Segmentation Tags',
        'Automated Refund Declines'
      ],
      notIncluded: [],
      popular: false,
      isFree: false
    }
  ];

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
              Simple, transparent{' '}
              <span className="text-[#00cc88]">pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Choose the perfect plan for your Shopify store. All plans include our core return management features.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#00cc88] focus:ring-offset-2 ${
                  isYearly ? 'bg-[#00cc88]' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearly ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                Yearly
              </span>
              {isYearly && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#00cc88]/10 text-[#00cc88]">
                  Save up to 26%
                </span>
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-[#00cc88] bg-white shadow-xl'
                    : 'border-gray-200 bg-white shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-[#00cc88] text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                                     <div className="mb-6">
                     {plan.isFree ? (
                       <span className="text-4xl font-bold text-gray-900">Free</span>
                     ) : (
                       <>
                         <span className="text-4xl font-bold text-gray-900">
                           ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                         </span>
                         <span className="text-gray-500 ml-2">
                           /{isYearly ? 'year' : 'month'}
                         </span>
                         {isYearly && (
                           <div className="text-sm text-[#00cc88] mt-2">
                             or ${plan.monthlyPrice}/month
                           </div>
                         )}
                       </>
                     )}
                   </div>

                                      <Link
                      href="https://apps.shopify.com/return-shield-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                      plan.popular
                        ? 'text-white bg-[#00cc88] hover:bg-[#00b377] shadow-lg hover:shadow-xl'
                        : 'text-gray-900 border-2 border-gray-300 hover:border-[#00cc88] hover:bg-[#00cc88] hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                  {!plan.isFree && (
                    <div className="mt-3 text-sm text-gray-500">
                      7-day free trial
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-4">What&apos;s included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-[#00cc88] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.notIncluded.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4">Not included:</h4>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <XMarkIcon className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Everything you need to know about Wiranium&apos;s pricing and features
                    </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                  <button 
                    onClick={() => toggleFAQ(0)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="font-semibold text-gray-900">Can I change plans anytime?</h3>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openFAQ === 0 ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`px-6 pb-4 transition-all duration-300 ${openFAQ === 0 ? 'block' : 'hidden'}`}>
                    <p className="text-gray-600 leading-relaxed">
                      Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we&apos;ll prorate any billing adjustments.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                  <button 
                    onClick={() => toggleFAQ(1)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="font-semibold text-gray-900">Is there a free trial?</h3>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openFAQ === 1 ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`px-6 pb-4 transition-all duration-300 ${openFAQ === 1 ? 'block' : 'hidden'}`}>
                    <p className="text-gray-600 leading-relaxed">
                      Yes, all paid plans come with a 7-day free trial. No credit card required to start. The Basic plan is completely free forever.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                  <button 
                    onClick={() => toggleFAQ(2)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="font-semibold text-gray-900">What payment methods do you accept?</h3>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openFAQ === 2 ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`px-6 pb-4 transition-all duration-300 ${openFAQ === 2 ? 'block' : 'hidden'}`}>
                    <p className="text-gray-600 leading-relaxed">
                      We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay for your convenience.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                  <button 
                    onClick={() => toggleFAQ(3)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="font-semibold text-gray-900">How does the return limit work?</h3>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openFAQ === 3 ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`px-6 pb-4 transition-all duration-300 ${openFAQ === 3 ? 'block' : 'hidden'}`}>
                    <p className="text-gray-600 leading-relaxed">
                      Each plan has a monthly return limit. If you exceed this limit, we&apos;ll notify you and you can upgrade to a higher plan.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                  <button 
                    onClick={() => toggleFAQ(4)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="font-semibold text-gray-900">Is my data secure?</h3>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openFAQ === 4 ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`px-6 pb-4 transition-all duration-300 ${openFAQ === 4 ? 'block' : 'hidden'}`}>
                    <p className="text-gray-600 leading-relaxed">
                      Absolutely. We use enterprise-grade security and are fully compliant with Shopify&apos;s security standards and GDPR requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a custom plan?</h3>
              <p className="text-gray-600 mb-6">
                Contact us for enterprise pricing and custom solutions tailored to your specific needs.
              </p>
              <Link
                href="https://apps.shopify.com/return-shield-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00cc88] hover:bg-[#00b377] transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl"
              >
                Install on Shopify
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 