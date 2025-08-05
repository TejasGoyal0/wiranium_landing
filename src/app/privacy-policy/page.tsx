'use client';

import { ArrowLeftIcon, ShieldCheckIcon, LockClosedIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeftIcon className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600 font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <ShieldCheckIcon className="w-6 h-6 text-[#00cc88]" />
              <span className="text-lg font-semibold text-gray-900">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Image 
                src="/wirelogo.png" 
                alt="Return Shield" 
                width={120}
                height={120}
                style={{
                  height: '120px !important',
                  width: 'auto !important',
                  minHeight: '120px !important',
                  maxHeight: 'none !important'
                }}
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This Privacy Policy describes how Return Shield (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, and protects your information when you use our Shopify app and related services.
            </p>
            <div className="flex items-center justify-center mt-4 space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <DocumentTextIcon className="w-4 h-4" />
                <span>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#introduction" className="hover:text-[#00cc88] transition-colors">1. Introduction and Scope</a></li>
              <li><a href="#information-collected" className="hover:text-[#00cc88] transition-colors">2. Information We Collect</a></li>
              <li><a href="#how-we-use" className="hover:text-[#00cc88] transition-colors">3. How We Use Your Information</a></li>
              <li><a href="#data-sharing" className="hover:text-[#00cc88] transition-colors">4. Data Sharing and Transfers</a></li>
              <li><a href="#data-retention" className="hover:text-[#00cc88] transition-colors">5. Data Retention and Deletion</a></li>
              <li><a href="#user-rights" className="hover:text-[#00cc88] transition-colors">6. Your Rights</a></li>
              <li><a href="#security" className="hover:text-[#00cc88] transition-colors">7. Security Measures</a></li>
              <li><a href="#international-transfers" className="hover:text-[#00cc88] transition-colors">8. International Data Transfers</a></li>
              <li><a href="#children-privacy" className="hover:text-[#00cc88] transition-colors">9. Children&apos;s Privacy</a></li>
              <li><a href="#legal-basis" className="hover:text-[#00cc88] transition-colors">10. Legal Basis for Processing (GDPR)</a></li>
              <li><a href="#california-rights" className="hover:text-[#00cc88] transition-colors">11. California Privacy Rights (CPRA)</a></li>
              <li><a href="#contact" className="hover:text-[#00cc88] transition-colors">12. Contact Information</a></li>
              <li><a href="#updates" className="hover:text-[#00cc88] transition-colors">13. Updates to This Policy</a></li>
            </ul>
          </div>

          {/* Introduction */}
          <section id="introduction" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction and Scope</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-4">
                Return Shield is a Shopify app that helps merchants manage returns and customer ratings using artificial intelligence (AI). This Privacy Policy applies to all users of our app, including merchants who install Return Shield on their Shopify stores and their customers whose data we process.
              </p>
              <p className="text-gray-600 mb-4">
                This policy describes how we collect, use, store, and protect information when you use Return Shield. We are committed to protecting your privacy and ensuring compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR) and the California Privacy Rights Act (CPRA).
              </p>
              <p className="text-gray-600">
                By using Return Shield, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our app.
              </p>
            </div>
          </section>

          {/* Information Collected */}
          <section id="information-collected" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2.1 Shopify API Data</h3>
                <p className="text-gray-600 mb-3">We collect the following information through Shopify&apos;s APIs:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>Customer Information:</strong> Name, email address, phone number, order history, return history, and customer preferences</li>
                  <li><strong>Order Data:</strong> Order IDs, fulfillment status, order amounts, products purchased, shipping information, and payment details</li>
                  <li><strong>Product Information:</strong> Product IDs, titles, variants, descriptions, and inventory levels</li>
                  <li><strong>Return Requests:</strong> Return request details, status, reasons, and associated customer information</li>
                  <li><strong>Shop Information:</strong> Store details, settings, and configuration preferences</li>
                  <li><strong>Webhook Data:</strong> Real-time event data for orders, returns, products, and compliance requests</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2.2 Merchant Data</h3>
                <p className="text-gray-600 mb-3">We collect information from merchants who use our app:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>Account Information:</strong> Store connection details, access tokens, and authentication credentials</li>
                  <li><strong>Billing Information:</strong> Subscription details, payment information, and billing history</li>
                  <li><strong>App Settings:</strong> Configuration preferences, policy settings, and threshold configurations</li>
                  <li><strong>Support Information:</strong> Contact details, support requests, and communication history</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2.3 Customer Data</h3>
                <p className="text-gray-600 mb-3">We process customer data to provide our services:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>AI Ratings:</strong> Customer ratings calculated by our AI model based on order and return patterns</li>
                  <li><strong>Return History:</strong> Detailed return request history and associated patterns</li>
                  <li><strong>Order Fulfillment:</strong> Order fulfillment data and delivery information</li>
                  <li><strong>Customer Segmentation:</strong> AI-generated customer segmentation and behavioral analysis</li>
                  <li><strong>Transaction Records:</strong> Purchase history and transaction details</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2.4 Technical Data</h3>
                <p className="text-gray-600 mb-3">We automatically collect certain technical information:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>Usage Data:</strong> App usage patterns, feature utilization, and performance metrics</li>
                  <li><strong>Log Data:</strong> Server logs, error reports, and system performance data</li>
                  <li><strong>Device Information:</strong> Device type, operating system, and browser information</li>
                  <li><strong>IP Addresses:</strong> IP addresses for security and analytics purposes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use */}
          <section id="how-we-use" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3.1 Core Service Functions</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>AI-Powered Customer Ratings:</strong> Calculate customer ratings using our AI model to assess return risk and customer behavior patterns</li>
                  <li><strong>Return Management:</strong> Process return requests and determine approval or rejection based on AI analysis</li>
                  <li><strong>Customer Segmentation:</strong> Generate customer segments and behavioral analysis for targeted marketing and risk assessment</li>
                  <li><strong>Dashboard Analytics:</strong> Provide insights, KPIs, and performance metrics to merchants</li>
                  <li><strong>Automated Workflows:</strong> Enable automated decision-making for returns and customer management</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3.2 AI Model Training and Improvement</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>Machine Learning:</strong> Use aggregated and anonymized data to improve AI model accuracy</li>
                  <li><strong>Pattern Recognition:</strong> Analyze return patterns to enhance predictive capabilities</li>
                  <li><strong>Algorithm Optimization:</strong> Continuously refine rating algorithms based on performance data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3.3 Administrative Purposes</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>Service Delivery:</strong> Maintain and operate the Return Shield app</li>
                  <li><strong>Customer Support:</strong> Respond to inquiries and provide technical assistance</li>
                  <li><strong>Billing and Payments:</strong> Process subscription fees and manage accounts</li>
                  <li><strong>Legal Compliance:</strong> Meet regulatory requirements and respond to compliance requests</li>
                  <li><strong>Security Monitoring:</strong> Detect and prevent fraud, security breaches, and unauthorized access</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section id="data-sharing" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing and Transfers</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4.1 Third-Party Service Providers</h3>
                <p className="text-gray-600 mb-3">We share data with specific third-party services necessary for our operations:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>AI Rating Service:</strong> Customer order history is sent to our external AI service (rate-xdhd.onrender.com) for rating calculations</li>
                  <li><strong>Cloud Infrastructure:</strong> Data is stored on secure cloud hosting providers with appropriate safeguards</li>
                  <li><strong>Payment Processors:</strong> Billing information is processed through secure payment gateways</li>
                  <li><strong>Analytics Providers:</strong> Anonymized usage data may be shared for performance monitoring</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4.2 Shopify Platform Integration</h3>
                <p className="text-gray-600 mb-3">We exchange data with Shopify through their APIs and webhook system:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>Webhook Processing:</strong> Receive real-time data updates for orders, returns, products, and compliance events</li>
                  <li><strong>API Calls:</strong> Retrieve and update store data as needed for app functionality</li>
                  <li><strong>HMAC Validation:</strong> All webhook communications are secured with HMAC validation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4.3 Legal Disclosures</h3>
                <p className="text-gray-600 mb-3">We may disclose your information when required by law or to protect our rights:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>To comply with legal obligations, court orders, or government requests</li>
                  <li>To protect our rights, property, or safety, or that of others</li>
                  <li>In connection with business transfers or acquisitions</li>
                  <li>To prevent fraud or unauthorized activities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4.4 Data Processing Agreements</h3>
                <p className="text-gray-600">
                  All third-party service providers are bound by data processing agreements that ensure they maintain appropriate security measures and only process data for specified purposes in accordance with our instructions.
                </p>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section id="data-retention" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention and Deletion</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5.1 Retention Periods</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>Customer Data:</strong> Retained for the duration of the merchant&apos;s active subscription to Return Shield</li>
                  <li><strong>Historical Analytics:</strong> Aggregated and anonymized data may be retained for up to 3 years for service improvement</li>
                  <li><strong>Support Records:</strong> Customer support communications retained for 2 years</li>
                  <li><strong>Billing Information:</strong> Retained for 7 years as required by tax and accounting regulations</li>
                  <li><strong>Log Data:</strong> Technical logs retained for 90 days for security and troubleshooting purposes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5.2 Automatic Data Deletion</h3>
                <p className="text-gray-600 mb-3">We automatically delete data in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>App Uninstall:</strong> All customer and merchant data is deleted within 30 days of app uninstallation</li>
                  <li><strong>Account Closure:</strong> Data deletion upon merchant account closure or subscription termination</li>
                  <li><strong>Compliance Requests:</strong> Immediate deletion upon valid data deletion requests</li>
                  <li><strong>Retention Expiry:</strong> Automatic deletion when retention periods expire</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5.3 Data Portability</h3>
                <p className="text-gray-600">
                  Upon request, we can provide your data in a structured, commonly used, and machine-readable format to facilitate data portability to other services.
                </p>
              </div>
            </div>
          </section>

          {/* User Rights */}
          <section id="user-rights" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">6.1 Data Subject Rights</h3>
                <p className="text-gray-600 mb-3">You have the following rights regarding your personal data:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>Right of Access:</strong> Request a copy of your personal data we process</li>
                  <li><strong>Right of Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Right of Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Right of Portability:</strong> Receive your data in a portable format</li>
                  <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing in certain circumstances</li>
                  <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for processing where applicable</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">6.2 How to Exercise Your Rights</h3>
                <p className="text-gray-600 mb-3">To exercise your rights, please contact us through:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>Email:</strong> founder@wiranium.com</li>
                  <li><strong>Support Portal:</strong> Through your Return Shield dashboard</li>
                  <li><strong>Webhook Processing:</strong> We automatically process GDPR/CPRA compliance requests received via Shopify webhooks</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">6.3 Response Timeframes</h3>
                <p className="text-gray-600">
                  We will respond to your requests within 30 days of receipt. For complex requests, we may extend this period by an additional 60 days with proper notification.
                </p>
              </div>
            </div>
          </section>

          {/* Security */}
          <section id="security" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Security Measures</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">7.1 Technical Safeguards</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>Encryption:</strong> All data is encrypted in transit using TLS 1.3 and at rest using AES-256</li>
                  <li><strong>Database Security:</strong> PostgreSQL database with encrypted storage and access controls</li>
                  <li><strong>HMAC Validation:</strong> All webhook communications secured with HMAC signature verification</li>
                  <li><strong>Access Controls:</strong> Role-based access controls and multi-factor authentication</li>
                  <li><strong>Network Security:</strong> Firewalls, intrusion detection, and regular security monitoring</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">7.2 Operational Security</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>Regular Audits:</strong> Quarterly security assessments and penetration testing</li>
                  <li><strong>Staff Training:</strong> Regular security awareness training for all team members</li>
                  <li><strong>Incident Response:</strong> 24/7 monitoring and rapid incident response procedures</li>
                  <li><strong>Backup Systems:</strong> Regular encrypted backups with tested restore procedures</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">7.3 Compliance Certifications</h3>
                <p className="text-gray-600">
                  Our infrastructure providers maintain SOC 2 Type II, ISO 27001, and other relevant security certifications. We regularly review and audit our compliance with industry standards.
                </p>
              </div>
            </div>
          </section>

          {/* International Transfers */}
          <section id="international-transfers" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">8.1 Transfer Mechanisms</h3>
                <p className="text-gray-600 mb-3">When we transfer personal data internationally, we ensure appropriate safeguards:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>Adequacy Decisions:</strong> Transfers to countries with adequate data protection levels</li>
                  <li><strong>Standard Contractual Clauses:</strong> EU-approved standard contractual clauses for other transfers</li>
                  <li><strong>Certification Programs:</strong> Transfers under recognized certification frameworks</li>
                  <li><strong>Binding Corporate Rules:</strong> Internal data transfer agreements where applicable</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">8.2 Data Locations</h3>
                <p className="text-gray-600 mb-3">Your data may be processed in the following locations:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>Primary Storage:</strong> Cloud infrastructure in the United States and Europe</li>
                  <li><strong>AI Processing:</strong> External AI service hosted in secure cloud environments</li>
                  <li><strong>Backup Locations:</strong> Encrypted backups in geographically distributed data centers</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Children's Privacy */}
          <section id="children-privacy" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-4">
                Return Shield is designed for use by merchants and businesses, not for direct use by children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
              <p className="text-gray-600 mb-4">
                However, we may process information about customers who are minors as part of the order and return data provided by merchants. In such cases:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4 mb-4">
                <li>We rely on the merchant to obtain appropriate consent from parents or guardians</li>
                <li>We process such data only as necessary to provide our services to the merchant</li>
                <li>Parents or guardians can request access, correction, or deletion of their child&apos;s data</li>
              </ul>
              <p className="text-gray-600">
                If we become aware that we have collected personal information from a child under 13 without appropriate consent, we will delete such information promptly.
              </p>
            </div>
          </section>

          {/* Legal Basis */}
          <section id="legal-basis" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Legal Basis for Processing (GDPR)</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">10.1 Processing Purposes and Legal Bases</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Contract Performance</h4>
                    <p className="text-gray-600 text-sm">Processing necessary to provide Return Shield services to merchants, including AI rating calculations, return management, and analytics.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Legitimate Interests</h4>
                    <p className="text-gray-600 text-sm">Improving our AI models, fraud prevention, security monitoring, and customer support activities.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Legal Compliance</h4>
                    <p className="text-gray-600 text-sm">Meeting regulatory requirements, responding to legal requests, and maintaining records as required by law.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Consent</h4>
                    <p className="text-gray-600 text-sm">Where specifically required, such as for certain marketing communications or optional features.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">10.2 Legitimate Interest Assessments</h3>
                <p className="text-gray-600">
                  Where we rely on legitimate interests, we have conducted balancing tests to ensure our interests do not override your fundamental rights and freedoms. You have the right to object to processing based on legitimate interests.
                </p>
              </div>
            </div>
          </section>

          {/* California Rights */}
          <section id="california-rights" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. California Privacy Rights (CPRA)</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">11.1 Your California Privacy Rights</h3>
                <p className="text-gray-600 mb-3">If you are a California resident, you have additional rights under the CPRA:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>Right to Know:</strong> Request information about personal information collected, used, disclosed, or sold</li>
                  <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
                  <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information</li>
                  <li><strong>Right to Opt-Out:</strong> Opt out of the sale or sharing of personal information</li>
                  <li><strong>Right to Limit:</strong> Limit the use of sensitive personal information</li>
                  <li><strong>Right to Non-Discrimination:</strong> Not be discriminated against for exercising your rights</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">11.2 Categories of Personal Information</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm mb-3">We collect and process the following categories of personal information:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm ml-4">
                    <li><strong>Identifiers:</strong> Names, email addresses, phone numbers, customer IDs</li>
                    <li><strong>Commercial Information:</strong> Purchase history, return history, transaction records</li>
                    <li><strong>Internet Activity:</strong> App usage patterns, log data, device information</li>
                    <li><strong>Inferences:</strong> AI-generated customer ratings, behavioral analysis, segmentation data</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">11.3 Sale and Sharing of Personal Information</h3>
                <p className="text-gray-600 mb-3">
                  <strong>We do not sell personal information</strong> as defined by the CPRA. We may share personal information with service providers for business purposes as described in this policy.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">11.4 Exercising Your California Rights</h3>
                <p className="text-gray-600 mb-3">To exercise your California privacy rights:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Email us at: <strong>founder@wiranium.com</strong></li>
                  <li>Use the privacy request form in your Return Shield dashboard</li>
                  <li>We will verify your identity before processing requests</li>
                  <li>You may designate an authorized agent to make requests on your behalf</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section id="contact" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">12.1 Privacy Inquiries</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">For privacy-related questions, requests, or concerns:</p>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Email:</strong> founder@wiranium.com</p>
                    <p><strong>Response Time:</strong> Within 72 hours for initial acknowledgment</p>
                    <p><strong>Data Protection Officer:</strong> Available upon request</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">12.2 General Support</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">For general app support and technical issues:</p>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Email:</strong> support@returnshield.com</p>
                    <p><strong>Support Portal:</strong> Available through your Return Shield dashboard</p>
                    <p><strong>Business Hours:</strong> Monday-Friday, 9 AM - 6 PM EST</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">12.3 Regulatory Authorities</h3>
                <p className="text-gray-600">
                  You have the right to lodge a complaint with supervisory authorities in your jurisdiction if you believe we have not adequately addressed your privacy concerns.
                </p>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section id="updates" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Updates to This Policy</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">13.1 Policy Changes</h3>
                <p className="text-gray-600 mb-3">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li><strong>Material Changes:</strong> We will provide prominent notice at least 30 days before material changes take effect</li>
                  <li><strong>Minor Updates:</strong> We will update the &quot;Last updated&quot; date for non-material changes</li>
                  <li><strong>Notification Methods:</strong> Email notifications to merchants and in-app notifications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">13.2 Continued Use</h3>
                <p className="text-gray-600">
                  Your continued use of Return Shield after policy updates constitutes acceptance of the revised policy. If you do not agree with changes, you may discontinue use of the app.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">13.3 Policy Archive</h3>
                <p className="text-gray-600">
                  Previous versions of this Privacy Policy are available upon request for your reference.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <LockClosedIcon className="w-4 h-4" />
                <span>Secure & Compliant</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <ShieldCheckIcon className="w-4 h-4" />
                <span>GDPR & CPRA Ready</span>
              </div>
              <span>•</span>
              <span>Return Shield © {new Date().getFullYear()}</span>
            </div>
            <p className="text-center text-xs text-gray-400 mt-4">
              This Privacy Policy is effective as of {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} and applies to all users of the Return Shield app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}