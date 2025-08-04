'use client';

import { ArrowLeftIcon, CalendarIcon, ClockIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BookDemo() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [timezone, setTimezone] = useState<'PT' | 'IST'>('PT');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate available dates (next 30 days)
  const availableDates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1); // Start from tomorrow
    return date;
  });

  // Available time slots in PT
  const timeSlotsPT = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  // Available time slots in IST (PT + 12.5 hours)
  const timeSlotsIST = [
    '09:30 PM', '10:30 PM', '11:30 PM', '12:30 AM',
    '01:30 AM', '02:30 AM', '03:30 AM', '04:30 AM'
  ];

  const timeSlots = timezone === 'PT' ? timeSlotsPT : timeSlotsIST;

  // Get day name and date
  const getDayName = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const getDateNumber = (date: Date) => {
    return date.getDate();
  };

  const getMonthName = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short' });
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(''); // Reset time when date changes
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleTimezoneChange = (newTimezone: 'PT' | 'IST') => {
    setTimezone(newTimezone);
    setSelectedTime(''); // Reset time when timezone changes
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Email validation function
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time');
      return;
    }

    if (!formData.name || !formData.email || !formData.company) {
      alert('Please fill in all required fields: Name, Email, and Company');
      return;
    }

    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
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

          {!isSubmitted ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calendar Section */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <CalendarIcon className="w-6 h-6 text-[#00cc88] mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Select Date & Time</h2>
                </div>

                {/* Date Selection */}
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Choose a Date</h3>
                  <div className="grid grid-cols-7 gap-2">
                    {availableDates.slice(0, 14).map((date, index) => (
                      <button
                        key={index}
                        onClick={() => handleDateSelect(date)}
                        className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                          selectedDate && selectedDate.toDateString() === date.toDateString()
                            ? 'border-[#00cc88] bg-[#00cc88]/10 text-[#00cc88]'
                            : 'border-gray-200 hover:border-[#00cc88]/50 hover:bg-[#00cc88]/5 text-gray-700'
                        }`}
                      >
                        <div className="text-xs font-medium text-gray-600">{getDayName(date)}</div>
                        <div className="text-lg font-bold text-gray-900">{getDateNumber(date)}</div>
                        <div className="text-xs text-gray-500">{getMonthName(date)}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                {selectedDate && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">Choose a Time</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-700 font-medium">Timezone:</span>
                        <div className="flex bg-gray-100 rounded-lg p-1">
                          <button
                            type="button"
                            onClick={() => handleTimezoneChange('PT')}
                            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                              timezone === 'PT'
                                ? 'bg-white text-[#00cc88] shadow-sm'
                                : 'text-gray-700 hover:text-gray-900'
                            }`}
                          >
                            PT
                          </button>
                          <button
                            type="button"
                            onClick={() => handleTimezoneChange('IST')}
                            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                              timezone === 'IST'
                                ? 'bg-white text-[#00cc88] shadow-sm'
                                : 'text-gray-700 hover:text-gray-900'
                            }`}
                          >
                            IST
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((time, index) => (
                        <button
                          key={index}
                          onClick={() => handleTimeSelect(time)}
                          className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                            selectedTime === time
                              ? 'border-[#00cc88] bg-[#00cc88]/10 text-[#00cc88]'
                              : 'border-gray-200 hover:border-[#00cc88]/50 hover:bg-[#00cc88]/5 text-gray-700'
                          }`}
                        >
                          <div className="flex items-center justify-center">
                            <ClockIcon className="w-4 h-4 mr-2" />
                            <span>{time}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Form Section */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Information</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00cc88] focus:border-transparent outline-none transition-all placeholder-gray-500 text-gray-900"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00cc88] focus:border-transparent outline-none transition-all placeholder-gray-500 text-gray-900"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00cc88] focus:border-transparent outline-none transition-all placeholder-gray-500 text-gray-900"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00cc88] focus:border-transparent outline-none transition-all placeholder-gray-500 text-gray-900"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00cc88] focus:border-transparent outline-none transition-all placeholder-gray-500 text-gray-900"
                      placeholder="Tell us about your current return process and any specific challenges you&apos;re facing..."
                    />
                  </div>

                                    {selectedDate && selectedTime && formData.name && formData.email && formData.company && (
                    <div className="bg-[#00cc88]/10 border border-[#00cc88]/20 rounded-lg p-4">
                      <div className="flex items-center text-[#00cc88] mb-2">
                        <CheckIcon className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Ready to Schedule</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {selectedDate.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })} at {selectedTime} ({timezone})
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.company}
                    className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#00cc88] hover:bg-[#00b377] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl"
                  >
                    Schedule Demo
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-[#00cc88] rounded-full flex items-center justify-center">
                    <CheckIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Demo Scheduled Successfully!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for scheduling your demo. We&apos;ve sent a confirmation email with calendar invites and meeting details.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                                     <p className="text-sm text-gray-600">
                     <strong>Demo Details:</strong><br />
                     {selectedDate?.toLocaleDateString('en-US', { 
                       weekday: 'long', 
                       year: 'numeric', 
                       month: 'long', 
                       day: 'numeric' 
                     })} at {selectedTime} ({timezone})
                   </p>
                </div>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-[#00cc88] border-2 border-[#00cc88] hover:bg-[#00cc88] hover:text-white transition-all duration-300 rounded-lg"
                >
                  Back to Home
                </Link>
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