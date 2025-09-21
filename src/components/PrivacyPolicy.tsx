import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Users } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="p-6 border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-green-400" />
            <span className="text-2xl font-bold">Privacy Policy</span>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-6 py-12">
        <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Last updated: January 2025</p>
          </div>

          <div className="space-y-8">
            <section>
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-green-400 mr-3" />
                <h2 className="text-2xl font-semibold">Information We Collect</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  At CODIEE, we collect information to provide you with the best learning experience possible:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Account information (username, email, password)</li>
                  <li>Learning progress and course completion data</li>
                  <li>Chat interactions with our AI tutor</li>
                  <li>Usage analytics to improve our platform</li>
                  <li>Device and browser information for technical support</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-blue-400 mr-3" />
                <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  We use your information to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide personalized learning experiences</li>
                  <li>Track your progress and suggest improvements</li>
                  <li>Improve our AI tutoring system</li>
                  <li>Send important updates about your account</li>
                  <li>Provide customer support when needed</li>
                  <li>Analyze platform usage to enhance features</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-semibold">Information Sharing</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share information only in these limited circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With service providers who help us operate our platform (under strict confidentiality agreements)</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-green-400 mr-3" />
                <h2 className="text-2xl font-semibold">Data Security</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and updates</li>
                  <li>Secure authentication systems</li>
                  <li>Limited access to personal data by authorized personnel only</li>
                  <li>Regular backups to prevent data loss</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <div className="text-gray-300 space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and associated data</li>
                  <li>Export your learning progress data</li>
                  <li>Opt-out of non-essential communications</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We use cookies and similar technologies to enhance your experience, remember your preferences, and analyze platform usage. You can control cookie settings through your browser.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We may update this privacy policy from time to time. We will notify you of any significant changes by email or through our platform.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  If you have any questions about this privacy policy or how we handle your data, please contact us:
                </p>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <p><strong>Email:</strong> <a href="mailto:harshmeshgavali@gmail.com" className="text-green-400 hover:text-green-300">harshmeshgavali@gmail.com</a></p>
                  <p><strong>Platform:</strong> CODIEE Learning Platform</p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all inline-flex items-center"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};