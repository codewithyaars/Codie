import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Float, Sphere } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { Mesh, Vector3 } from 'three';
import { Code, Zap, Brain, Users, ArrowRight, Star, CheckCircle } from 'lucide-react';

interface FloatingLogoProps {
  position: Vector3;
  text: string;
  color: string;
  speed: number;
  scale: number;
}

const FloatingLogo: React.FC<FloatingLogoProps> = ({ position, text, color, speed, scale }) => {
  const meshRef = useRef<Mesh>(null!);
  const textRef = useRef<any>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed;
      meshRef.current.rotation.y += delta * speed * 0.7;
      meshRef.current.rotation.z += delta * speed * 0.3;
      
      meshRef.current.position.y = position.y + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.position.x = position.x + Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
    
    if (textRef.current) {
      textRef.current.rotation.y += delta * speed * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group ref={meshRef} position={position} scale={scale}>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.7} 
            roughness={0.3}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>
        
        <Text
          ref={textRef}
          position={[0, -1.5, 0]}
          fontSize={0.3}
          color={color}
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
        
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.2, 1.4, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.3} />
        </mesh>
      </group>
    </Float>
  );
};

const ParticleField: React.FC = () => {
  const particlesRef = useRef<Mesh>(null!);
  
  const particles = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < 100; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ]
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={particlesRef}>
      {particles.map((particle, index) => (
        <Sphere key={index} position={particle.position as [number, number, number]} args={[0.02, 8, 8]}>
          <meshBasicMaterial color="#00ff88" transparent opacity={0.6} />
        </Sphere>
      ))}
    </group>
  );
};

const Scene3D: React.FC = () => {
  const logos = [
    { position: new Vector3(-4, 2, 0), text: 'HTML', color: '#e34c26', speed: 1, scale: 1 },
    { position: new Vector3(4, -1, -2), text: 'CSS', color: '#1572b6', speed: 0.8, scale: 1.2 },
    { position: new Vector3(0, 3, -1), text: 'JS', color: '#f7df1e', speed: 1.2, scale: 0.9 },
    { position: new Vector3(-3, -2, 1), text: 'React', color: '#61dafb', speed: 0.9, scale: 0.8 },
    { position: new Vector3(3, 1, -3), text: 'Node', color: '#339933', speed: 1.1, scale: 1.1 },
    { position: new Vector3(-1, -3, 2), text: 'Vue', color: '#4fc08d', speed: 0.7, scale: 0.9 },
  ];

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ff88" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff0080" />
      <spotLight position={[0, 10, 0]} intensity={0.8} color="#0080ff" />
      
      {logos.map((logo, index) => (
        <FloatingLogo
          key={index}
          position={logo.position}
          text={logo.text}
          color={logo.color}
          speed={logo.speed}
          scale={logo.scale}
        />
      ))}
      
      <ParticleField />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

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
      name: "Sarah Johnson",
      role: "Frontend Developer",
      content: "CODIEE transformed my coding journey. The AI tutor is incredibly helpful!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Full Stack Developer",
      content: "The 3D learning environment makes programming concepts so much easier to understand.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Software Engineer",
      content: "Best programming learning platform I've ever used. Highly recommended!",
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