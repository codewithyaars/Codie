import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

export const TermsOfService: React.FC = () => {
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
            <Scale className="h-8 w-8 text-green-400" />
            <span className="text-2xl font-bold">Terms of Service</span>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-6 py-12">
        <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-gray-400">Last updated: January 2025</p>
          </div>

          <div className="space-y-8">
            <section>
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                <h2 className="text-2xl font-semibold">Acceptance of Terms</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  By accessing and using CODIEE, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-blue-400 mr-3" />
                <h2 className="text-2xl font-semibold">Use License</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  Permission is granted to temporarily access CODIEE for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the platform</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-yellow-400 mr-3" />
                <h2 className="text-2xl font-semibold">User Accounts</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Safeguarding your password and account information</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Ensuring your account information remains up to date</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Scale className="h-6 w-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-semibold">Acceptable Use</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  You agree not to use CODIEE:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">AI Services</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Our AI tutoring and assistance services are provided "as is" and are intended for educational purposes. While we strive for accuracy:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>AI responses may not always be 100% accurate</li>
                  <li>You should verify important information independently</li>
                  <li>AI services are not a substitute for professional advice</li>
                  <li>We continuously improve our AI systems but cannot guarantee perfection</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  The service and its original content, features, and functionality are and will remain the exclusive property of CODIEE and its licensors. The service is protected by copyright, trademark, and other laws.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Termination</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever including but not limited to a breach of the Terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  The information on this platform is provided on an 'as is' basis. To the fullest extent permitted by law, CODIEE excludes all representations, warranties, conditions, and terms whether express or implied.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  In no event shall CODIEE, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
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