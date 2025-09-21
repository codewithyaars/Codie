import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Code, Zap, Brain, Users, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { Scene3D } from './Scene3D';

export const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Interactive Learning",
      description: "Learn programming through hands-on projects and real-world examples"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Tutoring",
      description: "Get personalized help and explanations from our advanced AI tutor"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and predictions"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Support",
      description: "Join a community of learners and get help when you need it"
    }
  ];

  const testimonials = [
    {
      name: "Shravani",
      role: "Full Stack Developer",
      content: "CODIEE transformed my coding journey. The AI tutor is incredibly helpful and the 3D learning environment is amazing!",
      rating: 5
    },
    {
      name: "Madhura",
      role: "Frontend Developer",
      content: "The interactive lessons and AI-powered progress tracking helped me master JavaScript faster than I ever imagined.",
      rating: 5
    },
    {
      name: "Pawan",
      role: "Software Engineer",
      content: "Best programming learning platform I've ever used. The personalized learning path is incredible!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <Scene3D />
      
      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-green-400" />
            <span className="text-2xl font-bold">CODIEE</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-green-400 transition-colors">Features</a>
            <Link to="/ai-services" className="hover:text-green-400 transition-colors">AI Services</Link>
            <a href="#about" className="hover:text-green-400 transition-colors">About</a>
            <Link to="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
            <Link 
              to="/login" 
              className="bg-gradient-to-r from-green-500 to-blue-600 px-6 py-2 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            CODIEE
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Master programming with our revolutionary 3D learning platform powered by AI. 
            Experience coding like never before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/login"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              to="/ai-services"
              className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-400 hover:text-black transition-all transform hover:scale-105"
            >
              Explore AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Offer</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the features that make CODIEE the ultimate programming learning platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-green-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Preview */}
      <section className="relative z-10 py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the power of artificial intelligence in your learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-500/20 to-blue-600/20 backdrop-blur-xl rounded-2xl border border-green-500/30 p-8 text-center">
              <Brain className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">AI Tutor</h3>
              <p className="text-gray-300 mb-6">Get instant help and explanations for any programming concept</p>
              <div className="flex items-center justify-center text-green-400">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>24/7 Available</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-8 text-center">
              <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Progress Prediction</h3>
              <p className="text-gray-300 mb-6">AI analyzes your learning patterns to predict your success</p>
              <div className="flex items-center justify-center text-purple-400">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Smart Analytics</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-xl rounded-2xl border border-blue-500/30 p-8 text-center">
              <Code className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Code Review</h3>
              <p className="text-gray-300 mb-6">Get AI-powered feedback on your code quality and style</p>
              <div className="flex items-center justify-center text-blue-400">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Instant Feedback</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/ai-services"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105 inline-flex items-center"
            >
              Explore All AI Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Students Say</h2>
            <p className="text-xl text-gray-400">Join thousands of successful developers who started with CODIEE</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900/80 backdrop-blur-xl border-t border-gray-700/50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold">CODIEE</span>
              </div>
              <p className="text-gray-400 mb-4">
                Revolutionizing programming education with 3D learning and AI technology.
              </p>
              <div className="text-sm text-gray-500">
                © 2025 CODIEE. All rights reserved.
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/login" className="hover:text-green-400 transition-colors">Dashboard</Link></li>
                <li><Link to="/ai-services" className="hover:text-green-400 transition-colors">AI Services</Link></li>
                <li><a href="#features" className="hover:text-green-400 transition-colors">Features</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/contact" className="hover:text-green-400 transition-colors">Contact Us</Link></li>
                <li><a href="mailto:harshmeshgavali@gmail.com" className="hover:text-green-400 transition-colors">Help Center</a></li>
                <li><Link to="/terms" className="hover:text-green-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-green-400 transition-colors">Terms of Service</Link></li>
                <li><a href="mailto:harshmeshgavali@gmail.com" className="hover:text-green-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};