import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Code, Zap, TrendingUp, MessageCircle, FileText, ArrowLeft, Send } from 'lucide-react';
import { geminiService } from '../utils/geminiApi';

export const AIServices: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const services = [
    {
      id: 'tutor',
      title: 'AI Programming Tutor',
      description: 'Get instant help with programming concepts, debugging, and best practices',
      icon: <Brain className="h-8 w-8" />,
      color: 'from-green-500 to-blue-600',
      placeholder: 'Ask me anything about programming...'
    },
    {
      id: 'code-review',
      title: 'Code Review Assistant',
      description: 'Get AI-powered feedback on your code quality, style, and optimization',
      icon: <Code className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-600',
      placeholder: 'Paste your code here for review...'
    },
    {
      id: 'progress-prediction',
      title: 'Learning Progress Predictor',
      description: 'AI analyzes your learning patterns to predict success and suggest improvements',
      icon: <TrendingUp className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-600',
      placeholder: 'Tell me about your current learning progress...'
    },
    {
      id: 'concept-explainer',
      title: 'Concept Explainer',
      description: 'Break down complex programming concepts into easy-to-understand explanations',
      icon: <FileText className="h-8 w-8" />,
      color: 'from-orange-500 to-red-600',
      placeholder: 'Which programming concept would you like me to explain?'
    }
  ];

  const handleSubmit = async (serviceId: string) => {
    if (!input.trim() || loading) return;

    setLoading(true);
    try {
      let response = '';
      
      switch (serviceId) {
        case 'tutor':
          response = await geminiService.chatResponse(input);
          break;
        case 'code-review':
          response = await geminiService.reviewCode(input);
          break;
        case 'progress-prediction':
          response = await geminiService.predictProgress(input);
          break;
        case 'concept-explainer':
          response = await geminiService.explainConcept(input);
          break;
        default:
          response = await geminiService.chatResponse(input);
      }
      
      setOutput(response);
    } catch (error) {
      setOutput('Sorry, there was an error processing your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
            <Brain className="h-8 w-8 text-green-400" />
            <span className="text-2xl font-bold">CODIEE AI Services</span>
          </div>
          
          <Link 
            to="/login" 
            className="bg-gradient-to-r from-green-500 to-blue-600 px-6 py-2 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all"
          >
            Dashboard
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            AI-Powered Learning
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the future of programming education with our advanced AI services designed to accelerate your learning journey.
          </p>
        </div>

        {/* Services Grid */}
        {!activeService && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`bg-gradient-to-br ${service.color} bg-opacity-20 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 cursor-pointer hover:scale-105 transition-all duration-300 group`}
              >
                <div className="text-white mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="flex items-center text-green-400 font-semibold">
                  <span>Try Now</span>
                  <MessageCircle className="ml-2 h-5 w-5" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Active Service Interface */}
        {activeService && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">
                  {services.find(s => s.id === activeService)?.title}
                </h2>
                <button
                  onClick={() => {
                    setActiveService(null);
                    setInput('');
                    setOutput('');
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Your Input
                  </label>
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={services.find(s => s.id === activeService)?.placeholder}
                    className="w-full h-64 bg-gray-700/50 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 resize-none"
                  />
                  <button
                    onClick={() => handleSubmit(activeService)}
                    disabled={!input.trim() || loading}
                    className="mt-4 w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {loading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Get AI Response
                      </>
                    )}
                  </button>
                </div>

                {/* Output Section */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    AI Response
                  </label>
                  <div className="h-64 bg-gray-900/50 border border-gray-600 rounded-lg p-4 overflow-y-auto">
                    {output ? (
                      <div className="text-gray-100 whitespace-pre-wrap">{output}</div>
                    ) : (
                      <div className="text-gray-500 italic">
                        AI response will appear here...
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Service Features */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/40 backdrop-blur-xl rounded-xl border border-gray-700/50 p-6 text-center">
                <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Instant Results</h3>
                <p className="text-sm text-gray-400">Get immediate AI-powered responses to your queries</p>
              </div>
              
              <div className="bg-gray-800/40 backdrop-blur-xl rounded-xl border border-gray-700/50 p-6 text-center">
                <Brain className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Smart Analysis</h3>
                <p className="text-sm text-gray-400">Advanced AI understands context and provides relevant help</p>
              </div>
              
              <div className="bg-gray-800/40 backdrop-blur-xl rounded-xl border border-gray-700/50 p-6 text-center">
                <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Continuous Learning</h3>
                <p className="text-sm text-gray-400">AI improves with each interaction to serve you better</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        {!activeService && (
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">Ready to Accelerate Your Learning?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already using CODIEE's AI services to master programming faster than ever before.
            </p>
            <Link 
              to="/login"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all transform hover:scale-105 inline-flex items-center"
            >
              Start Learning Now
              <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};